export default function Achievements() {
  return (
    <section id="achievements">
      <h2 className="section-title">
        Problem Solving & <span className="text-gradient">Certs</span>
      </h2>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
        
        <div className="card" style={{ flex: '1 1 200px', textAlign: 'center', background: 'linear-gradient(145deg, #1e293b, #0f172a)' }}>
          <h3 className="text-gradient" style={{ fontSize: '3.5rem', marginBottom: '0.5rem', fontWeight: '800' }}>450+</h3>
          <p style={{ color: 'var(--text-muted)', fontWeight: '500', fontSize: '1.1rem' }}>LeetCode Problems</p>
        </div>

        <div className="card" style={{ flex: '1 1 200px', textAlign: 'center', background: 'linear-gradient(145deg, #1e293b, #0f172a)' }}>
          <h3 className="text-gradient" style={{ fontSize: '3.5rem', marginBottom: '0.5rem', fontWeight: '800' }}>150+</h3>
          <p style={{ color: 'var(--text-muted)', fontWeight: '500', fontSize: '1.1rem' }}>GeeksforGeeks</p>
        </div>

        <div className="card" style={{ flex: '1 1 200px', textAlign: 'center', background: 'linear-gradient(145deg, #1e293b, #0f172a)' }}>
          <h3 className="text-gradient" style={{ fontSize: '3.5rem', marginBottom: '0.5rem', fontWeight: '800' }}>400+</h3>
          <p style={{ color: 'var(--text-muted)', fontWeight: '500', fontSize: '1.1rem' }}>Total Solved</p>
        </div>

        <div className="card" style={{ flex: '1 1 100%' }}>
          <h3 style={{ fontSize: '1.6rem', marginBottom: '1.5rem' }}>Licenses & Certifications</h3>
          <ul style={{ listStyleType: 'none', color: 'var(--text-main)', fontSize: '1.1rem' }}>
            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span className="text-gradient">✔</span> AWS Academy Graduate Cloud Foundations
            </li>
            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span className="text-gradient">✔</span> AWS Academy Graduate Generative AI Foundations
            </li>
            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span className="text-gradient">✔</span> Palo Alto Networks Cybersecurity Academy Certification
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)' }}>
              <span className="text-gradient">▹</span> Active Participant: LeetCode Weekly & CodeChef Contests
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}