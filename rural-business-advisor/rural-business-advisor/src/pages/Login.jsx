// import { Link } from "react-router-dom";

// function Login() {
//   return (
//     <div className="login-page">

//       <div className="login-card">

//         <h1>BIZNEX</h1>

//         <p className="login-subtitle">
//           YOUR AI-POWERED BUSINESS PARTNER
//         </p>

//         <h2>Welcome Back!</h2>

//         <p>
//           Login to manage your rural business
//         </p>

//         <form>

//           <label>Email</label>

//           <input
//             type="email"
//             placeholder="Enter your email"
//           />

//           <label> Password</label>

//           <input
//             type="password"
//             placeholder="Enter your password"
//           />

//           <button type="submit">
//             Login
//           </button>

//         </form>

//         <p className="register-text">
//           Don't have an account?{" "}
//           <Link to="/register">
//             Register
//           </Link>
//         </p>

//       </div>

//     </div>
//   );
// }

// export default Login;



import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Perform validation or authentication logic here if needed
    console.log("Logged in with:", loginData);

    // Redirect to the Business Profile page
    navigate("/business-profile");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>BIZNEX</h1>

        <p className="login-subtitle">
          YOUR AI-POWERED BUSINESS PARTNER
        </p>

        <h2 className="welcome-title">Welcome Back!</h2>
        {/* <h2 style={{ color: "#2e7d32" }}>Welcome Back!</h2> */}
        <p>Login to manage your rural business</p>

        <form onSubmit={handleLogin}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={loginData.email}
            onChange={handleChange}
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={loginData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Login</button>
        </form>

        <p className="register-text">
          Don't have an account?{" "}
          <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;