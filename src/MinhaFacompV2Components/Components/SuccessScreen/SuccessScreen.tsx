import styles from './SuccessScreen.module.css';

import iconSuccess from '../../Assets/imgs/icon-success.svg';

interface SuccessScreenProps{
  showSuccessScreen: boolean,
  closeSuccessScreen: () => void,
};

export default function SuccessScreen({ showSuccessScreen, closeSuccessScreen }: SuccessScreenProps){
  return(
    <div className={`${styles.container} ${showSuccessScreen ? styles.showSuccessScreen : ''}`}>
      <div className={styles.successMessage}>
        <figure>
          <img src={iconSuccess} alt="Ícone da tela de sucesso"/>
        </figure>
        <h1>Respostas enviadas com sucesso!</h1>
        <p>
          Obrigado por responder nosso questionário e contribuir 
          com suas percepções para melhora de nossa faculdade!
        </p>
        <button 
          type="button"
          onClick={() => closeSuccessScreen()}
        >
          Voltar ao início
        </button>
      </div>
    </div>
  );
};