import "../styles/styles.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import bali from "../assets/images/bali.jpeg";
import tokyo from "../assets/images/tokyo.jpeg";
import dubai from "../assets/images/Dubai.jpeg";

function Explore() {

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

          <Link to="/explore" className="active">
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

        <Link to="/login" className="login-btn">
          <button className="login-btn">
            Login
          </button>
        </Link>

      </nav>

      {/* Explore Section */}

      <section className="explore-section">

        <h2>Explore Destinations</h2>

        <div className="filter-buttons">
        <Link to="/beaches">
          <button className="square-btn">
            All
          </button>
          </Link>

          <Link to="/beaches">
  <button className="square-btn">Beach</button>
</Link>

<Link to="/mountains">
  <button className="square-btn">Mountains</button>
</Link>

<Link to="/city">
  <button className="square-btn">City</button>
</Link>

<Link to="/adventure">
  <button className="square-btn">Adventure</button>
</Link>
        </div>

      </section>

      {/* Cards */}

      <section className="allsection">

        <div className="card">
          <img src={bali} alt="Bali" />
          <h4>Bali, Indonesia</h4>
          <p>From $409</p>
        </div>

        <div className="card">
          <img
            src="https://wallpaperbat.com/img/601036-greece-travel-indie-travel-podcast.jpg"
            alt="Greece"
          />
          <h4>Santorini, Greece</h4>
          <p>From $689</p>
        </div>

        <div className="card">
          <img
            src="https://wallpaperaccess.com/full/1094090.jpg"
            alt="Switzerland"
          />
          <h4>Switzerland</h4>
          <p>From $699</p>
        </div>

        <div className="card">
          <img src={tokyo} alt="Tokyo" />
          <h4>Tokyo, Japan</h4>
          <p>From $789</p>
        </div>

        <div className="card">
          <img
            src="https://t4.ftcdn.net/jpg/00/58/24/73/360_F_58247333_Rd57ZE0LkZq9MSu0Yq9yD94refPDsHJA.jpg"
            alt="Paris"
          />
          <h4>Paris, France</h4>
          <p>From $689</p>
        </div>

        <div className="card">
          <img
            src="https://img.freepik.com/premium-photo/statue-liberty-new-york-city_948381-1806.jpg"
            alt="New York"
          />
          <h4>New York, USA</h4>
          <p>From $999</p>
        </div>

        <div className="card">
          <img src={dubai} alt="Dubai" />
          <h4>Dubai, UAE</h4>
          <p>From $699</p>
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

export default Explore;