import Header from "./components/Header";
import BannerPrincipal from "./components/BannerPrincipal";
import SecaoComentarios from "./components/SecaoComentarios";
import Footer from "./components/Footer";

function App() {
  const comentariosExemplo = [
    {
      id: 1,
      texto: "Adorei a iniciativa! Quero contribuir com ideias e eventos locais.",
      nome: "Mariana Silva",
      papel: "Voluntária",
      avatarUrl: "/assets/avatars/mariana.jpg",
    },
    {
      id: 2,
      texto: "Poderiam ter mais workshops sobre hardware e eletrônica.",
      nome: "Ana Souza",
      papel: "Estudante",
      avatarUrl: "/assets/avatars/ana.jpg",
    },
    {
      id: 3,
      texto: "Seria ótimo ter uma seção de mentoria 1:1.",
      nome: "Lívia Costa",
      papel: "Desenvolvedora",
      avatarUrl: "/assets/avatars/livia.jpg",
    },
  ];

  return (
    <>
      <Header />
      <BannerPrincipal />
      <SecaoComentarios comentarios={comentariosExemplo} />
      <Footer />
    </>
  );
}

export default App;
