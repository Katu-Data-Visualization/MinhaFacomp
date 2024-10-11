import { CSSProperties } from 'react';
import styles from './Question.module.css';

interface QuestionProps{
  showQuestion?: boolean,
  category: string,
  question: string,
  questionNumber: number,
  hasTextBox: boolean,
  handlResposta: (e:any) => void,
  questionType: number,
};

export default function Question(
  {category, question, showQuestion, questionNumber, hasTextBox, handlResposta, questionType} : QuestionProps
  ){
  return(
    <div className={`${styles.question} ${showQuestion ? styles.showQuestion : styles.hideQuestion}`}>
      <h2>{category}</h2>
      <hr/>
      <p>{question}</p>
      {hasTextBox ? (
        <textarea 
          className={styles.textBox}
          onChange={(e) => handlResposta(e)}
          name={`q${questionNumber}`}
          id={`q${questionNumber}-textBox`}
          placeholder='Digite aqui'
        ></textarea>
      ) : (
        <ul className={styles.alternativas}>
          {questionType === 1 ? (
            <>
              <li 
                tabIndex={1}
                onKeyDown={(e) => e.key === 'Enter' && document.getElementById(`q${questionNumber}-1`)?.click()}
                style={{'--delay': '.6s'} as CSSProperties}
              >
                <input 
                  type="radio" 
                  name={`q${questionNumber}`} 
                  id={`q${questionNumber}-1`}
                  onChange={(e) => handlResposta(e)}
                />
                <span>Péssima</span>
              </li>
              <li 
                tabIndex={2}
                onKeyDown={(e) => e.key === 'Enter' && document.getElementById(`q${questionNumber}-2`)?.click()}
                style={{'--delay': '.7s'} as CSSProperties}
              >
                <input 
                  type="radio" 
                  name={`q${questionNumber}`} 
                  id={`q${questionNumber}-2`}
                  onChange={(e) => handlResposta(e)}
                />
                <span>Ruim</span>
              </li>
              <li 
                tabIndex={3}
                onKeyDown={(e) => e.key === 'Enter' && document.getElementById(`q${questionNumber}-3`)?.click()}
                style={{'--delay': '.8s'} as CSSProperties}
              >
                <input 
                  type="radio" 
                  name={`q${questionNumber}`} 
                  id={`q${questionNumber}-3`}
                  onChange={(e) => handlResposta(e)}
                />
                <span>Normal</span>
              </li>
              <li 
                tabIndex={4}
                onKeyDown={(e) => e.key === 'Enter' && document.getElementById(`q${questionNumber}-4`)?.click()}
                style={{'--delay': '.9s'} as CSSProperties}
              >
                <input 
                  type="radio" 
                  name={`q${questionNumber}`} 
                  id={`q${questionNumber}-4`}
                  onChange={(e) => handlResposta(e)}
                />
                <span>Bom</span>
              </li>
              <li 
                tabIndex={5}
                onKeyDown={(e) => e.key === 'Enter' && document.getElementById(`q${questionNumber}-5`)?.click()}
                style={{'--delay': '1s'} as CSSProperties}
              >
                <input 
                  type="radio" 
                  name={`q${questionNumber}`} 
                  id={`q${questionNumber}-5`}
                  onChange={(e) => handlResposta(e)}
                />
                <span>Ótima</span>
              </li>
            </>
          ) : (
            <>
              <li 
                tabIndex={1}
                onKeyDown={(e) => e.key === 'Enter' && document.getElementById(`q${questionNumber}-1`)?.click()}
                style={{'--delay': '.6s'} as CSSProperties}
              >
                <input 
                  type="radio" 
                  name={`q${questionNumber}`} 
                  id={`q${questionNumber}-1`}
                  onChange={(e) => handlResposta(e)}
                />
                <span>Sim</span>
              </li>
              <li 
                tabIndex={2}
                onKeyDown={(e) => e.key === 'Enter' && document.getElementById(`q${questionNumber}-2`)?.click()}
                style={{'--delay': '.7s'} as CSSProperties}
              >
                <input 
                  type="radio" 
                  name={`q${questionNumber}`} 
                  id={`q${questionNumber}-2`}
                  onChange={(e) => handlResposta(e)}
                />
                <span>Não</span>
              </li>
              <li 
                tabIndex={3}
                onKeyDown={(e) => e.key === 'Enter' && document.getElementById(`q${questionNumber}-3`)?.click()}
                style={{'--delay': '.8s'} as CSSProperties}
              >
                <input 
                  type="radio" 
                  name={`q${questionNumber}`} 
                  id={`q${questionNumber}-3`}
                  onChange={(e) => handlResposta(e)}
                />
                <span>Mais ou menos</span>
              </li>
            </>
          )}
        </ul>
      )}
    </div>
  );
};