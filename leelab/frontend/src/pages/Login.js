import { useState } from "react";
import API from "../services/api";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { loginUser } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await API.post("/auth/login", form);
    loginUser(res.data);
  };

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-5">
        <div className="card shadow p-4">
          <h2 className="fw-bold mb-4">Lab Login</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>Email</label>
              <input className="form-control" name="email" onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label>Password</label>
              <input type="password" className="form-control" name="password" onChange={handleChange} required />
            </div>

            <button className="btn btn-primary w-100">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
