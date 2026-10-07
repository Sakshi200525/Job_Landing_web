import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-content">

        <div className="footer-section">
          <h2>
            <span>DG</span> Interns Hub
          </h2>

          <p>
            Connecting students and freshers with valuable
            internship and job opportunities.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/jobs">Jobs</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>

          <p>📧 dginternshub@gmail.com</p>
          <p>📍 India</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 DG Interns Hub. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;