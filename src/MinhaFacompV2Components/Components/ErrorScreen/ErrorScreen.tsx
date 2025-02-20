import styles from "./ErrorScreen.module.css";

import iconError from "../../Assets/imgs/icon-error.svg";
import React from "react";

interface ErrorScreenProps {
  showErrorScreen: boolean;
  setShowErrorScreen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ErrorScreen({
  showErrorScreen,
  setShowErrorScreen,
}: ErrorScreenProps) {
  return (
    <div
      className={`${styles.container} ${
        showErrorScreen ? styles.showErrorScreen : ""
      }`}
    >
      <div className={styles.errorMessage}>
        <figure>
          <img src={iconError} alt="Ícone da tela de erro" />
        </figure>
        <h1>Oops!</h1>
        <p>
          Ocorreu um erro ao tentar enviar suas respostas, por favor, tente
          novamente.
        </p>
        <button type="button" onClick={() => setShowErrorScreen(false)}>
          Tentar novamente
        </button>
      </div>
    </div>
  );
}
