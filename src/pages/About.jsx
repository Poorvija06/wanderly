import "../styles/styles.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import aboutImg from "../assets/images/about section.png";

function About() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);

    localStorage.setItem("theme", !darkMode ? "dark" : "light");
  };

  return (
    <div className={darkMode ? "dark-mode" : ""}>

      {/* Navbar */}
      <nav className="section1">
        <h2>
          <i className="fa fa-plane" aria-hidden="true"></i> Wanderly
        </h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about" className="active">
            About
          </Link>
          <Link to="/explore">Explore</Link>
          <Link to="/contact">Contact</Link>

          <button id="themeBtn" onClick={toggleTheme}>
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        <Link to="/login" className="login-btn">
          <button className="login-btn">Login</button>
        </Link>
      </nav>

      {/* About Section */}
      <section className="aboutsection">
        <div className="about-header">
          <h2>About Us</h2>
          <i className="fa fa-fighter-jet ic"></i>
        </div>

        <div className="aboutsection-content">
          <div className="aboutsection-text">
            <p>
              At Wanderly, we believe that travel is more than just visiting
              new places - it's about creating unforgettable memories.
            </p>

            <p>
              Our mission is to help travelers explore the world with ease,
              comfort and the best experiences possible.
            </p>

            <p>
              We are dedicated to providing exceptional travel services that
              combine luxury, affordability, and authentic local experiences.
            </p>
          </div>

          <img src={aboutImg} alt="About Wanderly" />
        </div>
      </section>

      {/* Why Travel */}
      <section id="box2">
        <h2>Why Travel With Us?</h2>

        <div className="why-travel-grid">

          <div className="why-travel-item">
            <h3>
              <i className="fa fa-dollar"></i> Best Prices
            </h3>
            <p>We offer the best prices and amazing deals for your journey.</p>
          </div>

          <div className="why-travel-item">
            <h3>
              <i className="fa fa-headphones"></i> Trusted Service
            </h3>
            <p>Our team is available 24/7 to assist you anytime.</p>
          </div>

          <div className="why-travel-item">
            <h3>
              <i className="fa fa-building"></i> Handpicked Hotels
            </h3>
            <p>We partner with top-rated hotels for your comfortable stay.</p>
          </div>

          <div className="why-travel-item">
            <h3>
              <i className="fa fa-heart"></i> Memorable Experiences
            </h3>
            <p>We help you create memories that last a lifetime.</p>
          </div>

        </div>
      </section>

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

            <button>
              <i className="fa fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>

      <footer>© 2026 Wanderly. All Rights Reserved.</footer>

    </div>
  );
}

export default About;