import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { loginAPI } from "../services/authService";

import { traduzirErroFirebase } from "../utils/firebaseErrors";

import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/login.css";
import imagemLogin from "../assets/logomd.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await loginAPI(email, password);
      
      // The backend returns: { idToken, refreshToken, expiresIn, localId, email }
      // We'll store the minimal user info we have. 
      // Ideally, we might want to fetch the full user profile here or later.
      // For now, let's store the email and localId (uid).
      const userData = {
        uid: data.localId,
        email: data.email
      };
      
      login(userData, data.idToken);
      navigate("/criar-ideias"); // Redirect to home/dashboard
    } catch (err) {

      const codigo =
        err.code ||
        err?.response?.data?.error?.message ||
        "auth/unknown";

      setError(traduzirErroFirebase(codigo));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="login-container">
        <div className="login-form">
          <h1>Bem-vindo de volta!</h1>
          <p>Ponha suas credenciais para acessar sua conta</p>

          {error && (
            <p className="error-message" style={{color: 'red'}}>
              {error}
            </p>
          )}

          <form onSubmit={handleSubmit}>
            <label>
              E-mail
              <input 
                type="email" 
                placeholder="Digite seu e-mail" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>

            <label>
              Senha
              <input 
                type="password" 
                placeholder="Digite sua senha" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>

            <button type="submit" className="btn-login" disabled={loading}>
              {loading ? "Carregando..." : "Login"}
            </button>
          </form>

          <p className="registrar-text">
            Ainda não tem sua conta?{" "}
            <a href="/registrar" className="registrar-link">Registre-se</a> 
          </p>
        </div>

        {/* Lado direito: imagem */}
        <div className="login-image">
          <img src={imagemLogin} alt="Imagem Login" />
        </div>
      </div>
      <Footer />
    </>
  );
}
