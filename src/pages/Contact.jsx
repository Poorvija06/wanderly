import "../styles/styles.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Contact() {
  const [showPopup, setShowPopup] = useState(false);

const handleSubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  const phoneNumber = "919360827631";

  const text = `Hello Wanderly ✈️

Name: ${name}
Email: ${email}

Message:
${message}`;

  window.open(
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`,
    "_blank"
  );

  e.target.reset();
};

  return (
    <>
      {/* Navbar */}
      <nav className="section1">
        <h2>✈ Wanderly</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/explore">Explore</Link>
          <Link to="/contact" className="active">
            Contact
          </Link>
        </div>

        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>
      </nav>

      {/* Contact */}
      <div className="contact-section">
        <div className="contact-container">

          <div id="contact">
            <h2>✈ Get In Touch</h2>

            <p>Have questions or need assistance?</p>
            <p>We're here to help!</p>

            <div className="contact-info-item">
              <h4>📧 Email</h4>
              <p>info@wanderly.com</p>
            </div>

            <div className="contact-info-item">
              <h4>📞 Phone</h4>
              <p>+1 234 567 890</p>
            </div>

            <div className="contact-info-item">
              <h4>📍 Address</h4>
              <p>125 Travel Street, Adventure City, World 12545</p>
            </div>

            <h4 className="follow-title">Follow Us</h4>

            <div className="social-icons">
              <i className="fa fa-facebook-official"></i>
              <i className="fa fa-instagram"></i>
              <i className="fa fa-twitter"></i>
              <i className="fa fa-linkedin"></i>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrapper">
            <div className="contact-form">

              <h3>Send us a Message</h3>

             <form onSubmit={handleSubmit}>

                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    placeholder="Write your message..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Send Message
                </button>

              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.4)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "30px",
              borderRadius: "12px",
              textAlign: "center",
              minWidth: "320px",
              boxShadow: "0 0 20px rgba(0,0,0,.3)",
            }}
          >
            <h2 style={{ color: "green" }}>✅ Message Sent!</h2>
            <p>Thank you for contacting Wanderly.</p>
          </div>
        </div>
      )}

      {/* Footer */}
      <div id="box3">
        <h2>Wanderly</h2>

        <p>Let's make your next journey your best adventure yet.</p>

        <div className="footer-social">
          <i className="fa fa-facebook-official"></i>
          <i className="fa fa-instagram"></i>
          <i className="fa fa-twitter"></i>
          <i className="fa fa-youtube-play"></i>
        </div>

        <nav>
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/explore">Explore</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div>
          <h3>Top Destinations</h3>
          <ul>
            <li>Bali</li>
            <li>Greece</li>
            <li>Switzerland</li>
            <li>Japan</li>
          </ul>
        </div>

        <div>
          <h3>Support</h3>
          <ul>
            <li>FAQ</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div>
          <h3>Newsletter</h3>

          <p>Subscribe to get the latest travel updates and offers.</p>

          <div className="newsletter-input">
            <input
              type="email"
              placeholder="Enter your email"
            />

            <button>✈</button>
          </div>
        </div>
      </div>

      <footer>© 2026 Wanderly. All Rights Reserved.</footer>
    </>
  );
}

export default Contact;