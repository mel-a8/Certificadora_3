import React from "react";
import "../styles/SecaoComentarios.css";

function SecaoComentarios({ comentarios }) {
  return (
    <section className="secao-comentarios">
      <div className="container">
        <h2 className="titulo">O que estão dizendo</h2>
        <p className="subtitulo">Comentários e sugestões da comunidade</p>

        <div className="comentarios-grid">
          {comentarios.map((item) => (
            <div key={item.id} className="comentario-card">
              <p className="comentario-texto">“{item.texto}”</p>
              <div className="comentario-usuario">
                <img
                  src={item.avatarUrl}
                  alt={item.nome}
                  className="comentario-avatar"
                />
                <div>
                  <p className="comentario-nome">{item.nome}</p>
                  <p className="comentario-papel">{item.papel}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SecaoComentarios;
