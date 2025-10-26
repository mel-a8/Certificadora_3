import React from "react";
import "../styles/Footer.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import siteIcon from "../assets/Site.svg";

function Footer() {
  return (
    <footer id="contato" className="footer">
      <div className="footer-container">
        <div className="footer-textos">
          <p>
            Construído por Amanda Moura Cavalcante, Davi Regonatti Rodrigues, Melina Alves Gonçalves e Victor Henrique Paulo Lopes Pereira | Mantido pelo Programa Meninas Digitais UTFPR - CP.
          </p>
          <p>
            Coordenação do Programa Meninas Digitais: Rosangela de Fatima Pereira Marquesone (UTFPR).
          </p>
        </div>

        <div className="footer-direita">
          <div className="footer-icones">
            <a
              href="https://www.instagram.com/meninasdigitaisutfprcp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://meninas.sbc.org.br/projetos-parceiros/meninas-digitais-utfpr-cp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={siteIcon} alt="Icone do Site" />
            </a>
            <a
              href="https://www.linkedin.com/company/meninas-digitais-utfpr-cp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
          <p className="footer-direitos">2025 © Meninas Digitais UTFPR - CP</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
