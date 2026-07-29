import "../styles/styles.css";
import { Link } from "react-router-dom";

function Mountains() {
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

          <button className="square-btn">Mountains</button>

          <Link to="/city">
            <button className="square-btn">City</button>
          </Link>

          <Link to="/adventure">
            <button className="square-btn">Adventure</button>
          </Link>
        </div>
      </section>

      <section className="allsection">
        <div className="card">
          <img
            src="https://images.wallpaperscraft.com/image/single/mountain_peak_zermatt_126325_1280x720.jpg"
            alt="Swiss Alps"
          />
          <h4>Swiss Alps, Switzerland</h4>
          <p>From $699</p>
        </div>

        <div className="card">
          <img
            src="https://wallpaperaccess.com/full/9223313.jpg"
            alt="Mount Fuji"
          />
          <h4>Mount Fuji, Japan</h4>
          <p>From $499</p>
        </div>

        <div className="card">
          <img
            src="https://wallpaperaccess.com/full/6196494.jpg"
            alt="Machu Picchu"
          />
          <h4>Machu Picchu & Andes, Peru</h4>
          <p>From $889</p>
        </div>

        <div className="card">
          <img
            src="https://wallpapercave.com/wp/wp2521508.jpg"
            alt="Rocky Mountains"
          />
          <h4>Rocky Mountains, North America</h4>
          <p>From $999</p>
        </div>

        <div className="card">
          <img
            src="https://wallpapercat.com/w/middle-retina/e/8/5/778903-1920x1278-desktop-hd-mount-kilimanjaro-background-image.jpg"
            alt="Mount Kilimanjaro"
          />
          <h4>Mount Kilimanjaro</h4>
          <p>From $602</p>
        </div>

        <div className="card">
          <img
            src="https://wallpaperaccess.com/full/5923236.jpg"
            alt="Himalayas"
          />
          <h4>Himalayas (Everest Base Camp)</h4>
          <p>From $906</p>
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

      <footer>
        © 2026 Wanderly. All Rights Reserved.
      </footer>
    </>
  );
}

export default Mountains;