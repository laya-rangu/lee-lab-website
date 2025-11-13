import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/logo.png";

export default function Navbar() {
  const { user, logoutUser } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container-fluid">
        
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Lee Lab Logo" height="50" className="me-2"/>
          <span className="fw-bold">Lee Lab</span>
        </Link>

        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="nav" className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">

            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/people">People</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/research">Research</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/publications">Publications</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/teaching">Teaching</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/news">News</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>

            {user && user.role !== "admin" && (
              <li className="nav-item">
                <Link className="nav-link" to="/lab/request-material">
                  Request Materials
                </Link>
              </li>
            )}

            {user && user.role === "admin" && (
              <li className="nav-item">
                <Link className="nav-link fw-bold text-danger" to="/admin/dashboard">
                  Admin
                </Link>
              </li>
            )}
          </ul>

          <ul className="navbar-nav ms-auto">
            {!user ? (
              <li><Link className="btn btn-outline-primary" to="/login">Lab Login</Link></li>
            ) : (
              <>
                <li className="nav-item mt-2 me-3">Hi, {user.name}</li>
                <li>
                  <button className="btn btn-danger" onClick={logoutUser}>Logout</button>
                </li>
              </>
            )}
          </ul>

        </div>
      </div>
    </nav>
  );
}
