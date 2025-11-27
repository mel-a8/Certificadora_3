import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/login.css";
import imagemLogin from "../assets/logomd.png";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Registrar() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          role: "user", // Default role
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Conta criada com sucesso!");
        navigate("/login");
      } else {
        alert(`Erro ao criar conta: ${data.message}`);
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      alert("Erro ao conectar com o servidor.");
    }
  };

  return (
    <>
      <Header />
      <div className="login-container">
        {/* Lado esquerdo: formulário */}
        <div className="login-form">
          <h1>Crie sua conta, agora!</h1>

          <form onSubmit={handleSignup}>
            <label>
              Nome
              <input
                type="text"
                placeholder="Digite seu nome completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>

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
                placeholder="Crie uma senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>

            <button type="submit" className="btn-login">
              Registrar
            </button>
          </form>

          <p className="registrar-text">
            Já tem uma conta?{" "}
            <a href="/login" className="registrar-link">
              Faça login
            </a>
          </p>
        </div>
        <div className="login-image">
          <img src={imagemLogin} alt="Imagem Registro" />
        </div>
      </div>

      <Footer />
    </>
  );
}
