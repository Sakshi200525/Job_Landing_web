import { useState } from "react";
import JobCard from "../components/JobCard";

const jobsData = [
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
      "Develop responsive websites and user interfaces using React JS, HTML, CSS and JavaScript."
  },
  {
    id: 2,
    title: "Java Full Stack Intern",
    company: "CodeCraft Technologies",
    location: "Pune, India",
    type: "Internship",
    duration: "6 Months",
    skill: "Java",
    stipend: "₹12,000/month",
    description:
      "Work with Java, Spring Boot, REST APIs, MySQL and frontend technologies."
  },
  {
    id: 3,
    title: "MERN Stack Developer",
    company: "WebSphere Pvt Ltd",
    location: "Remote",
    type: "Internship",
    duration: "4 Months",
    skill: "MERN",
    stipend: "₹15,000/month",
    description:
      "Build full-stack applications using MongoDB, Express.js, React.js and Node.js."
  },
  {
    id: 4,
    title: "Python Developer Intern",
    company: "InnovateTech",
    location: "Mumbai, India",
    type: "Internship",
    duration: "3 Months",
    skill: "Python",
    stipend: "₹8,000/month",
    description:
      "Develop backend applications and automation tools using Python."
  },
  {
    id: 5,
    title: "Data Analyst Intern",
    company: "DataVision Analytics",
    location: "Remote",
    type: "Internship",
    duration: "6 Months",
    skill: "Excel + SQL",
    stipend: "₹10,000/month",
    description:
      "Analyze business data and create meaningful reports using Excel, SQL and Power BI."
  },
  {
    id: 6,
    title: "UI/UX Design Intern",
    company: "Creative Labs",
    location: "Bangalore, India",
    type: "Internship",
    duration: "3 Months",
    skill: "Figma",
    stipend: "₹7,000/month",
    description:
      "Create user-friendly interfaces and prototypes for web and mobile applications."
  }
];

function Jobs() {

  const [search, setSearch] = useState("");

  const filteredJobs = jobsData.filter((job) => {

    const searchText = search.toLowerCase();

    return (
      job.title.toLowerCase().includes(searchText) ||
      job.company.toLowerCase().includes(searchText) ||
      job.skill.toLowerCase().includes(searchText)
    );

  });

  return (
    <section className="jobs-page">

      <div className="container">

        <div className="jobs-header">

          <span className="section-label">
            CAREER OPPORTUNITIES
          </span>

          <h1>Find Your Dream Internship</h1>

          <p>
            Explore internship opportunities and start
            building your professional career.
          </p>

        </div>


        {/* SEARCH */}

        <div className="search-box">

          <span>🔍</span>

          <input
            type="text"
            placeholder="Search by job title, company or skill..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>


        {/* JOBS */}

        <div className="jobs-grid">

          {filteredJobs.length > 0 ? (

            filteredJobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
              />
            ))

          ) : (

            <div className="no-results">
              <h2>No Jobs Found</h2>
              <p>
                Try searching with another keyword.
              </p>
            </div>

          )}

        </div>

      </div>

    </section>
  );
}

export default Jobs;