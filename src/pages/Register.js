// src/pages/Register.js
import { useState } from "react";
import { registerUser } from "../api/authApi";
import "./login.css"; // ✅ reuse the same styles as Login

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("📨 Submitting form:", form);

    if (!form.name || !form.email || !form.password) {
      alert("All fields are required");
      return;
    }

    try {
      const res = await registerUser(form);
      console.log("✅ Server response:", res);
      alert("User registered successfully");
    } catch (err) {
      console.error("❌ Register request failed:", err);

      const status = err.response?.status;
      const msg =
        err.response?.data?.message || err.message || "Register failed";

      alert(`Register failed (${status || "no status"}): ${msg}`);
    }
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Register</h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>

        <p className="register-text">
          Already have an account?{" "}
          <a href="/login" className="register-link">
            Login
          </a>
        </p>
      </form>
    </div>
  );
}
