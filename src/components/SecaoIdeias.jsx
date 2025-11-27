import React from "react";
import CardIdeia from "./CardIdeias";
import "../styles/SecaoIdeias.css";

const getIdeas = async () => {
    const response = await fetch("http://localhost:3001/ideias");
    const data = await response.json();
    return data;
};

function SecaoIdeias() {
const ideias = [
    {
        id: 1,
        texto: "Adorei a iniciativa! Quero contribuir com ideias e eventos locais.",
        nome: "Usuario",
        data: new Date().toLocaleDateString('pt-BR')
    },
    {
        id: 2,
        texto: "Poderiam ter mais workshops sobre hardware e eletrônica.",
        nome: "Usuario",
        data: new Date().toLocaleDateString('pt-BR')
    },
    {
        id: 3,
        texto: "Seria ótimo ter uma seção de mentoria 1:1.",
        nome: "Usuario",
        data: new Date().toLocaleDateString('pt-BR')
    },
    {
        id: 4,
        texto: "Adorei a iniciativa! Quero contribuir com ideias e eventos locais.",
        nome: "Usuario",
        data: new Date().toLocaleDateString('pt-BR')
    },
    {
        id: 5,
        texto: "Poderiam ter mais workshops sobre hardware e eletrônica.",
        nome: "Usuario",
        data: new Date().toLocaleDateString('pt-BR')
    },
    {
        id: 6,
        texto: "Seria ótimo ter uma seção de mentoria 1:1.",
        nome: "Usuario",
        data: new Date().toLocaleDateString('pt-BR')
    },
];

  return (
    <section className="secao-ideias">
      <div className="container">
        <h2 className="titulo">Suas Ideias</h2>

        <div className="ideias-grid">
          {ideias.map((item) => (
            <CardIdeia
              key={item.id}
              texto={item.texto}
              nome={item.nome}
              data={item.data}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SecaoIdeias;