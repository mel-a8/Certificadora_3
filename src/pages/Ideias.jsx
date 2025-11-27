import { useState } from "react";
import Header from "../components/Header";
import BannerPrincipal from "../components/BannerPrincipal";
import SecaoIdeias from "../components/SecaoIdeias";
import Footer from "../components/Footer";

import "../styles/Ideias.css";

function Ideias() {
  const [ideias, setIdeias] = useState([
    {  
      id: 1,
      titulo: "Ideia inicial",
      texto: "Adorei a iniciativa! Quero contribuir com ideias e eventos locais.",
      nome: "Usuário",
      data: new Date().toLocaleDateString("pt-BR"),
    },
  ]);

  const proximaIdeiaNum = ideias.length + 1;

  const handleNovaIdeia = ({ titulo, descricao }) => {
    const novaIdeia = {
      id: Date.now(),
      titulo,
      texto: descricao,
      nome: "Usuário",
      data: new Date().toLocaleDateString("pt-BR"),
    };
     setIdeias([novaIdeia, ...ideias]);
  };

  return (
      <>
      <Header />
      <BannerPrincipal onSubmitIdeia={handleNovaIdeia} proximaIdeiaNum={proximaIdeiaNum} />
      <SecaoIdeias ideias={ideias} />
      <Footer />
      </>
  );
}

export default Ideias;