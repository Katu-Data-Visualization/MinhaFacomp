import { useState } from 'react';

import styles from './Home.module.css';

//import logoMinhaFacomp from '../../Assets/imgs/logo-minha-facomp.png';

import logoMinhaFACOMPsvg from '../../Assets/imgs/logo-minhafacomp-svg.svg';

import IconButtonLoading from '../../Assets/IconButtonLoading/IconButtonLoading';

interface HomeProps{
  setShowQuestionnaire?: any,
  sendMatricula: (inputValue: string) => void,
  showIconButtonLoading: boolean,
  changeBttnColor: boolean,
};

export default function Home({sendMatricula, showIconButtonLoading, changeBttnColor} : HomeProps){
  const [inputValue, setInputValue] = useState<string>('');

  return(
    <section className={styles.container}>
      <figure className={styles.logoMinhaFacomp}>
        <img src={logoMinhaFACOMPsvg} alt="Logo do questionário Minha FACOMP" />
      </figure>
      <div className={styles.messageBox}>
        <span>Seja bem-vind@,</span>
        <h1>
          Participe agora mesmo do questionário <span>Minha FACOMP</span> 
          e compartilhe suas percepções
        </h1>
        <p>
          Contribua com a melhora de nossa faculdade respondendo ao questionário!
        </p>
      </div>
      <div className={styles.formMatricula}>
        <div className={styles.inputMatricula}>
          <label htmlFor="NumeroDeMatricula">
            Digite o seu número de matrícula para iniciar
          </label>
          <input 
            type="number" 
            name="NumeroDeMatricula" 
            id="NumeroDeMatricula"
            placeholder='Ex.: 202404940001'
            onChange={(e: any) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && inputValue.length > 11 && (sendMatricula(inputValue))}
          />
        </div>
        <button
          className={`${inputValue.length > 11 ? styles.showSendButton : ''} ${changeBttnColor ? styles.success : ''}`}
          type="button"
          onClick={() => sendMatricula(inputValue)}
          disabled={inputValue.length > 11 && !showIconButtonLoading ? false : true}
        >
          {showIconButtonLoading && <IconButtonLoading/>}
          {!showIconButtonLoading && 'Enviar'} 
        </button>
      </div>
    </section>
  );
};