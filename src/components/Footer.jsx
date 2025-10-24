import React from "react";
import "../styles/Footer.css";
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-textos">
          <p>
            Construído por Ianka Talita, Thalita Santana e Maria F. Abalém |
            Mantido pelo Programa Meninas Digitais.
          </p>
          <p>
            Coordenação do Programa Meninas Digitais: Aletéia Araújo (UnB),
            Luciana Salgado (UFF) & Mirella Moro (UFMG).
          </p>
        </div>

        <div className="footer-direita">
          <div className="footer-icones">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
          <p className="footer-direitos">2025 © Meninas Digitais</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
