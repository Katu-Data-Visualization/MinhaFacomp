import { useState, CSSProperties } from "react";

import styles from "./Questionnaire.module.css";

import { CaretLeft, CaretRight, ThumbsUp } from "@phosphor-icons/react";

import Question from "../Question/Question";

interface QuestionnaireProps {
  finishQuestionnaire: (
    respostas: {
      category: string;
      pergunta: string;
      resposta: any;
    }[]
  ) => void;
}

export default function Questionnaire({
  finishQuestionnaire,
}: QuestionnaireProps) {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);

  const [totalQuestionChecked, setTotalQuestionChecked] = useState<[]>([]);
  const [checkedQuestionsNumber, setCheckedQuestionsNumber] =
    useState<number>(0);

  const [respostas, setRespostas] = useState<
    { category: string; pergunta: string; resposta: any }[]
  >([]);

  function handlResposta(e: any, category: string, question: string) {
    const newRespostas = [...respostas];

    newRespostas[currentQuestion] = {
      category,
      pergunta: question,
      resposta: e.target.value,
    };

    setRespostas(newRespostas);

    let totalQuestionCheckedAux: any = totalQuestionChecked;

    let findName = totalQuestionCheckedAux.find(
      (questionName: string) => e.target.name === questionName
    );
    if (e.target.name !== findName) {
      totalQuestionCheckedAux.push(e.target.name);
      setTotalQuestionChecked(totalQuestionCheckedAux);
      setCheckedQuestionsNumber(checkedQuestionsNumber + 1);
    }
  }

  const questionsList = [
    {
      categoria: "Comunicação",
      pergunta:
        "Você conhece todos os canais de contato da Computação UFPA (FACOMP)?",
      caixa_de_texto: false,
      tipo_pergunta: 1,
    },
    // {
    //   categoria: "Comunicação",
    //   pergunta: "As comunicações da FACOMP são claras e de leitura acessível?",
    //   caixa_de_texto: false,
    //   tipo_pergunta: 3,
    // },
    // {
    //   categoria: "Comunicação",
    //   pergunta:
    //     "Em relação à frequência, as comunicações da FACOMP são adequadas?",
    //   caixa_de_texto: false,
    //   tipo_pergunta: 3,
    // },
    // {
    //   categoria: "Comunicação",
    //   pergunta:
    //     "Você já utilizou o site da Faculdade para obter informações sobre procedimentos, como TCC, Estágio ou Segunda Chamada?",
    //   caixa_de_texto: false,
    //   tipo_pergunta: 2,
    // },
    // {
    //   categoria: "Comunicação",
    //   pergunta:
    //     "Se a resposta anterior foi 'sim', você se sentiu satisfeito com as explicações do site ou encontrou divergências nas comunicações?",
    //   caixa_de_texto: false,
    //   tipo_pergunta: 5,
    // },
    // {
    //   categoria: "Comunicação",
    //   pergunta:
    //     "Sobre as oportunidades de estágio, você acredita que a comunicação da FACOMP é eficiente para vagas internas?",
    //   caixa_de_texto: false,
    //   tipo_pergunta: 3,
    // },
    // {
    //   categoria: "Atendimento - Secretaria FACOMP",
    //   pergunta:
    //     "Você considera que os servidores da secretaria são corteses e educados durante o atendimento?",
    //   caixa_de_texto: false,
    //   tipo_pergunta: 3,
    // },
    // {
    //   categoria: "Atendimento - Secretaria FACOMP",
    //   pergunta:
    //     "A secretaria da Faculdade de Computação atende suas solicitações de forma rápida e eficiente?",
    //   caixa_de_texto: false,
    //   tipo_pergunta: 3,
    // },
    // {
    //   categoria: "Atendimento - Secretaria FACOMP",
    //   pergunta:
    //     "As informações fornecidas pela secretaria são claras e compreensíveis?",
    //   caixa_de_texto: false,
    //   tipo_pergunta: 3,
    // },
    // {
    //   categoria: "Atendimento - Secretaria FACOMP",
    //   pergunta:
    //     "Você acredita que a secretaria está bem organizada tanto no ambiente quanto no horário de atendimento para as demandas dos alunos?",
    //   caixa_de_texto: false,
    //   tipo_pergunta: 3,
    // },
    // {
    //   categoria: "Atendimento - Secretaria FACOMP",
    //   pergunta:
    //     "As respostas da secretaria por e-mail ou outros meios de comunicação são rápidas e satisfatórias?",
    //   caixa_de_texto: false,
    //   tipo_pergunta: 3,
    // },
    // {
    //   categoria: "Atendimento - Secretaria FACOMP",
    //   pergunta:
    //     "Quando você não foi atendido prontamente, a secretaria forneceu orientações suficientes para responder às suas dúvidas ou direcioná-lo para a pessoa correta?",
    //   caixa_de_texto: false,
    //   tipo_pergunta: 3,
    // },
    // {
    //   categoria: "Atendimento - Secretaria FACOMP",
    //   pergunta:
    //     "Em caso de atraso no atendimento, a secretaria forneceu justificativas e prazos realistas para a resolução do seu problema?",
    //   caixa_de_texto: false,
    //   tipo_pergunta: 3,
    // },
    // {
    //   categoria: "Atendimento - Secretaria FACOMP",
    //   pergunta:
    //     "No geral, você está satisfeito com a qualidade do atendimento prestado pela secretaria da Faculdade de Computação?",
    //   caixa_de_texto: false,
    //   tipo_pergunta: 3,
    // },
    // {
    //   categoria: "Atendimento - Direção FACOMP",
    //   pergunta:
    //     "A Direção da Faculdade de Computação atendeu suas solicitações de forma eficiente e rápida?",
    //   caixa_de_texto: false,
    //   tipo_pergunta: 3,
    // },
    // {
    //   categoria: "Atendimento - Direção FACOMP",
    //   pergunta:
    //     "Você considera que os membros da Direção são acessíveis e abertos para atender as demandas dos alunos?",
    //   caixa_de_texto: false,
    //   tipo_pergunta: 3,
    // },
    // {
    //   categoria: "Atendimento - Direção FACOMP",
    //   pergunta:
    //     "As informações fornecidas pela Direção são claras e adequadas para resolver suas questões acadêmicas?",
    //   caixa_de_texto: false,
    //   tipo_pergunta: 3,
    // },
    // {
    //   categoria: "Atendimento - Direção FACOMP",
    //   pergunta:
    //     "A Direção da Faculdade demonstrou transparência nas decisões que impactam os alunos?",
    //   caixa_de_texto: false,
    //   tipo_pergunta: 3,
    // },
    // {
    //   categoria: "Atendimento - Direção FACOMP",
    //   pergunta:
    //     "Você acredita que a Direção é proativa em buscar soluções para os problemas apresentados pelos alunos?",
    //   caixa_de_texto: false,
    //   tipo_pergunta: 3,
    // },
    // {
    //   categoria: "Atendimento - Direção FACOMP",
    //   pergunta:
    //     "Quando sua demanda não foi atendida imediatamente, a Direção forneceu orientações claras sobre os próximos passos?",
    //   caixa_de_texto: false,
    //   tipo_pergunta: 3,
    // },
    // {
    //   categoria: "Atendimento - Direção FACOMP",
    //   pergunta:
    //     "A Direção demonstrou disponibilidade e interesse em resolver questões acadêmicas ou administrativas que você apresentou?",
    //   caixa_de_texto: false,
    //   tipo_pergunta: 3,
    // },
    // {
    //   categoria: "Atendimento - Direção FACOMP",
    //   pergunta:
    //     "As reuniões ou comunicados da Direção com a comunidade acadêmica são frequentes e esclarecedores?",
    //   caixa_de_texto: false,
    //   tipo_pergunta: 3,
    // },
    // {
    //   categoria: "Atendimento - Direção FACOMP",
    //   pergunta:
    //     "A Direção tem fornecido feedback adequado sobre suas demandas ou sugestões apresentadas?",
    //   caixa_de_texto: false,
    //   tipo_pergunta: 3,
    // },
    // {
    //   categoria: "Atendimento - Direção FACOMP",
    //   pergunta:
    //     "No geral, você está satisfeito com o atendimento e a gestão da Direção da Faculdade de Computação?",
    //   caixa_de_texto: false,
    //   tipo_pergunta: 3,
    // },
    // {
    //   categoria: "Perguntas sobre Pesquisa",
    //   pergunta:
    //     "Você tem conhecimento sobre os laboratórios de pesquisa disponíveis na Faculdade de Computação?",
    //   caixa_de_texto: false,
    //   tipo_pergunta: 3,
    // },
    // {
    //   categoria: "Perguntas sobre Pesquisa",
    //   pergunta:
    //     "Você sabe quais professores estão associados a cada laboratório de pesquisa da faculdade?",
    //   caixa_de_texto: false,
    //   tipo_pergunta: 3,
    // },
    // {
    //   categoria: "Perguntas sobre Pesquisa",
    //   pergunta:
    //     "As linhas de pesquisa dos professores da Faculdade de Computação são claramente divulgadas para os alunos?",
    //   caixa_de_texto: false,
    //   tipo_pergunta: 3,
    // },
    // {
    //   categoria: "Perguntas sobre Pesquisa",
    //   pergunta:
    //     "Você estaria interessado em participar de um laboratório de pesquisa da Faculdade de Computação?",
    //   caixa_de_texto: false,
    //   tipo_pergunta: 3,
    // },
    // {
    //   categoria: "Perguntas sobre Pesquisa",
    //   pergunta:
    //     "Os professores da Faculdade de Computação informam regularmente sobre suas pesquisas e como os alunos podem participar?",
    //   caixa_de_texto: false,
    //   tipo_pergunta: 3,
    // },
    // {
    //   categoria: "Perguntas sobre Extensão",
    //   pergunta:
    //     "Você tem conhecimento sobre os projetos de extensão oferecidos pela Faculdade de Computação?",
    //   caixa_de_texto: false,
    //   tipo_pergunta: 3,
    // },
    // {
    //   categoria: "Perguntas sobre Extensão",
    //   pergunta:
    //     "As informações sobre os projetos de extensão são facilmente acessíveis e divulgadas para os alunos?",
    //   caixa_de_texto: false,
    //   tipo_pergunta: 3,
    // },
    // {
    //   categoria: "Perguntas sobre Extensão",
    //   pergunta:
    //     "Você já participou de algum projeto de extensão na Faculdade de Computação?",
    //   caixa_de_texto: false,
    //   tipo_pergunta: 2,
    // },
    // {
    //   categoria: "Perguntas sobre Extensão",
    //   pergunta:
    //     "Você sente que há oportunidades suficientes para os alunos se envolverem em projetos de extensão na faculdade?",
    //   caixa_de_texto: false,
    //   tipo_pergunta: 3,
    // },
    // {
    //   categoria: "Perguntas sobre Extensão",
    //   pergunta:
    //     "Você acredita que os professores incentivam a participação dos alunos em projetos de extensão?",
    //   caixa_de_texto: false,
    //   tipo_pergunta: 3,
    // },
    // {
    //   categoria: "Perguntas sobre Extensão",
    //   pergunta:
    //     "Você tem vontade de participar de um projeto de extensão na Faculdade de Computação?",
    //   caixa_de_texto: false,
    //   tipo_pergunta: 3,
    // },
    {
      categoria: "Perguntas Finais",
      pergunta:
        "Você gostaria de fazer alguma sugestão adicional ou expressar alguma reclamação sobre a Faculdade de Computação?",
      tipo_pergunta: 4,
    },
    {
      categoria: "Perguntas Finais",
      pergunta:
        "Existe algum ponto que não foi abordado nas perguntas anteriores que você gostaria de comentar sobre sua experiência na Faculdade de Computação?",
      tipo_pergunta: 4,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.wrapperProgressBar}>
        <span>
          {currentQuestion + 1} de {questionsList.length}
        </span>
        <div className={styles.progressBar}>
          <div
            className={styles.bar}
            style={
              {
                "--width-bar": `${
                  ((currentQuestion + 1) * 100) / questionsList.length
                }%`,
              } as CSSProperties
            }
          ></div>
        </div>
      </div>
      {questionsList.map((question, index) => {
        return (
          <Question
            showQuestion={index === currentQuestion ? true : false}
            category={question.categoria}
            question={question.pergunta}
            questionNumber={index + 1}
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
          onClick={() =>
            currentQuestion > 0 && setCurrentQuestion(currentQuestion - 1)
          }
          //tabIndex={6}
        >
          <CaretLeft weight="bold" />
          Voltar
        </button>
        <button
          type="button"
          className={`
            ${currentQuestion < checkedQuestionsNumber && styles.showButton}
            ${currentQuestion === questionsList.length - 1 && styles.hideButton}
          `}
          disabled={currentQuestion >= checkedQuestionsNumber ? true : false}
          onClick={() =>
            currentQuestion < questionsList.length - 1 &&
            setCurrentQuestion(currentQuestion + 1)
          }
          //tabIndex={7}
        >
          Próximo
          <CaretRight weight="bold" />
        </button>
        {currentQuestion === questionsList.length - 1 &&
          currentQuestion < checkedQuestionsNumber && (
            <button
              className={styles.submitButton}
              type="button"
              onClick={() => {
                finishQuestionnaire(respostas);
              }}
              //tabIndex={7}
            >
              Enviar respostas
              <ThumbsUp />
            </button>
          )}
      </div>
    </div>
  );
}
