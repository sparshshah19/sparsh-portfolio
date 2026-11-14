export const metadata = { title: 'Qualities I Want to Bring in My Life: Surrender | Sparsh Shah' }

const font = "Georgia, 'Times New Roman', serif"

const prose: React.CSSProperties = {
  fontFamily: font,
  fontSize: 16,
  color: '#333',
  lineHeight: 1.8,
  marginBottom: 20,
}

const list: React.CSSProperties = {
  ...prose,
  paddingLeft: 24,
  listStyleType: 'disc',
}

const orderedList: React.CSSProperties = {
  ...list,
  listStyleType: 'decimal',
}

const li: React.CSSProperties = { marginBottom: 10 }

export default function SurrenderPost() {
  return (
    <main style={{ background: '#fff', minHeight: '100vh', paddingTop: 72, paddingBottom: 100 }}>
      <article style={{ maxWidth: 680, margin: '0 auto', padding: '0 28px' }}>
        <a href="/" style={{ fontFamily: font, fontSize: 16, color: '#888', textDecoration: 'underline', textUnderlineOffset: 3, display: 'block', marginBottom: 48 }}>
          ← back
        </a>

        <h1 style={{ fontFamily: font, fontSize: 30, fontWeight: 400, color: '#111', lineHeight: 1.25, marginBottom: 40 }}>
          Qualities I Want to Bring in My Life: Surrender
        </h1>

        <p style={prose}>
          today, i want to talk about a quality that is absolutely crucial to be successful. the ability to surrender.
        </p>

        <p style={prose}>before i start, what is my goal behind writing about this quality?</p>

        <ul style={list}>
          <li style={li}>to motivate others to bring this quality into their lives</li>
          <li style={li}>to help me think beyond the surface and reflect on how i can bring this quality into my life to be a more successful person</li>
        </ul>

        <p style={prose}>the first question that arises is <strong>what is surrender?</strong></p>

        <p style={prose}>my first thoughts on this were:</p>
        <ul style={list}>
          <li style={li}>giving something up</li>
          <li style={li}>sacrifice</li>
        </ul>

        <p style={prose}>
          but then if a robber puts you at gunpoint and tells you to give them everything you have, and you do, why is that not true surrender?
        </p>

        <p style={prose}>because it is out of <em>helplessness</em>.</p>

        <p style={prose}>
          the most important part of surrendering is giving something up, but out of your own accord, because of your own choice.
        </p>

        <p style={prose}>the next question that comes up is <strong>why should we surrender?</strong></p>

        <p style={prose}>because in order to achieve anything in life, you have to give something else up.</p>

        <p style={prose}>examples are:</p>

        <ul style={list}>
          <li style={li}>in order to maintain a relationship with someone, you sometimes have to give up your own happiness and your own desires to make the other person happy.</li>
          <li style={li}>in order to achieve good grades, you also have to put aside your own pleasures, such as sleep, hanging out with friends, and scrolling, to focus on studying.</li>
          <li style={li}>in order to achieve a strong physique, you have to be consistent with exercise and the food you consume, day in, day out, putting aside your cravings.</li>
        </ul>

        <p style={prose}>
          for me, i recently had a goal to run a marathon. though now i do think running is healing, initially, it was really hard to run even 5k.</p>

        <p style={prose}>
          because there comes a point where your mind genuinely wants to stop. it is so easy to stop a run. pause your watch, sit down, and take a break.</p>

        <p style={prose}>
          but having your mind tell you one more step, one more km, one more push is training that makes you able to put off your body&rsquo;s urge to stop.
        </p>

        <p style={prose}>
          especially in the marathon distance, they say that at 30km you hit the infamous wall, because your muscles can store approx 2000 calories of glycogen.</p>

        <p style={prose}>
          but then how are there so many finishers when your body genuinely cannot take it anymore? because in endurance running, you learn the power of surrender. in order to achieve a goal, you put aside the craving of your muscles.
        </p>

        <p style={prose}>and the last question is <strong>who and how can you surrender?</strong></p>

        <p style={prose}>
          the most important part is who/what, because there are many people that surrender for money, career goals, and materialistic things. is that wrong? in my opinion, no, unless that is the only thing being surrendered for, and then it is.
        </p>

        <p style={prose}>
          a very recent example that may be controversial, but jensen huang, ex-ceo of nvidia. he worked at denny&rsquo;s and cleaned a ton of toilets (source: jensen).</p>

        <p style={prose}>
          he absolutely surrendered so much to start his own company, nvidia, to a trillion dollar+ valuation. but clearly, as we have seen, his affairs &hellip;, and his lack of surrender towards his wife has led him to be kicked out of nvidia, and despite having so much success, his public image has been scrutinized.
        </p>

        <p style={prose}>
          but i would say people or things that you love, you trust, and have done a lot for you, are definitely worth surrendering for. this includes your parents, teachers, your close friends, and individuals that have supported you, motivated you, and are the reason why you are the person you are.
        </p>

        <p style={prose}>and the last question is <strong>how can you surrender?</strong></p>

        <ol style={orderedList}>
          <li style={li}>being grateful, recognizing these efforts, because this fuels the why you are surrendering.</li>
          <li style={li}>obedience, or taking actions that include what that thing or person would want you to do. for example, in terms of parents, what would they want you to do at a given time? if you know they like cleaning, then make your bed, and make their bed for them. wash dishes. even small things like such.
            <br /><br />
            in the case of a fitness goal, take actions that bring you closer to your ultimate goal. like, imagine what your trainer or a trainer (if you don&rsquo;t have one) would want you to do.</li>
          <li style={li}>surrender. i am unclear exactly what this looks like in general, but i think once you combine gratefulness, obedience, and prioritizing another&rsquo;s desires instead of your own, or that hypothetical thing&rsquo;s thoughts on what you do, it automatically brings this quality.</li>
        </ol>

        <p style={prose}>
          i know i have already spoken about the benefits, but besides the direct benefits, there are also other qualities that this quality helps bring out to improve one&rsquo;s character.
        </p>

        <ul style={list}>
          <li style={li}>putting yourself in another person&rsquo;s shoes. this skill is always good in that career lens, as we are taught, but it can also help one become more likeable.</li>
          <li style={li}>mental strength, aptitude, and belief in yourself.</li>
          <li style={li}>you feel good, emotional stability, confidence, and a lack of self.</li>
        </ul>

        <p style={prose}>
          thank you so much for reading, and if you liked this lmk so i can write and post more :)
        </p>
      </article>
    </main>
  )
}
