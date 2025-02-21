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
      categoria: "Perfil",
      pergunta: "Qual o seu curso:",
      caixa_de_texto: false,
      tipo_pergunta: 0,
    },
    {
      categoria: "Comunicação",
      pergunta:
        "Você conhece todos os canais de contato da Computação UFPA (FACOMP)?",
      caixa_de_texto: false,
      tipo_pergunta: 1,
      descricao: [
        "Site: www.computacao.ufpa.br ",
        "Mídias sociais - Instagram, YouTube e Twitter: @computacaoufpa",
        "E-mail: facomp@ufpa.br",
        "Podcast da FACOMP: https://facompcast.ufpa.br/",
        "Grupo de Whatsapp: https://chat.whatsapp.com/HzYEDqAy7bo5UqeleyhUM6",
      ],
    },
    {
      categoria: "Comunicação",
      pergunta: "As comunicações da FACOMP são claras e de fácil leitura.",
      caixa_de_texto: false,
      tipo_pergunta: 3,
    },
    {
      categoria: "Comunicação",
      pergunta:
        "As comunicações, em relação à frequência, são adequadas (a FACOMP manda e-mail somente quando é necessário).",
      caixa_de_texto: false,
      tipo_pergunta: 3,
    },
    {
      categoria: "Comunicação",
      pergunta:
        "Você usa o site da FACOMP para consultar informações sobre procedimentos, como TCC, Estágio, Segunda Chamada ?",
      caixa_de_texto: false,
      tipo_pergunta: 2,
    },
    {
      categoria: "Comunicação",
      pergunta:
        "Se você utiliza o site da FACOMP, você ficou satisfeito com a explicação e a comunicação fornecidas ?",
      caixa_de_texto: false,
      tipo_pergunta: 5,
    },
    {
      categoria: "Comunicação",
      pergunta:
        "A comunicação da FACOMP sobre as oportunidades de estágio é eficiente para vagas INTERNAS.",
      caixa_de_texto: false,
      tipo_pergunta: 3,
    },
    {
      categoria: "Comunicação",
      pergunta:
        "A comunicação da FACOMP sobre as oportunidades de estágio é eficiente para vagas EXTERNAS.",
      caixa_de_texto: false,
      tipo_pergunta: 3,
    },
    {
      categoria: "Atendimento - Secretaria FACOMP",
      pergunta:
        "Os servidores da secretaria são corteses e educados durante o atendimento.",
      caixa_de_texto: false,
      tipo_pergunta: 3,
    },
    {
      categoria: "Atendimento - Secretaria FACOMP",
      pergunta:
        "A secretaria da Faculdade de Computação atende minhas solicitações de forma rápida e eficiente.",
      caixa_de_texto: false,
      tipo_pergunta: 3,
    },
    {
      categoria: "Atendimento - Secretaria FACOMP",
      pergunta:
        "As informações fornecidas pela secretaria são claras e compreensíveis.",
      caixa_de_texto: false,
      tipo_pergunta: 3,
    },
    {
      categoria: "Atendimento - Secretaria FACOMP",
      pergunta:
        "A secretaria está bem organizada tanto no ambiente quanto no horário de atendimento para as demandas dos alunos.",
      caixa_de_texto: false,
      tipo_pergunta: 3,
    },
    {
      categoria: "Atendimento - Secretaria FACOMP",
      pergunta:
        "As respostas da secretaria por e-mail ou outros meios de comunicação são rápidas e satisfatórias.",
      caixa_de_texto: false,
      tipo_pergunta: 3,
    },
    {
      categoria: "Atendimento - Secretaria FACOMP",
      pergunta:
        "Quando não fui atendido prontamente, a secretaria forneceu orientações suficientes para responder às minhas dúvidas ou me direcionar para a pessoa correta.",
      caixa_de_texto: false,
      tipo_pergunta: 3,
    },
    {
      categoria: "Atendimento - Secretaria FACOMP",
      pergunta:
        "Em caso de atraso no atendimento, a secretaria forneceu justificativas e prazos realistas para a resolução do meu problema.",
      caixa_de_texto: false,
      tipo_pergunta: 3,
    },
    {
      categoria: "Atendimento - Secretaria FACOMP",
      pergunta:
        "No geral, você está satisfeito com a qualidade do atendimento prestado pela secretaria da Faculdade de Computação ?",
      caixa_de_texto: false,
      tipo_pergunta: 2,
    },
    {
      categoria: "Atendimento - Direção FACOMP",
      pergunta:
        "A Direção da Faculdade de Computação atendeu minhas solicitações de forma eficiente e rápida.",

      caixa_de_texto: false,
      tipo_pergunta: 3,
    },
    {
      categoria: "Atendimento - Direção FACOMP",
      pergunta:
        "Os membros da Direção são acessíveis e abertos para atender as demandas dos alunos.",
      caixa_de_texto: false,
      tipo_pergunta: 3,
    },
    {
      categoria: "Atendimento - Direção FACOMP",
      pergunta:
        "As informações fornecidas pela Direção são claras e adequadas para resolver minhas questões acadêmicas.",
      caixa_de_texto: false,
      tipo_pergunta: 3,
    },
    {
      categoria: "Atendimento - Direção FACOMP",
      pergunta:
        "A Direção da Faculdade demonstrou transparência nas decisões que impactam os alunos.",
      caixa_de_texto: false,
      tipo_pergunta: 3,
    },
    {
      categoria: "Atendimento - Direção FACOMP",
      pergunta:
        "A Direção é proativa em buscar soluções para os problemas apresentados pelos alunos.",
      caixa_de_texto: false,
      tipo_pergunta: 3,
    },
    {
      categoria: "Atendimento - Direção FACOMP",
      pergunta:
        "Quando minha demanda não foi atendida imediatamente, a Direção forneceu orientações claras sobre os próximos passos.",
      caixa_de_texto: false,
      tipo_pergunta: 3,
    },
    {
      categoria: "Atendimento - Direção FACOMP",
      pergunta:
        "A Direção demonstrou disponibilidade e interesse em resolver questões acadêmicas ou administrativas que apresentei.",
      caixa_de_texto: false,
      tipo_pergunta: 3,
    },
    {
      categoria: "Atendimento - Direção FACOMP",
      pergunta:
        "A Direção tem fornecido feedback adequado sobre minhas demandas ou sugestões apresentadas.",
      caixa_de_texto: false,
      tipo_pergunta: 3,
    },
    {
      categoria: "Atendimento - Direção FACOMP",
      pergunta:
        "No geral, você está satisfeito com o atendimento e a gestão da Direção da Faculdade de Computação?",
      caixa_de_texto: false,
      tipo_pergunta: 2,
    },
    {
      categoria: "Perguntas sobre Pesquisa",
      pergunta:
        "Tenho conhecimento sobre os laboratórios de pesquisa disponíveis na Faculdade de Computação.",
      caixa_de_texto: false,
      tipo_pergunta: 3,
    },
    {
      categoria: "Perguntas sobre Pesquisa",
      pergunta:
        "Sei quais professores estão associados a cada laboratório de pesquisa da faculdade.",
      caixa_de_texto: false,
      tipo_pergunta: 3,
    },
    {
      categoria: "Perguntas sobre Pesquisa",
      pergunta:
        "As linhas de pesquisa dos professores da Faculdade de Computação são claramente divulgadas para os alunos.",
      caixa_de_texto: false,
      tipo_pergunta: 3,
    },
    {
      categoria: "Perguntas sobre Pesquisa",
      pergunta:
        "Tenho interesse em participar de um laboratório de pesquisa da Faculdade de Computação.",
      caixa_de_texto: false,
      tipo_pergunta: 3,
    },
    {
      categoria: "Perguntas sobre Pesquisa",
      pergunta:
        "Os professores da Faculdade de Computação informam regularmente sobre suas pesquisas e como os alunos podem participar.",
      caixa_de_texto: false,
      tipo_pergunta: 3,
    },
    {
      categoria: "Perguntas sobre Extensão",
      pergunta:
        "Tenho conhecimento sobre os projetos de extensão oferecidos pela Faculdade de Computação.",
      caixa_de_texto: false,
      tipo_pergunta: 3,
    },
    {
      categoria: "Perguntas sobre Extensão",
      pergunta:
        "As informações sobre os projetos de extensão são facilmente acessíveis e divulgadas para os alunos.",
      caixa_de_texto: false,
      tipo_pergunta: 3,
    },
    {
      categoria: "Perguntas sobre Extensão",
      pergunta:
        "Já participei de algum projeto de extensão na Faculdade de Computação.",
      caixa_de_texto: false,
      tipo_pergunta: 3,
    },
    {
      categoria: "Perguntas sobre Extensão",
      pergunta:
        "Tenho vontade de participar de um projeto de extensão na Faculdade de Computação.",
      caixa_de_texto: false,
      tipo_pergunta: 3,
    },
    {
      categoria: "Perguntas Finais",
      pergunta:
        "Aproveite este espaço para dar sugestões de melhorias  ou expressar alguma reclamação sobre a Faculdade de Computação. Não se preocupe, as respostas são anônimas.",
      tipo_pergunta: 4,
    },
    {
      categoria: "Perguntas Finais",
      pergunta:
        "Existe algum ponto que não foi abordado nas perguntas anteriores que você gostaria de comentar sobre sua experiência na Faculdade de Computação? ",
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
            descricao={question.descricao}
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
