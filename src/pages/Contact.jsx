import { useState } from "react";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    alert(
      `Thank you ${formData.name}! Your message has been submitted.`
    );

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });

  };

  return (
    <section className="contact-page">

      <div className="container">

        <div className="contact-header">

          <span className="section-label">
            GET IN TOUCH
          </span>

          <h1>Contact DG Interns Hub</h1>

          <p>
            Have a question or need help finding an opportunity?
            Send us a message.
          </p>

        </div>


        <div className="contact-container">

          {/* CONTACT INFORMATION */}

          <div className="contact-info">

            <h2>Let's Connect</h2>

            <p>
              We would love to hear from you. Reach out to us
              for internship-related queries and opportunities.
            </p>

            <div className="contact-item">

              <div className="contact-icon">
                📧
              </div>

              <div>
                <h4>Email</h4>
                <p>dginternshub@gmail.com</p>
              </div>

            </div>


            <div className="contact-item">

              <div className="contact-icon">
                📍
              </div>

              <div>
                <h4>Location</h4>
                <p>India</p>
              </div>

            </div>


            <div className="contact-item">

              <div className="contact-icon">
                🕒
              </div>

              <div>
                <h4>Working Hours</h4>
                <p>Monday - Friday, 9 AM - 6 PM</p>
              </div>

            </div>

          </div>


          {/* FORM */}

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="form-group">

              <label>Your Name</label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />

            </div>


            <div className="form-group">

              <label>Email Address</label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />

            </div>


            <div className="form-group">

              <label>Subject</label>

              <input
                type="text"
                name="subject"
                placeholder="Enter subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />

            </div>


            <div className="form-group">

              <label>Message</label>

              <textarea
                name="message"
                rows="5"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

            </div>


            <button
              type="submit"
              className="submit-button"
            >
              Send Message →
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;