import styles from "./Home.module.css";

//import logoMinhaFacomp from '../../Assets/imgs/logo-minha-facomp.png';

import logoMinhaFACOMPsvg from "../../Assets/imgs/logo-facomp-svg-simple.svg";

import IconButtonLoading from "../../Assets/IconButtonLoading/IconButtonLoading";

interface HomeProps {
  setShowQuestionnaire?: any;
  showQuestionary: () => void;
  showIconButtonLoading: boolean;
  changeBttnColor: boolean;
}

export default function Home({
  showQuestionary,
  showIconButtonLoading,
  changeBttnColor,
}: HomeProps) {
  // const [inputValue, setInputValue] = useState<string>("");

  return (
    <section className={styles.container}>
      <figure className={styles.logoMinhaFacomp}>
        <img src={logoMinhaFACOMPsvg} alt="Logo do questionário Minha FACOMP" />
      </figure>
      <div className={styles.messageBox}>
        <span>Seja bem-vind@,</span>
        <h1>
          Participe agora mesmo do questionário <span>Minha FACOMP</span>e
          compartilhe suas percepções
        </h1>
        <p>
          Contribua com a melhora de nossa faculdade respondendo ao
          questionário!
        </p>
      </div>
      <div className={styles.formMatricula}>
        <button
          className={`${styles.showSendButton} ${
            changeBttnColor ? styles.success : ""
          }`}
          type="button"
          onClick={showQuestionary}
        >
          {showIconButtonLoading && <IconButtonLoading />}
          {!showIconButtonLoading && "Começar"}
        </button>
      </div>
    </section>
  );
}
