import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/banner.css";
import "../styles/toast.css";

export default function BannerPrincipal() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);

  const handleClick = () => {
    if (!user) {
      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
        navigate("/login");
      }, 2500);

    } else {
      navigate("/criar-ideias");
    }
  };

  return (
    <>
      {showToast && (
        <div className="custom-toast">
          <p>Você precisa fazer login antes de enviar uma ideia</p>

           <div className="toast-loading">
            <div className="spinner"></div>
            <span>Redirecionando...</span>
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
            ENVIE SUA IDEIA
          </button>
        </div>
      </section>
    </>
  );
}
