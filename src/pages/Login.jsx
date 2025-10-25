import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/login.css";
import imagemLogin from "../assets/logomd.png";

export default function Login() {
  return (
    <>
      <Header />
      <div className="login-container">
        <div className="login-form">
          <h1>Bem-vindo de volta!</h1>
          <p>Ponha suas credenciais para acessar sua conta</p>

          <form>
            <label>
              E-mail
              <input type="email" placeholder="Digite seu e-mail" />
            </label>

            <label>
              Senha
              <input type="password" placeholder="Digite sua senha" />
            </label>

            <button type="submit" className="btn-login">Login</button>
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
