import { useState, useEffect, CSSProperties } from "react";

import styles from "./Questionnaire.module.css";

import { CaretLeft, CaretRight, ThumbsUp } from "@phosphor-icons/react";

import Loading from "../Loading/Loading";
import Question from "../Question/Question";

interface QuestionnaireProps {
  finishQuestionnaire: () => void;
}

export default function Questionnaire({
  finishQuestionnaire,
}: QuestionnaireProps) {
  const [hideLoading, setHideLoading] = useState<boolean>(false);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);

  const [totalQuestionChecked, setTotalQuestionChecked] = useState<[]>([]);
  const [checkedQuestionsNumber, setCheckedQuestionsNumber] =
    useState<number>(0);

  const [respostas, setRespostas] = useState<{}>({});

  function handlResposta(e: any) {
    let respAux: any = respostas;

    if (e.target.localName === "textarea") {
      respAux[`questao${currentQuestion + 1}`] = e.target.value;
    } else {
      respAux[`questao${currentQuestion + 1}`] = e.target.id;
    }

    setRespostas(respAux);

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

  useEffect(() => {
    setTimeout(() => setHideLoading(true), 3000);
  }, []);

  const newQuestions = [
    {
      categoria: "Comunicação",
      perguntas: [
        {
          pergunta:
            "Você conhece todos os canais de contato da Computação UFPA (FACOMP)?",
          tipo: 1, // (Todos, Parcialmente, Nenhum)
        },
        {
          pergunta:
            "As comunicações da FACOMP são claras e de leitura acessível?",
          tipo: 3, // (1) Discordo totalmente | (2) Discordo | (3) Neutro | (4) Concordo | (5) Concordo totalmente
        },
        {
          pergunta:
            "Em relação à frequência, as comunicações da FACOMP são adequadas?",
          tipo: 3,
        },
        {
          pergunta:
            "Você já utilizou o site da Faculdade para obter informações sobre procedimentos, como TCC, Estágio ou Segunda Chamada?",
          tipo: 2, // (Sim, Não)
        },
        {
          pergunta:
            "Se a resposta anterior foi 'sim', você se sentiu satisfeito com as explicações do site ou encontrou divergências nas comunicações?",
          tipo: 3,
        },
        {
          pergunta:
            "Sobre as oportunidades de estágio, você acredita que a comunicação da FACOMP é eficiente para vagas internas?",
          tipo: 3,
        },
        {
          pergunta:
            "Sobre as oportunidades de estágio, você acredita que a comunicação da FACOMP é eficiente para vagas externas?",
          tipo: 3,
        },
      ],
    },
    {
      categoria: "Atendimento - Secretaria FACOMP",
      perguntas: [
        {
          pergunta:
            "Você considera que os servidores da secretaria são corteses e educados durante o atendimento?",
          tipo: 3,
        },
        {
          pergunta:
            "A secretaria da Faculdade de Computação atende suas solicitações de forma rápida e eficiente?",
          tipo: 3,
        },
        {
          pergunta:
            "As informações fornecidas pela secretaria são claras e compreensíveis?",
          tipo: 3,
        },
        {
          pergunta:
            "Você acredita que a secretaria está bem organizada tanto no ambiente quanto no horário de atendimento para as demandas dos alunos?",
          tipo: 3,
        },
        {
          pergunta:
            "As respostas da secretaria por e-mail ou outros meios de comunicação são rápidas e satisfatórias?",
          tipo: 3,
        },
        {
          pergunta:
            "Quando você não foi atendido prontamente, a secretaria forneceu orientações suficientes para responder às suas dúvidas ou direcioná-lo para a pessoa correta?",
          tipo: 3,
        },
        {
          pergunta:
            "Em caso de atraso no atendimento, a secretaria forneceu justificativas e prazos realistas para a resolução do seu problema?",
          tipo: 3,
        },
        {
          pergunta:
            "No geral, você está satisfeito com a qualidade do atendimento prestado pela secretaria da Faculdade de Computação?",
          tipo: 3,
        },
      ],
    },
    {
      categoria: "Atendimento - Direção FACOMP",
      perguntas: [
        {
          pergunta:
            "A Direção da Faculdade de Computação atendeu suas solicitações de forma eficiente e rápida?",
          tipo: 3,
        },
        {
          pergunta:
            "Você considera que os membros da Direção são acessíveis e abertos para atender as demandas dos alunos?",
          tipo: 3,
        },
        {
          pergunta:
            "As informações fornecidas pela Direção são claras e adequadas para resolver suas questões acadêmicas?",
          tipo: 3,
        },
        {
          pergunta:
            "A Direção da Faculdade demonstrou transparência nas decisões que impactam os alunos?",
          tipo: 3,
        },
        {
          pergunta:
            "Você acredita que a Direção é proativa em buscar soluções para os problemas apresentados pelos alunos?",
          tipo: 3,
        },
        {
          pergunta:
            "Quando sua demanda não foi atendida imediatamente, a Direção forneceu orientações claras sobre os próximos passos?",
          tipo: 3,
        },
        {
          pergunta:
            "A Direção demonstrou disponibilidade e interesse em resolver questões acadêmicas ou administrativas que você apresentou?",
          tipo: 3,
        },
        {
          pergunta:
            "As reuniões ou comunicados da Direção com a comunidade acadêmica são frequentes e esclarecedores?",
          tipo: 3,
        },
        {
          pergunta:
            "A Direção tem fornecido feedback adequado sobre suas demandas ou sugestões apresentadas?",
          tipo: 3,
        },
        {
          pergunta:
            "No geral, você está satisfeito com o atendimento e a gestão da Direção da Faculdade de Computação?",
          tipo: 3,
        },
      ],
    },
    {
      categoria: "Perguntas sobre Pesquisa",
      perguntas: [
        {
          pergunta:
            "Você tem conhecimento sobre os laboratórios de pesquisa disponíveis na Faculdade de Computação?",
          tipo: 3,
        },
        {
          pergunta:
            "Você sabe quais professores estão associados a cada laboratório de pesquisa da faculdade?",
          tipo: 3,
        },
        {
          pergunta:
            "As linhas de pesquisa dos professores da Faculdade de Computação são claramente divulgadas para os alunos?",
          tipo: 3,
        },
        {
          pergunta:
            "Você estaria interessado em participar de um laboratório de pesquisa da Faculdade de Computação?",
          tipo: 3,
        },
        {
          pergunta:
            "Os professores da Faculdade de Computação informam regularmente sobre suas pesquisas e como os alunos podem participar?",
          tipo: 3,
        },
      ],
    },
    {
      categoria: "Perguntas sobre Extensão",
      perguntas: [
        {
          pergunta:
            "Você tem conhecimento sobre os projetos de extensão oferecidos pela Faculdade de Computação?",
          tipo: 3,
        },
        {
          pergunta:
            "As informações sobre os projetos de extensão são facilmente acessíveis e divulgadas para os alunos?",
          tipo: 3,
        },
        {
          pergunta:
            "Você já participou de algum projeto de extensão na Faculdade de Computação?",
          tipo: 2, // (Sim, Não)
        },
        {
          pergunta:
            "Você sente que há oportunidades suficientes para os alunos se envolverem em projetos de extensão na faculdade?",
          tipo: 3,
        },
        {
          pergunta:
            "Você acredita que os professores incentivam a participação dos alunos em projetos de extensão?",
          tipo: 3,
        },
        {
          pergunta:
            "Você tem vontade de participar de um projeto de extensão na Faculdade de Computação?",
          tipo: 3,
        },
      ],
    },
    {
      categoria: "Perguntas Finais",
      perguntas: [
        {
          pergunta:
            "Você gostaria de fazer alguma sugestão adicional ou expressar alguma reclamação sobre a Faculdade de Computação?",
          tipo: 4, // Campo de texto
        },
        {
          pergunta:
            "Existe algum ponto que não foi abordado nas perguntas anteriores que você gostaria de comentar sobre sua experiência na Faculdade de Computação?",
          tipo: 4, // Campo de texto
        },
      ],
    },
  ];

  const questionsList = [
    {
      categoria: "Ensino",
      pergunta:
        "Como você avalia a didática das disciplinas assistidas no período avaliado?",
      caixa_de_texto: false,
      tipo_pergunta: 1,
    },
    {
      categoria: "Ensino",
      pergunta:
        "Quais sugestões você teria para melhorar a qualidade do ensino na Faculdade de Computação?",
      caixa_de_texto: true,
      tipo_pergunta: 0,
    },
    {
      categoria: "Pesquisa",
      pergunta:
        "Você tem conhecimento das pesquisas que acontecem dentro da Faculdade de Computação?",
      caixa_de_texto: false,
      tipo_pergunta: 2,
    },
    {
      categoria: "Pesquisa",
      pergunta:
        "Alguma vez você sentiu-se motivado a procurar um professor ou laboratório para iniciar uma pesquisa?",
      caixa_de_texto: false,
      tipo_pergunta: 2,
    },
    {
      categoria: "Administração",
      pergunta:
        "Como você avalia a eficiência dos processos administrativos na Faculdade de Computação?",
      caixa_de_texto: false,
      tipo_pergunta: 1,
    },
    {
      categoria: "Extra",
      pergunta:
        "Você gostaria de fazer alguma sugestão adicional ou expressar alguma reclamação sobre a Faculdade de Computação?",
      caixa_de_texto: true,
      tipo_pergunta: 0,
    },
    {
      categoria: "Extra",
      pergunta:
        "Existe algum ponto que não foi abordado nas perguntas anteriores que você gostaria de comentar sobre a sua experiência na Faculdade de Computação?",
      caixa_de_texto: true,
      tipo_pergunta: 0,
    },
  ];

  return (
    <div className={styles.container}>
      <Loading hideLoading={hideLoading} />
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
            hasTextBox={question.caixa_de_texto}
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
              <ThumbsUp />
            </button>
          )}
      </div>
    </div>
  );
}
