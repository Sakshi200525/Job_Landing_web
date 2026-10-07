function JobCard({ job }) {
  const handleApply = () => {
    alert(`Thank you for your interest in ${job.title}!`);
  };

  return (
    <div className="job-card">

      <div className="job-top">

        <div className="company-logo">
          {job.company.charAt(0)}
        </div>

        <div>
          <h3>{job.title}</h3>
          <p className="company-name">{job.company}</p>
        </div>

      </div>

      <div className="job-details">

        <span>📍 {job.location}</span>

        <span>💼 {job.type}</span>

        <span>⏱️ {job.duration}</span>

      </div>

      <p className="job-description">
        {job.description}
      </p>

      <div className="job-tags">

        <span>{job.skill}</span>

        <span>{job.stipend}</span>

      </div>

      <button
        className="apply-button"
        onClick={handleApply}
      >
        Apply Now →
      </button>

    </div>
  );
}

export default JobCard;