import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");       // NEW
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/auth/signup`, {
        name,         // NEW
        email,
        password
      });
      alert("Account created. Please log in.");
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert("Signup failed");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Signup</h2>
      <form onSubmit={handleSignup} className="w-50 mx-auto">
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-success w-100">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
