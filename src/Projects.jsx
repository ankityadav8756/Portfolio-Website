export default function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">
        Featured <span className="text-gradient">Projects</span>
      </h2>
      
      <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
        
        <div className="card">
          <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Hospital Management System</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', minHeight: '80px' }}>
            A full-stack application featuring modules for patients, doctors, and pharmacy. 
            Implemented JWT-based authentication and Role-Based Access Control (Admin, Doctor, Patient).
          </p>
          <div>
            <span className="badge">Node.js</span>
            <span className="badge">Express.js</span>
            <span className="badge">MongoDB</span>
            <span className="badge">REST API</span>
          </div>
        </div>

        <div className="card">
          <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Book Inventory System</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', minHeight: '80px' }}>
            A robust backend system for inventory management. Designed RESTful APIs supporting full CRUD operations 
            and configured Spring Data JPA (Hibernate) for seamless entity mapping and data persistence.
          </p>
          <div>
            <span className="badge">Spring Boot</span>
            <span className="badge">Java</span>
            <span className="badge">Maven</span>
            <span className="badge">Postman</span>
          </div>
        </div>

      </div>
    </section>
  );
}