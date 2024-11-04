import "./LandingPage.css";

import logoFACOMPsvg from "../MinhaFacompV2Components/Assets/imgs/logo-facomp-svg.svg";
import minhaFacompImage from "../MinhaFacompV2Components/Assets/imgs/minhaFacomp.png";
import minhaFacompLogo from "../MinhaFacompV2Components/Assets/imgs/logo-facomp-svg-simple.svg";
import computacaoUfpaLogo from "../MinhaFacompV2Components/Assets/imgs/logo-computacao-ufpa-removebg.png";
import ufpaLogo from "../MinhaFacompV2Components/Assets/imgs/logo-ufpa.png";

import { ArrowsClockwise, ChatsCircle, Moon, Sun } from "@phosphor-icons/react";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  KatudvLogoDark,
  KatudvLogoLight,
} from "../MinhaFacompV2Components/Assets/imgs/exportSVG";

import LoadingLandingPage from "./components/LoadingLandingPage";

const LandingPage = () => {
  const navigate = useNavigate();

  const [theme, setTheme] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showLandingPage, setShowLandingPage] = useState(false);

  // Animations
  const headerItemsElements = document.querySelectorAll(".hidden")!;

  const myHeaderElementsObserver = new IntersectionObserver((entries) => {
    entries.forEach((item) => {
      if (item.isIntersecting) {
        item.target.classList.add("show");
      } else {
        item.target.classList.remove("show");
      }
    });
  });

  headerItemsElements.forEach((elementHeader) => {
    myHeaderElementsObserver.observe(elementHeader);
  });

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  setTimeout(() => {
    setShowLandingPage(true);
  }, 2400);

  theme
    ? window.document.body.classList.add("dark-theme")
    : window.document.body.classList.remove("dark-theme");

  return (
    <>
      <LoadingLandingPage hideLoading={!loading} />
      {showLandingPage && (
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
                <a href="#header">Início</a>
                <a href="#about">Sobre</a>
                <a href="#feature">Funcionalidades</a>
                <a href="#support">Parceiros</a>
              </div>
              <div className="nav-buttons">
                <button
                  onClick={() => navigate("/home")}
                  className="button-access"
                >
                  Acessar Plataforma
                </button>
                <button
                  onClick={() => setTheme(!theme)}
                  className="button-toggle-theme"
                >
                  {!theme ? (
                    <Moon className="icon-toggle-theme" size={24} />
                  ) : (
                    <Sun className="icon-toggle-theme" size={24} />
                  )}
                </button>
              </div>
            </div>
          </nav>

          {/* MAIN CONTENT */}
          <main className="container-page" id="header">
            {/* HEADER */}
            <header className="header-page">
              <div className="header-items">
                <h1 className="title-page hidden">
                  Uma nova maneira de aprimorar a experiência acadêmica na{" "}
                  <span className="text-facomp">Faculdade de Computação</span>
                </h1>
                <p className="text-header-page hidden">
                  Transforme a maneira como alunos e professores se conectam e
                  compartilham feedback. Com o{" "}
                  <span className="text-facomp">MinhaFACOMP</span>, você pode
                  contribuir para um ambiente de aprendizado mais dinâmico e
                  colaborativo. Junte-se a nós na construção de um futuro
                  acadêmico mais rico e inclusivo, onde sua voz é ouvida e
                  valorizada.
                </p>
                <button
                  onClick={() => navigate("/home")}
                  className="button-participate hidden"
                >
                  Participe Agora!
                </button>
                <div className="image-minhaFacomp-header hidden">
                  <figure id="about">
                    <img src={minhaFacompImage} alt="Imagem do Minha Facomp" />
                  </figure>
                </div>
              </div>
            </header>

            {/* CONTENT */}
            <section className="about-page hidden">
              <h2>Sobre o MinhaFACOMP</h2>
              <div className="section-about">
                <div className="section-about-content">
                  <p>
                    O MinhaFACOMP é um projeto desenvolvido com o objetivo
                    central de coletar feedbacks dos alunos da Faculdade de
                    Computação sobre seus respectivos cursos. Entendemos que a
                    experiência acadêmica vai muito além das salas de aula e dos
                    materiais didáticos. Por isso, queremos ouvir diretamente
                    dos alunos suas opiniões, críticas e sugestões.
                  </p>
                  <p>
                    Acreditamos que, para alcançar um ensino de qualidade, é
                    fundamental incorporar as visões e experiências dos próprios
                    estudantes. Ao oferecer uma plataforma dedicada a esse
                    propósito, o MinhaFACOMP possibilita que cada aluno tenha um
                    papel ativo na construção de um ambiente acadêmico mais
                    dinâmico, participativo e eficiente.
                  </p>
                </div>
                <div className="section-logo-content">
                  <img src={minhaFacompLogo} alt="Logo MinhaFacomp" />
                </div>
              </div>
            </section>

            <section className="features-page hidden" id="feature">
              <h2>Principais Funcionalidades</h2>
              <div className="features-cards">
                <div className="features-cards-content">
                  <ChatsCircle size={100} className="features-icons" />

                  <h3>Coleta de Feedback</h3>
                  <p>
                    Uma maneira simples e eficaz para os alunos compartilharem
                    suas opiniões e sugestões.
                  </p>
                </div>
                <div className="features-cards-content">
                  <ArrowsClockwise size={100} className="features-icons" />
                  <h3>Perguntas Rápidas e Diretas</h3>
                  <p>
                    O MinhaFACOMP facilita o feedback com perguntas rápidas de
                    múltipla escolha, permitindo que alunos avaliem cursos e
                    professores de forma ágil, promovendo melhorias no ensino.
                  </p>
                </div>
              </div>
            </section>

            <section className="support-page hidden" id="support">
              <h2>Parceiros</h2>
              <div className="support-image-content">
                <div className="support-image-item hidden">
                  <a href="https://computacao.ufpa.br/" target="_blank">
                    <img
                      src={computacaoUfpaLogo}
                      alt="logo faculdade de computação UFPA"
                    />
                  </a>
                </div>
                <div className="support-image-item image-support-2 hidden ">
                  <a href="https://ufpa.br/" target="_blank">
                    <img
                      src={ufpaLogo}
                      alt="logo Universidade Federal do Pará"
                    />
                  </a>
                </div>
                <div className="support-image-item image-support-3 hidden ">
                  <a href="https://katudv.com/" target="_blank">
                    {!theme ? <KatudvLogoDark /> : <KatudvLogoLight />}
                  </a>
                </div>
              </div>
            </section>
          </main>

          {/* FOOTER */}
          <footer className="footer-container" id="footer">
            <img src={minhaFacompLogo} alt="logo minhaFacomp" />
            <p>&copy; 2024</p>
          </footer>
        </div>
      )}
    </>
  );
};

export default LandingPage;
