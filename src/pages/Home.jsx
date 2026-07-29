import "../styles/styles.css";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import bali from "../assets/images/bali.jpeg";
import tokyo from "../assets/images/tokyo.jpeg";
import Explore from "./Explore";

function Home() {
    const [location, setLocation] = useState("");
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [loading, setLoading] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
     const navigate = useNavigate();

useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 2000);

  return () => clearTimeout(timer);
}, []);

const searchHotels = () => {
  if (!location || !checkIn || !checkOut) {
    alert("Please fill all fields");
    return;
  }

  if (new Date(checkOut) <= new Date(checkIn)) {
    alert("Check-out must be after Check-in");
    return;
  }

  localStorage.setItem("location", location);
 navigate("/search");
 
};

if (loading) {
  return (
    <div id="loader">
      <h2><i className="fa fa-plane"></i> Wanderly</h2>
    </div>
  );
}

  return (
  <div className={darkMode ? "dark-mode" : ""}>
      <nav className="section1">
        <div className="logo">
          <h2><i className="fa fa-plane"></i> Wanderly</h2>
        </div>

        <div className="nav-links">
          <Link to="/" className="active">
            Home
     </Link>

       <Link to="/about">About</Link>
       <Link to="/explore">Explore</Link>

      
 
       <Link to="/contact">
  Contact
    </Link>
          <button
     id="themeBtn"
  onClick={() => setDarkMode(!darkMode)}
>
  {darkMode ? "☀️" : "🌙"}
  </button>
        </div>

        <Link to="/login">
  <button className="login-btn">Login</button>
</Link>
      </nav>


      <div id="content">
        {/* Hero Section */}
        <section className="homesection">
          <div id="home">
            <h1>
              Explore The
              <br />
              Beauty of The World
            </h1>

            <p>
              Discover amazing places at exclusive deals
              <br />
              and make your journey unforgettable.
            </p>

            <div className="hero-buttons">
              <Link to="/explore">
  <button id="btn1">Explore Now</button>
</Link>

<Link to="/about">
  <button>Learn More</button>
</Link>
            </div>
          </div>
        </section>
      </div>
  
  
{/* Search Box */}
<div id="box">
  <div className="search-field">
    <label>
      <i className="fa fa-location-arrow icon" aria-hidden="true"></i> Location
    </label>
    <input
  type="text"
  value={location}
  onChange={(e) => setLocation(e.target.value)}
  placeholder="Where are you going?"
/>

  </div>

  <div className="search-field">
    <label>
      <i className="fa fa-sign-in icon" aria-hidden="true"></i> Check In
    </label>
    <input
  type="date"
  value={checkIn}
  onChange={(e) => setCheckIn(e.target.value)}
/>

  </div>

  <div className="search-field">
    <label>
      <i className="fa fa-sign-out icon" aria-hidden="true"></i> Check Out
    </label>
    <input
  type="date"
  value={checkOut}
  onChange={(e) => setCheckOut(e.target.value)}
/>

  </div>

  <div className="search-field">
    <label>
      <i className="fa fa-users icon" aria-hidden="true"></i> Guests
    </label>
    <input type="number" placeholder="Add guests" min="1" />
  </div>

  <button id="btn" onClick={searchHotels}>Search</button>
</div>

{/* Popular Destinations */}
<div className="destinations-header">
  <h2>Popular Destinations</h2>
 <Link to="/explore">
    <p id="view">View All</p>
  </Link>
</div>

<div id="box1">
  <div className="card">
    <img src={bali} alt="Bali, Indonesia" />
    <h4>Bali, Indonesia</h4>
    <p>From $409</p>
  </div>

  <div className="card">
    <img
      src="https://wallpaperbat.com/img/601036-greece-travel-indie-travel-podcast.jpg"
      alt="Santorini, Greece"
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
    <img src={tokyo} alt="Tokyo, Japan" />
    <h4>Tokyo, Japan</h4>
    <p>From $789</p>
  </div>
</div>
  </div>
  );
}

export default Home;

