import React from "react";
import "../styles/CardIdeias.css";
import UserIcon from "../assets/User.svg";

function CardIdeia({ texto, nome, data, titulo }) {
  return (
    <div className="ideias-card">
      <h3 className="ideias-titulo">{titulo}</h3>
      <p className="ideias-texto">“{texto}”</p>
      <div className="ideias-usuario">
        <img src={UserIcon} alt="Icone de Usuário" />
        <div>
          <p className="ideias-nome">{nome}</p>
          <p className="ideias-data">{data}</p>
        </div>
      </div>
    </div>
  );
}

export default CardIdeia;