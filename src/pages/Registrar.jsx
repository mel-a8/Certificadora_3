import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/login.css";
import imagemLogin from "../assets/logomd.png";

export default function Registrar() {
  return (
    <>
      <Header />
      <div className="login-container">
        {/* Lado esquerdo: formulário */}
        <div className="login-form">
          <h1>Crie sua conta, agora!</h1>
          
          <form>
            <label>
              Nome
              <input type="text" placeholder="Digite seu nome completo" />
            </label>

            <label>
              E-mail
              <input type="email" placeholder="Digite seu e-mail" />
            </label>

            <label>
              Senha
              <input type="password" placeholder="Crie uma senha" />
            </label>

            <button type="submit" className="btn-login">Registrar</button>
          </form>

          <p className="registrar-text">
            Já tem uma conta?{" "}
            <a href="/login" className="registrar-link">Faça login</a>
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
