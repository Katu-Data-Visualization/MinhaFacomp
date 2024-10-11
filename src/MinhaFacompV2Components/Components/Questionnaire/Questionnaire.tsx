import { useState, useEffect, CSSProperties } from 'react';

import styles from './Questionnaire.module.css';

import { CaretLeft, CaretRight, ThumbsUp,} from '@phosphor-icons/react';

import Loading from "../Loading/Loading";
import Question from '../Question/Question';

interface QuestionnaireProps{
  finishQuestionnaire: () => void,
};

export default function Questionnaire({ finishQuestionnaire }: QuestionnaireProps){
  const [hideLoading, setHideLoading] = useState<boolean>(false);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);

  const [totalQuestionChecked, setTotalQuestionChecked] = useState<[]>([]);
  const [checkedQuestionsNumber, setCheckedQuestionsNumber] = useState<number>(0);

  const [respostas, setRespostas] = useState<{}>({});

  function handlResposta(e:any){
    let respAux: any = respostas;
    
    if(e.target.localName === 'textarea'){
      respAux[`questao${currentQuestion+1}`] = e.target.value;
    } else {
      respAux[`questao${currentQuestion+1}`] = e.target.id;
    };

    setRespostas(respAux);

    let totalQuestionCheckedAux: any = totalQuestionChecked;

    let findName = totalQuestionCheckedAux.find((questionName:string) => e.target.name === questionName);
    if(e.target.name !== findName){
      totalQuestionCheckedAux.push(e.target.name);
      setTotalQuestionChecked(totalQuestionCheckedAux);
      setCheckedQuestionsNumber(checkedQuestionsNumber + 1);
    };
  };

  useEffect(() => {
    setTimeout(() => setHideLoading(true), 3000);
  }, []);

  const questionsList = [
    {
      categoria: 'Ensino',
      pergunta: 'Como você avalia a didática das disciplinas assistidas no período avaliado?',
      caixa_de_texto: false,
      tipo_pergunta: 1,
    },
    {
      categoria: 'Ensino',
      pergunta: 'Quais sugestões você teria para melhorar a qualidade do ensino na Faculdade de Computação?',
      caixa_de_texto: true,
      tipo_pergunta: 0,
    },
    {
      categoria: 'Pesquisa',
      pergunta: 'Você tem conhecimento das pesquisas que acontecem dentro da Faculdade de Computação?',
      caixa_de_texto: false,
      tipo_pergunta: 2,
    },
    {
      categoria: 'Pesquisa',
      pergunta: 'Alguma vez você sentiu-se motivado a procurar um professor ou laboratório para iniciar uma pesquisa?',
      caixa_de_texto: false,
      tipo_pergunta: 2,
    },
    {
      categoria: "Administração",
      pergunta: "Como você avalia a eficiência dos processos administrativos na Faculdade de Computação?",
      caixa_de_texto: false,
      tipo_pergunta: 1,
    },
    {
      categoria: 'Extra',
      pergunta: 'Você gostaria de fazer alguma sugestão adicional ou expressar alguma reclamação sobre a Faculdade de Computação?',
      caixa_de_texto: true,
      tipo_pergunta: 0,
    },
    {
      categoria: 'Extra',
      pergunta: 'Existe algum ponto que não foi abordado nas perguntas anteriores que você gostaria de comentar sobre a sua experiência na Faculdade de Computação?',
      caixa_de_texto: true,
      tipo_pergunta: 0,
    },
  ];

  return(
    <div className={styles.container}>
      <Loading hideLoading={hideLoading}/>
      <div className={styles.wrapperProgressBar}>
        <span>{currentQuestion+1} de {questionsList.length}</span>
        <div className={styles.progressBar}>
          <div 
            className={styles.bar} 
            style={{'--width-bar': `${((currentQuestion+1) * 100)/questionsList.length}%`} as CSSProperties}
          ></div>
        </div>
      </div>
      {questionsList.map((question, index) => {
        return(
          <Question
            showQuestion={index === currentQuestion ? true : false}
            category={question.categoria}
            question={question.pergunta}
            hasTextBox={question.caixa_de_texto}
            questionNumber={index+1}
            questionType={question.tipo_pergunta}
            handlResposta={handlResposta}
            key={index}
          />
        );
      })}
      <div className={styles.buttons}>
        <button
          type="button"
          className={`${currentQuestion > 0 && styles.showButton}`}
          disabled={currentQuestion === 0 ? true : false}
          onClick={() => currentQuestion > 0 && setCurrentQuestion(currentQuestion - 1)}
          //tabIndex={6}
        >
          <CaretLeft weight='bold'/>
          Voltar
        </button>
        <button
          type="button"
          className={`
            ${currentQuestion < checkedQuestionsNumber &&  styles.showButton}
            ${currentQuestion === questionsList.length-1 && styles.hideButton}
          `}
          disabled={currentQuestion >= checkedQuestionsNumber ? true : false}
          onClick={() => currentQuestion < questionsList.length-1 && setCurrentQuestion(currentQuestion + 1)}
          //tabIndex={7}
        >
          Próximo
          <CaretRight weight='bold'/>
        </button>
        {currentQuestion === questionsList.length-1 && currentQuestion < checkedQuestionsNumber && (
          <button
            className={styles.submitButton}
            type="button"
            onClick={() => {
              setHideLoading(false);

              // Aqui envia as respostas ao backend
              setTimeout(() => {
                finishQuestionnaire();
                console.log(respostas);
              }, 3000);
            }}
            //tabIndex={7}
          >
            Enviar respostas
            <ThumbsUp/>
          </button>
        )}
      </div>
    </div>
  );
};