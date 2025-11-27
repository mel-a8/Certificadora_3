import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/banner.css";
import "../styles/toast.css";
import "../styles/popup.css";

export default function BannerPrincipal({ onSubmitIdeia, proximaIdeiaNum }) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  const [showToast, setShowToast] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  const isCreatePage = location.pathname === "/criar-ideias";

  const handleClick = () => {
    if (isCreatePage) {
      setShowPopup(true);
      return;
    }

    if (!user) {
      setShowToast(true);
      setTimeout(() => navigate("/login"), 2000);
    } else {
      navigate("/criar-ideias");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titulo.trim() || !descricao.trim()) return;

    if (onSubmitIdeia) {
      onSubmitIdeia({ titulo, descricao });
    }

    setTitulo("");
    setDescricao("");
    setShowPopup(false);
  };

  return (
    <>
      {showToast && (
        <div className="custom-toast">
          <p>Você precisa fazer login para enviar uma ideia</p>
          <div className="toast-loading">
            <div className="spinner"></div>
            <span>Redirecionando...</span>
          </div>
        </div>
      )}

      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            
            <div className="popup-header-close">
              <button className="close-icon-btn" onClick={() => setShowPopup(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="15" y1="9" x2="9" y2="15"></line>
                  <line x1="9" y1="9" x2="15" y2="15"></line>
                </svg>
              </button>
            </div>

            <h2 className="popup-title">Ideia {proximaIdeiaNum}</h2>

            <form className="popup-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="titulo">Título</label>
                <input
                  id="titulo"
                  type="text"
                  placeholder="Insira um título"
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="descricao">Descrição</label>
                <textarea
                  id="descricao"
                  placeholder="Insira sua ideia"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                  required
                  rows="4" 
                ></textarea>
              </div>

              <div className="popup-actions">
                <button type="submit" className="btn-primary">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <section className="banner">
        <div className="banner-content">
          <h1>Banco de Ideias</h1>
          <p>
            Ajude-nos a melhorar o movimento e <br />
            fazer com que mais mulheres revolucionem a tecnologia!
          </p>

          <button className="banner-button" onClick={handleClick}>
            {isCreatePage ? "ADICIONAR IDEIA" : "ENVIE SUA IDEIA"}
          </button>
        </div>
      </section>
    </>
  );
}
