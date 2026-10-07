import { Link } from "react-router-dom";
import JobCard from "../components/JobCard";

const featuredJobs = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    company: "TechNova Solutions",
    location: "Remote",
    type: "Internship",
    duration: "3 Months",
    skill: "React JS",
    stipend: "₹10,000/month",
    description:
      "Work on modern web applications using React, JavaScript and responsive design."
  },
  {
    id: 2,
    title: "Java Full Stack Intern",
    company: "CodeCraft Technologies",
    location: "Pune, India",
    type: "Internship",
    duration: "6 Months",
    skill: "Java + Spring Boot",
    stipend: "₹12,000/month",
    description:
      "Learn and develop backend and frontend applications using Java and Spring Boot."
  },
  {
    id: 3,
    title: "MERN Stack Developer",
    company: "WebSphere Pvt Ltd",
    location: "Remote",
    type: "Internship",
    duration: "4 Months",
    skill: "MERN Stack",
    stipend: "₹15,000/month",
    description:
      "Build scalable web applications using MongoDB, Express, React and Node.js."
  }
];

function Home() {
  return (
    <>
      {/* HERO SECTION */}

      <section className="hero">

        <div className="container hero-content">

          <div className="hero-text">

            <span className="hero-badge">
              🚀 Opportunities for Students & Freshers
            </span>

            <h1>
              Start Your
              <span> Career Journey</span>
              Today
            </h1>

            <p>
              Discover internships and job opportunities that
              help you build real-world skills and launch your
              professional career.
            </p>

            <div className="hero-buttons">

              <Link to="/jobs" className="primary-button">
                Explore Jobs →
              </Link>

              <Link to="/contact" className="secondary-button">
                Contact Us
              </Link>

            </div>

          </div>

          <div className="hero-card">

            <div className="floating-card card-one">
              💼
              <div>
                <strong>500+</strong>
                <small>Opportunities</small>
              </div>
            </div>

            <div className="main-hero-icon">
              🚀
            </div>

            <div className="floating-card card-two">
              🎓
              <div>
                <strong>1000+</strong>
                <small>Students</small>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* STATS */}

      <section className="stats">

        <div className="container stats-grid">

          <div className="stat">
            <h2>500+</h2>
            <p>Job Opportunities</p>
          </div>

          <div className="stat">
            <h2>1000+</h2>
            <p>Students Connected</p>
          </div>

          <div className="stat">
            <h2>100+</h2>
            <p>Hiring Companies</p>
          </div>

          <div className="stat">
            <h2>50+</h2>
            <p>Skills & Domains</p>
          </div>

        </div>

      </section>


      {/* FEATURED JOBS */}

      <section className="featured-section">

        <div className="container">

          <div className="section-heading">

            <div>
              <span className="section-label">
                FEATURED OPPORTUNITIES
              </span>

              <h2>Latest Internship Opportunities</h2>
            </div>

            <Link to="/jobs" className="view-all">
              View All Jobs →
            </Link>

          </div>

          <div className="jobs-grid">

            {featuredJobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
              />
            ))}

          </div>

        </div>

      </section>


      {/* WHY US */}

      <section className="why-section">

        <div className="container">

          <div className="center-heading">

            <span className="section-label">
              WHY DG INTERNS HUB?
            </span>

            <h2>Build Skills. Gain Experience. Get Hired.</h2>

            <p>
              We help students and freshers discover opportunities
              that match their career goals.
            </p>

          </div>

          <div className="features-grid">

            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Relevant Opportunities</h3>
              <p>
                Find internships and jobs based on your skills
                and career interests.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">💻</div>
              <h3>Real-World Experience</h3>
              <p>
                Gain practical experience by working on
                real projects and technologies.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Career Growth</h3>
              <p>
                Develop your skills and take the next step
                toward your dream career.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="cta-section">

        <div className="container cta-content">

          <h2>Ready to Start Your Career?</h2>

          <p>
            Explore opportunities and find the right internship
            for your career journey.
          </p>

          <Link to="/jobs" className="cta-button">
            Explore Opportunities →
          </Link>

        </div>

      </section>

    </>
  );
}

export default Home;