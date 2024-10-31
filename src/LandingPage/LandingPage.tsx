import "./LandingPage.css";

import logoFACOMPsvg from "../MinhaFacompV2Components/Assets/imgs/logo-facomp-svg.svg";
import minhaFacompImage from "../MinhaFacompV2Components/Assets/imgs/minhaFacomp.png";
import minhaFacompLogo from "../MinhaFacompV2Components/Assets/imgs/logo-facomp-svg-simple.svg";

import { ArrowsClockwise, ChatsCircle, Moon } from "@phosphor-icons/react";
// import {
//   ArrowsClockwiseIcon,
//   FeedbackIcon,
// } from "../MinhaFacompV2Components/Assets/imgs/exportSVG";

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
            <a href="#">Início</a>
            <a href="#">Sobre</a>
            <a href="#">Funcionalidades</a>
            <a href="#">Parceiros</a>
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
            <div className="image-minhaFacomp-header">
              <figure>
                <img src={minhaFacompImage} alt="Imagem do Minha Facomp" />
              </figure>
            </div>
          </div>
        </header>

        {/* CONTENT */}
        <section className="about-page">
          <h2>Sobre o MinhaFACOMP</h2>
          <div className="section-about">
            <div className="section-about-content">
              <p>
                O MinhaFACOMP é um projeto desenvolvido com o objetivo central
                de coletar feedbacks dos alunos da Faculdade de Computação sobre
                seus respectivos cursos. Entendemos que a experiência acadêmica
                vai muito além das salas de aula e dos materiais didáticos. Por
                isso, queremos ouvir diretamente dos alunos suas opiniões,
                críticas e sugestões.
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

        <section className="features-page">
          <h2>Principais Funcionalidades</h2>
          <div className="features-cards">
            <div className="features-cards-content">
              <ChatsCircle size={100} className="features-icons" />

              <h3>Coleta de Feedback</h3>
              <p>
                Uma maneira simples e eficaz para os alunos compartilharem suas
                opiniões e sugestões.
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
      </main>
    </div>
  );
};

export default LandingPage;
