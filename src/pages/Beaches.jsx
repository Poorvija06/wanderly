import "../styles/styles.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import cancun from "../assets/images/cancunbeach.png";

function Beaches() {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);

    localStorage.setItem(
      "theme",
      !darkMode ? "dark" : "light"
    );
  };

  return (
    <div className={darkMode ? "dark-mode" : ""}>

      {/* Navbar */}

      <nav className="section1">

        <h2>
          <i className="fa fa-plane"></i> Wanderly
        </h2>

        <div className="nav-links">

          <Link to="/">Home</Link>

          <Link to="/about">
            About
          </Link>

          <Link to="/explore">
            Explore
          </Link>

          <Link to="/contact">
            Contact
          </Link>

          <button
            id="themeBtn"
            onClick={toggleTheme}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

        </div>

        <Link to="/login">
          <button className="login-btn">
            Login
          </button>
        </Link>

      </nav>

      {/* Explore */}

      <section className="explore-section">

        <h2>Explore Destinations</h2>

        <div className="filter-buttons">

          <Link to="/explore">
            <button className="square-btn">
              All
            </button>
          </Link>

          <button className="square-btn">
            Beach
          </button>

          <Link to="/mountains">
            <button className="square-btn">
              Mountains
            </button>
          </Link>

          <Link to="/city">
            <button className="square-btn">
              City
            </button>
          </Link>

          <Link to="/adventure">
            <button className="square-btn">
              Adventure
            </button>
          </Link>

        </div>

      </section>

      {/* Cards */}

      <section className="allsection">

        <div className="card">
          <img
            src="https://wallpapercave.com/wp/wp8742424.jpg"
            alt="Maldives"
          />
          <h4>Maldives Beach</h4>
          <p>From $789</p>
        </div>

        <div className="card">
          <img
            src="https://www.pixelstalk.net/wp-content/uploads/image11/A-Hawaii-beach-4K-Wallpaper-with-golden-sand-and-crystal-clear-turquoise-waters-lush-palm-trees-in-the-background.jpg"
            alt="Hawaii"
          />
          <h4>Hawaii Beach</h4>
          <p>From $889</p>
        </div>

        <div className="card">
          <img
            src="https://wallpaperaccess.com/full/296380.jpg"
            alt="Bora Bora"
          />
          <h4>Bora Bora Beach</h4>
          <p>From $889</p>
        </div>

        <div className="card">
          <img src={cancun} alt="Cancun" />
          <h4>Cancun Beach</h4>
          <p>From $999</p>
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

          <p>
            Subscribe to get the latest travel updates and offers.
          </p>

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

      <footer>
        © 2026 Wanderly. All Rights Reserved.
      </footer>

    </div>
  );
}

export default Beaches;