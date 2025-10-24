import React from "react";
import "../styles/SecaoProjetos.css";
import fundoProjetos from "../assets/Meninas-Digitais-UTFPR-CP-2.jpg"; 

export default function SecaoProjetos() {
  const projetos = [
    {
      titulo: "Meninas no Lab",
      descricao:
        "Oficinas e mentorias ministradas por estudantes e/ou professoras da UTFPR-CP sobre um tema de computação e/ou STEM para meninas estudantes do ensino fundamental e médio.",
    },
    {
      titulo: "Rodas de Conversa",
      descricao:
        "Rodas de conversa entre estudantes e/ou professoras da UTFPR-CP e estudantes do ensino fundamental e médio, possibilitando maior aproximação e entendimento de especificidades da universidade e resolução de dúvidas.",
    },
    {
      titulo: "Minicursos",
      descricao:
        "Minicursos sobre sustentabilidade e sua relação com computação e STEM, com foco em demonstrar exemplos de como as meninas e mulheres podem se capacitar em tais áreas para causar impactos positivos na sociedade.",
    },
  ];

  return (
    <section
      className="secao-projetos"
      style={{ backgroundImage: `url(${fundoProjetos})` }}
    >
      <div className="conteudo-projetos">
        <h2 className="titulo-projetos">Projetos</h2>
        <div className="cards-projetos">
          {projetos.map((p, index) => (
            <div key={index} className="card-projeto">
              <h3 className="titulo-card">{p.titulo}</h3>
              <p className="descricao-card">{p.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
