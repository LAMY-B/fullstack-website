import axios from "axios";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://my-website-prdg.onrender.com/users/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data) // item name and item value
      setSuccessful("Login successful");
    } catch (err) {
      console.error(err.message);
      setError(err.message);
    }
  };


  // localstorage: System storage
  // sessionstorage: session of your tab
  // cookie: your web storage



  return (
    <div>
      <h1>{successful ? successful : error}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /> <br />
        <input
          type="password"
          placeholder="Enter Your Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /> <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;