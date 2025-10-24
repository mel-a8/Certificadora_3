import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/header.css";
import logo from "../assets/logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="site-header" role="banner">
      <div className="header-inner container">
        <Link to="/" className="brand" aria-label="Meninas Digitais - Home">
          <img src={logo} alt="Meninas Digitais" />
        </Link>

        <button
          className="nav-toggle"
          aria-controls="primary-navigation"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          <span className="sr-only">Abrir menu</span>
          <div className={`hamburger ${open ? "is-active" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <nav
          id="primary-navigation"
          className={`primary-nav ${open ? "open" : ""}`}
          role="navigation"
          aria-label="Navegação principal"
        >
          <ul>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><a href="#contato">Contato</a></li>
            <li className="nav-actions">
              <button className="btn btn-outline" onClick={() => navigate("/login")}>
                Login
              </button>
              <button className="btn btn-primary" onClick={() => navigate("/registrar")}>
                Registre-se
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
