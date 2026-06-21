export default function Education() {
  // We use an array here so it is easy to add or edit your education history
  const educationList = [
    {
      degree: "Bachelor of Technology in CSE (AI)",
      institution: "KIET Group of Institutions",
      location: "Ghaziabad, India",
      duration: "Sep. 2023 - May 2027",
      score: "CGPA: 7.1/10"
    },
    {
      degree: "Class 12th (Intermediate)",
      institution: "[Green View Public school]",
      location: "[Bhadohi, Uttar Pradesh]",
      duration: "[2020] - [2021]",
      score: "Percentage: [73]%"
    },
    {
      degree: "Class 10th (High School)",
      institution: "[ST. Mary's School]",
      location: "[Bhadohi]",
      duration: "[2018] - [2019]",
      score: "Percentage: [72]%"
    }
  ];

  return (
    <section id="education">
      <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem' }}>
        My <span style={{ color: '#0ea5e9' }}>Education</span>
      </h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
        
        {/* This will loop through the educationList above and create a card for each one */}
        {educationList.map((edu, index) => (
          <div key={index} style={{ 
            background: '#111827', 
            padding: '2rem 2.5rem', 
            borderRadius: '16px', 
            border: '1px solid #1f2937',
            borderLeft: '4px solid #0ea5e9',
            maxWidth: '800px', 
            width: '100%',
            transition: 'transform 0.3s ease',
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', alignItems: 'baseline', marginBottom: '0.5rem' }}>
              <h3 style={{ fontSize: '1.5rem', color: '#f8fafc', margin: 0 }}>{edu.institution}</h3>
              <span style={{ color: '#0ea5e9', fontWeight: '600', fontSize: '1rem' }}>{edu.duration}</span>
            </div>
            
            <h4 style={{ fontSize: '1.2rem', color: '#e2e8f0', marginBottom: '0.5rem', fontWeight: '500' }}>
              {edu.degree}
            </h4>
            
            <p style={{ color: '#94a3b8', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>📍</span> {edu.location}
            </p>
            
            <div style={{ 
              display: 'inline-block', 
              backgroundColor: 'rgba(14, 165, 233, 0.1)', 
              color: '#0ea5e9', 
              padding: '0.4rem 1rem', 
              borderRadius: '20px', 
              fontWeight: 'bold',
              fontSize: '1rem'
            }}>
              {edu.score}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}