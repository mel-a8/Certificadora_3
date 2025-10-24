import "../styles/sobre.css";
import { FaBullseye, FaLightbulb, FaHeart } from "react-icons/fa";

export default function SobreNos() {
  return (
    <section id="sobre" className="sobre">
      <div className="container">
        <h2 className="titulo">Quem somos?</h2>
        <p className="texto">
          O grupo é composto por estudantes da UTFPR de Cornélio Procópio.
          Juntamente com a professora Rosangela Marquesone, e visamos fazer
          a diferença na sociedade por meio da educação.
        </p>

        <div className="bloco">
          <h3 className="subtitulo">
            <FaBullseye className="icone" /> Missão
          </h3>
          <p className="texto">
            Apoiar meninas de escolas públicas na escolha acadêmica e profissional
            para a área da tecnologia/computação através de ações educacionais
            que proporcionam interesse sobre o assunto.
          </p>
        </div>

        <div className="bloco">
          <h3 className="subtitulo">
            <FaLightbulb className="icone" /> Visão
          </h3>
          <p className="texto">
            Empoderar meninas através das tecnologias. Buscamos ser reconhecidas
            como um meio de difusão e apoio para meninas e jovens
            interessadas em tecnologia. Com um sólido elo de apoio cultural
            na UTFPR-CP, esperamos compreender este espaço e inspirar essas
            jovens a se tornarem líderes no campo da tecnologia.
          </p>
        </div>

        <div className="bloco">
          <h3 className="subtitulo">
            <FaHeart className="icone" /> Valores
          </h3>
          <ul className="lista">
            <li>Igualdade de gênero</li>
            <li>Respeito</li>
            <li>Empatia</li>
            <li>Diversidade</li>
            <li>Responsabilidade</li>
            <li>União</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
