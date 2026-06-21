export default function Navbar() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      padding: '1.5rem 10%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: '#0a0f1c', /* Darker background to match the screenshot */
      borderBottom: '1px solid #1e293b',
      zIndex: 1000
    }}>
      <h2 style={{ fontSize: '1.5rem', color: '#0ea5e9', fontWeight: 'bold', cursor: 'pointer' }}>
        Ankit.dev
      </h2>
      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', fontWeight: '600', fontSize: '0.95rem' }}>
        <li><a href="#about" style={{ color: '#f8fafc', textDecoration: 'none' }}>About</a></li>
        <li><a href="#skills" style={{ color: '#f8fafc', textDecoration: 'none' }}>Skills</a></li>
        <li><a href="#projects" style={{ color: '#f8fafc', textDecoration: 'none' }}>Projects</a></li>
        <li><a href="#education" style={{ color: '#f8fafc', textDecoration: 'none' }}>Education</a></li>
        <li><a href="#contact" style={{ color: '#f8fafc', textDecoration: 'none' }}>Contact</a></li>
      </ul>
    </nav>
  );
}