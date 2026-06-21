export default function Contact() {
  return (
    <section id="contact" style={{ 
      textAlign: 'center', 
      borderTop: '1px solid #334155',
      paddingBottom: '2rem'
    }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Let's Work Together</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', maxWidth: '500px', margin: '0 auto 1.5rem auto' }}>
        I'm actively looking for opportunities where I can apply my skills in frontend development, artificial intelligence, and competitive programming.
      </p>
      
      <p style={{ color: 'var(--text-main)', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
        <strong>Phone:</strong> +91-8756093105
      </p>

      <a href="mailto:ay3064709@gmail.com" className="btn btn-primary" style={{ fontSize: '1.2rem' }}>
        Email ay3064709@gmail.com
      </a>

      <footer style={{ marginTop: '5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
        <p>Built with React & Vite. © 2026 Ankit Yadav.</p>
      </footer>
    </section>
  );
}