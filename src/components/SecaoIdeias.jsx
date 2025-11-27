import React from "react";
import CardIdeia from "./CardIdeias";
import "../styles/SecaoIdeias.css";

function SecaoIdeias({ ideias, onEditIdea, onDeleteIdea }) { 
  return (
    <section className="secao-ideias">
      <div className="container">
        <h2 className="titulo">Suas Ideias</h2>

        <div className="ideias-grid">
          {ideias.map((item) => (
            <CardIdeia
              key={item.id}
              id={item.id}
              texto={item.texto}
              nome={item.nome}
              data={item.data}
              titulo={item.titulo}
              onEdit={onEditIdea}   
              onDelete={onDeleteIdea}  
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SecaoIdeias;