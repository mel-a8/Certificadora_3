import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/sobre.css";

export default function Sobre() {
  return (
    <>
      <Header />
      <div className="sobre-page">
        <div className="sobre-container">
          <h1>Meninas Digitais – UTFPR-CP</h1>

          <p><strong>Instituição:</strong> Universidade Tecnológica Federal do Paraná (UTFPR)</p>
          <p><strong>E-mail:</strong> meninasdigitaisutfprcp@gmail.com</p>
          <p><strong>Status:</strong> Ativo</p>
          <p><strong>Início:</strong> 2023</p>

          <h2>Descrição</h2>
          <p>
            O projeto Meninas Digitais – UTFPR-CP visa contribuir para o aumento da participação de meninas e mulheres em computação e STEM (sigla em inglês para ciência, tecnologia, engenharia e matemática), incentivando e auxiliando meninas estudantes de ensino fundamental e médio de Cornélio Procópio a seguirem carreira nessas áreas. 
          </p>
          <p>
            Para isso, o projeto tem como estratégia o ensino de temas em computação e STEM voltados à resolução de desafios de sustentabilidade alinhados com os Objetivos de Desenvolvimento Sustentável (ODS), a partir de mentorias, oficinas, palestras, minicursos e mesas redondas, com foco em capacitar e estimular o aprendizado de meninas e mulheres nessas áreas, demonstrando como essas podem causar impacto positivo na sociedade.
          </p>
          <p>
            Busca-se, dessa forma, contribuir para a redução da desigualdade de gênero no Campus da universidade, tornando o ambiente mais igualitário, diverso e inclusivo, bem como ampliar as perspectivas de trabalho de meninas e mulheres, auxiliando-as em sua independência a partir da educação de qualidade.
          </p>

          <p className="source">
            Fonte: <a href="https://meninas.sbc.org.br/projetos-parceiros/meninas-digitais-utfpr-cp" target="_blank" rel="noopener noreferrer">
              https://meninas.sbc.org.br/projetos-parceiros/meninas-digitais-utfpr-cp
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
