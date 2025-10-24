import "../styles/banner.css";
import fundoProjetos from "../assets/Meninas-Digitais-UTFPR-CP-1.jpg"; 

export default function BannerPrincipal() {
  return (
    <section className="banner">
      <div className="banner-content">
        <h1>Banco de Ideias</h1>
        <p>
          Ajude-nos a melhorar o movimento e <br />
          fazer com que mais mulheres revolucionem a tecnologia!
        </p>
        <button className="banner-button">ENVIE SUA IDEIA</button>
      </div>
    </section>
  );
}
