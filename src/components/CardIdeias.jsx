import React from "react";
import "../styles/CardIdeias.css";
import UserIcon from "../assets/User.svg";

function CardIdeia({ id, texto, nome, data, titulo, onEdit, onDelete }) { 
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

      <div className="ideias-actions">
          <button className="btn btn-edit" onClick={() => onEdit(id, titulo, texto)}>
          Editar
          </button>
          <button className="btn btn-delete" onClick={() => onDelete(id)} >
            Excluir
          </button>
      </div>

    </div>
  );
}

export default CardIdeia;