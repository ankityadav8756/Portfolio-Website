export default function Hero() {
  return (
    <section id="about" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      backgroundColor: '#0a0f1c', /* Matching the deep navy background */
      paddingTop: '6rem' 
    }}>
      
      {/* Top Badge */}
      <div style={{
        border: '1px solid #0ea5e9',
        color: '#0ea5e9',
        padding: '0.4rem 1.2rem',
        borderRadius: '20px',
        fontSize: '0.85rem',
        marginBottom: '2rem',
        backgroundColor: 'rgba(14, 165, 233, 0.05)'
      }}>
        Available for Opportunities
      </div>

      {/* Main Heading */}
      <h1 style={{ fontSize: '4.5rem', fontWeight: '800', color: '#ffffff', marginBottom: '0.5rem', letterSpacing: '-1px' }}>
        Hi, I'm <span style={{ color: '#0ea5e9' }}>Ankit Yadav</span>
      </h1>

      {/* Subheading */}
      <h2 style={{ fontSize: '1.4rem', fontWeight: '500', color: '#0ea5e9', marginBottom: '2rem' }}>
        B.Tech CSE (AI) Student
      </h2>

      {/* Bio Paragraph */}
      <p style={{ color: '#94a3b8', maxWidth: '750px', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2.5rem' }}>
        I am a passionate full-stack developer and problem solver. With a 7.1 CGPA from 
        KIET Group of Institutions, I love building scalable backend systems and exploring 
        artificial intelligence solutions.
      </p>

      {/* Social Links Row */}
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <SocialPill icon="🌐" text="GitHub" link="https://github.com/ankityadav8756" />
        <SocialPill icon="💼" text="LinkedIn" link="https://www.linkedin.com/in/ankit-yadav-5582392a8/" />
        <SocialPill icon="📧" text="Email" link="mailto:ay3064709@gmail.com" />
        <SocialPill icon="🎯" text="LeetCode (450+)" link="#leetcode" />
      </div>

    </section>
  );
}

/* Helper Component for the Dark Pill Buttons */
function SocialPill({ icon, text, link }) {
  return (
    <a href={link} style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.6rem',
      backgroundColor: '#111827',
      color: '#f8fafc',
      padding: '0.6rem 1.2rem',
      borderRadius: '8px',
      textDecoration: 'none',
      fontSize: '0.95rem',
      border: '1px solid #1f2937',
      transition: 'all 0.2s ease-in-out'
    }}
    onMouseOver={(e) => e.currentTarget.style.borderColor = '#0ea5e9'}
    onMouseOut={(e) => e.currentTarget.style.borderColor = '#1f2937'}
    >
      <span>{icon}</span>
      <span style={{ fontWeight: '600' }}>{text}</span>
    </a>
  );
}