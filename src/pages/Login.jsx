import "../styles/styles.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
      navigate("/");
    }, 2000);
  };

  return (
    <div className="login-page">

      <div className="login-hero">
        <h2>Welcome Back!</h2>
        <p>
          Login to continue your journey with us and explore the world.
        </p>
      </div>

      <div className="login-form-container">
        <div className="login-section">

          <h3>Login</h3>

          <p>
            Enter your credentials to access your account.
          </p>

          <form onSubmit={handleLogin}>

            <div className="login-form-group">
              <label htmlFor="email">Email Address</label>

              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="login-form-group">
              <label htmlFor="password">Password</label>

              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="forgot-password">
              <a href="#">Forgot Password?</a>
            </div>

            <div className="login-remember">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember Me</label>
            </div>
                        <button type="submit" className="login-submit-btn">
              Login
            </button>

            {showPopup && (
              <div id="successPopup" className="popup">
                <div className="popup-content">
                  <h2>✅ Login Successful!</h2>
                  <br />
                  <p>Welcome to Wanderly ✈️</p>
                  <br />
                </div>
              </div>
            )}
          </form>

          <div className="login-signup">
            <p>
              Don't have an account? <a href="#">Sign Up</a>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;