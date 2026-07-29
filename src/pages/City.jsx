import "../styles/styles.css";
import { Link } from "react-router-dom";

function City() {
  return (
    <>
      <nav className="section1">
        <h2>
          <i className="fa fa-plane" aria-hidden="true"></i> Wanderly
        </h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/explore">Explore</Link>
          <Link to="/contact">Contact</Link>

          <button id="themeBtn">🌙</button>
        </div>

        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>
      </nav>

      <section className="explore-section">
        <h2>Explore Destinations</h2>

        <div className="filter-buttons">
          <Link to="/explore">
            <button className="square-btn">All</button>
          </Link>

          <Link to="/beaches">
            <button className="square-btn">Beach</button>
          </Link>

          <Link to="/mountains">
            <button className="square-btn">Mountains</button>
          </Link>

          <button className="square-btn">City</button>

          <Link to="/adventure">
            <button className="square-btn">Adventure</button>
          </Link>
        </div>
      </section>

      <section className="allsection">
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
          <img
            src="https://wallpaperaccess.com/full/3937356.jpg"
            alt="Dubai"
          />
          <h4>Dubai, UAE</h4>
          <p>From $699</p>
        </div>

        <div className="card">
          <img
            src="https://wallpapercave.com/wp/wp2684726.jpg"
            alt="Sydney"
          />
          <h4>Sydney, Australia</h4>
          <p>From $889</p>
        </div>

        <div className="card">
          <img
            src="https://wallpaper.dog/large/5503669.jpg"
            alt="Rome"
          />
          <h4>Rome, Italy</h4>
          <p>From $899</p>
        </div>
      </section>
            <div id="box3">
        <h2>Wanderly</h2>
        <p>Let's make your next journey your best adventure yet.</p>

        <div className="footer-social">
          <i className="fa fa-facebook-official" aria-hidden="true"></i>
          <i className="fa fa-instagram" aria-hidden="true"></i>
          <i className="fa fa-twitter" aria-hidden="true"></i>
          <i className="fa fa-youtube-play" aria-hidden="true"></i>
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
              <i
                className="fa fa-paper-plane"
                aria-hidden="true"
              ></i>
            </button>
          </div>
        </div>
      </div>

      <footer>© 2026 Wanderly. All Rights Reserved.</footer>
    </>
  );
}

export default City;