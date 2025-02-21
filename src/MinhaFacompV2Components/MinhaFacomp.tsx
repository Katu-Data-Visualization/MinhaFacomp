import { useState } from "react";

import "./MinhaFacomp.css";
import "../GlobalStyles.css";

import { Info } from "@phosphor-icons/react";

import logoUFPA from "./Assets/imgs/logo-ufpa.png";
//import logoFACOMP from './Assets/imgs/logo-computacao-ufpa.jpg';
import logoMinhaFacomp from "./Assets/imgs/logo-minha-facomp.png";

//import logoMinhaFACOMP from './Assets/imgs/logo-minhafacomp-svg.svg';
import logoFACOMPsvg from "./Assets/imgs/logo-facomp-svg.svg";

import Home from "./Components/Home/Home";
import Questionnaire from "./Components/Questionnaire/Questionnaire";
import ErrorScreen from "./Components/ErrorScreen/ErrorScreen";
import SuccessScreen from "./Components/SuccessScreen/SuccessScreen";
import Loading from "./Components/Loading/Loading";

export default function MinhaFacomp() {
  const [showQuestionnaire, setShowQuestionnaire] = useState<boolean>(false);
  const [showErrorScreen, setShowErrorScreen] = useState<boolean>(false);
  const [showIconButtonLoading, setShowIconButtonLoading] =
    useState<boolean>(false);
  const [changeBttnColor, setChangeBttnColor] = useState<boolean>(false);
  const [showSuccessScreen, setShowSuccessScreen] = useState<boolean>(false);
  const [hideLoading, setHideLoading] = useState<boolean>(true);

  function showQuestionary() {
    // setShowIconButtonLoading(true);

    setHideLoading(false);
    setTimeout(() => {
      setHideLoading(true);
      setShowQuestionnaire(true);
    }, 2000);

    setTimeout(() => {
      setShowIconButtonLoading(false);
      setChangeBttnColor(false);
    }, 1000);
  }

  const finishQuestionnaire = async (
    respostas: {
      category: string;
      pergunta: string;
      resposta: any;
    }[]
  ) => {
    try {
      setHideLoading(true);

      const API_URL = "https://katudv.com/api/minhafacomp/submit";

      const data = await fetch(`${API_URL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(respostas),
      });

      if (!data.ok) {
        setShowQuestionnaire(false);
        setShowSuccessScreen(false);
        setShowErrorScreen(true);
        return;
      }

      setShowQuestionnaire(false);
      setShowSuccessScreen(true);
    } catch (error) {
      setHideLoading(true);
      setShowQuestionnaire(false);
      setShowErrorScreen(true);
      console.log("caiu no catch");
    } finally {
      setHideLoading(true);
    }
  };

  function closeSuccessScreen() {
    setShowSuccessScreen(false);
  }

  return (
    <main className="container">
      <Loading hideLoading={hideLoading} />
      <div className="imageCredit">
        <Info />
        <a
          target="_blank"
          href="https://www.udacity.com/course/java-fundamentals--cd0282"
        >
          Crédito da imagem
        </a>
      </div>
      <div className="backgroundMinhaFacomp">
        <figure>
          <img src={logoMinhaFacomp} alt="logo da MinhaFACOMP" />
        </figure>
      </div>
      <Home
        setShowQuestionnaire={setShowQuestionnaire}
        showQuestionary={showQuestionary}
        showIconButtonLoading={showIconButtonLoading}
        changeBttnColor={changeBttnColor}
      />
      {showQuestionnaire && (
        <Questionnaire finishQuestionnaire={finishQuestionnaire} />
      )}
      <SuccessScreen
        showSuccessScreen={showSuccessScreen}
        closeSuccessScreen={closeSuccessScreen}
      />
      <ErrorScreen
        showErrorScreen={showErrorScreen}
        setShowErrorScreen={setShowErrorScreen}
      />
      <div className="logos">
        <figure className="logoUFPA">
          <a href="https://ufpa.br/" target="_blank">
            <img src={logoUFPA} alt="Logo da UFPA" />
          </a>
        </figure>
        <figure className="logoFACOMP">
          <a href="https://computacao.ufpa.br/" target="_blank">
            <img src={logoFACOMPsvg} alt="Logo da FACOMP" />
          </a>
        </figure>
      </div>
    </main>
  );
}
