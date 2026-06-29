export default function Navbar() {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: '#F7F3EE',
        borderBottom: '2px solid #1A1A1A',
        padding: '18px 32px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <a href="/" style={{ fontFamily: 'Unbounded, sans-serif', fontSize: 13, fontWeight: 700, color: '#1A1A1A', textDecoration: 'none' }}>
        Sparsh Shah
      </a>
      <a
        href="mailto:sparsh.shah@uwaterloo.ca"
        style={{
          fontFamily: 'Unbounded, sans-serif',
          fontSize: 9,
          fontWeight: 700,
          color: '#1A1A1A',
          background: '#FFD700',
          padding: '7px 16px',
          borderRadius: 3,
          textDecoration: 'none',
        }}
      >
        Get In Touch
      </a>
    </nav>
  )
}
