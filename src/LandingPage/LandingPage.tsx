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
    </div>
  );
};

export default LandingPage;
