import "../styles/styles.css";
import { Link } from "react-router-dom";

function Adventure() {
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

          <Link to="/city">
            <button className="square-btn">City</button>
          </Link>

          <button className="square-btn">Adventure</button>
        </div>
      </section>

      <section className="allsection">
        <div className="card">
          <img
            src="https://wallpaperaccess.com/full/1667228.jpg"
            alt="Queenstown"
          />
          <h4>Queenstown, New Zealand</h4>
          <p>From $609</p>
        </div>

        <div className="card">
          <img
            src="https://wallpaperaccess.com/full/5860709.jpg"
            alt="Patagonia"
          />
          <h4>Patagonia (Chile & Argentina)</h4>
          <p>From $879</p>
        </div>

        <div className="card">
          <img
            src="https://images.trailfinders.com/asset/287029/TF2650152/iStock-1020049202_1500x1500.jpg"
            alt="Interlaken"
          />
          <h4>Interlaken, Switzerland</h4>
          <p>From $889</p>
        </div>

        <div className="card">
          <img
            src="https://wallpapercave.com/wp/wp12081643.jpg"
            alt="Costa Rica"
          />
          <h4>Costa Rica</h4>
          <p>From $599</p>
        </div>

        <div className="card">
          <img
            src="https://www.10wallpaper.com/wallpaper/1920x1080/2506/Delicate_Arch_Arches_National_Park_Utah_USA_Bing_4K_1920x1080.jpg"
            alt="Moab Utah"
          />
          <h4>Moab, Utah, USA</h4>
          <p>From $602</p>
        </div>

        <div className="card">
          <img
            src="https://pixelz.cc/wp-content/uploads/2018/11/godafoss-waterfall-winter-iceland-uhd-4k-wallpaper.jpg"
            alt="Iceland"
          />
          <h4>Iceland</h4>
          <p>From $999</p>
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
            <input type="email" placeholder="Enter your email" />
            <button>
              <i className="fa fa-paper-plane" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>

      <footer>© 2026 Wanderly. All Rights Reserved.</footer>
 </>
  );
}

export default Adventure;