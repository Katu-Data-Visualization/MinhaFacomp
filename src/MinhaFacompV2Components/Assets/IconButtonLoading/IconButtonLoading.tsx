import { CSSProperties } from 'react';
import styles from './IconButtonLoading.module.css';

import iconFace1 from '../imgs/icon-face1.svg';
import iconFace2 from '../imgs/icon-face2.svg';
import iconFace3 from '../imgs/icon-face3.svg';

export default function IconButtonLoading(){
  return(
    <>
      <img
        className={styles.icon}
        style={{'--delay': '.1s'} as CSSProperties}
        src={iconFace1} 
        alt="Ícone de loading do botão"
      />
      <img
        className={styles.icon} 
        style={{'--delay': '.2s'} as CSSProperties}
        src={iconFace2} 
        alt="Ícone de loading do botão"
      />
      <img
        className={styles.icon} 
        style={{'--delay': '.3s'} as CSSProperties}
        src={iconFace3} 
        alt="Ícone de loading do botão"
      />
    </>
  );
};