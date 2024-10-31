import "./LandingPage.css";

import logoFACOMPsvg from "../MinhaFacompV2Components/Assets/imgs/logo-facomp-svg.svg";
import { Moon } from "@phosphor-icons/react";

const LandingPage = () => {
  return (
    <div className="container-LandingPage">
      {/* NAVIGATION */}
      <nav className="nav-container">
        <div className="logo-container">
          <figure className="logo-FACOMP">
            <a href="https://computacao.ufpa.br/" target="_blank">
              <img src={logoFACOMPsvg} alt="Logo da FACOMP" />
            </a>
          </figure>
        </div>
        <div className="nav-items">
          <div className="nav-links">
            <a href="">Início</a>
            <a href="">Sobre</a>
            <a href="">Funcionalidades</a>
            <a href="">Parceiros</a>
          </div>
          <div className="nav-buttons">
            <button className="button-access">Acessar Plataforma</button>
            <button className="button-toggle-theme">
              <Moon className="icon-toggle-theme" size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="container-page">
        {/* HEADER */}
        <header className="header-page">
          <div className="header-items">
            <h1 className="title-page">
              Uma nova maneira de aprimorar a experiência acadêmica na{" "}
              <span className="text-facomp">Faculdade de Computação</span>
            </h1>
            <p className="text-header-page">
              Transforme a maneira como alunos e professores se conectam e
              compartilham feedback. Com o{" "}
              <span className="text-facomp">MinhaFACOMP</span>, você pode
              contribuir para um ambiente de aprendizado mais dinâmico e
              colaborativo. Junte-se a nós na construção de um futuro acadêmico
              mais rico e inclusivo, onde sua voz é ouvida e valorizada.
            </p>
            <button className="button-participate">Participe Agora!</button>
          </div>
        </header>

        {/* CONTENT */}
      </main>
    </div>
  );
};

export default LandingPage;
