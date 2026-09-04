import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="login-page">

      <div className="login-card">

        <h1>BIZNEX</h1>

        <p className="login-subtitle">
          YOUR AI-POWERED BUSINESS PARTNER
        </p>

        <h2>Create Account</h2>

        <p>
          Create your account to get started
        </p>

        <form>

          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
          />

          <label>Phone Number</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Create a password"
          />

          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
          />

          {/* <label>Business Type</label>
          <input
            type="text"
            placeholder="Example: Farming, Retail, Food"
          /> */}

          <label>Location</label>
          <input
            type="text"
            placeholder="Enter your village / city"
          />

          <button type="submit">
            Create Account
          </button>

        </form>

        <p className="register-text">
          Already have an account?{" "}
          <Link to="/login">
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Register;