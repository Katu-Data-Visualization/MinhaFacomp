import { CSSProperties } from "react";
import styles from "./Question.module.css";

interface QuestionProps {
  showQuestion?: boolean;
  category: string;
  question: string;
  questionNumber: number;
  handlResposta: (e: any, category: string, question: string) => void;
  questionType: number;
}

export default function Question({
  category,
  question,
  showQuestion,
  questionNumber,
  handlResposta,
  questionType,
}: QuestionProps) {
  return (
    <div
      className={`${styles.question} ${
        showQuestion ? styles.showQuestion : styles.hideQuestion
      }`}
    >
      <h2>{category}</h2>
      <hr />
      <p>{question}</p>

      <ul className={styles.alternativas}>
        {questionType === 1 && (
          <>
            <li
              tabIndex={1}
              onKeyDown={(e) =>
                e.key === "Enter" &&
                document.getElementById(`q${questionNumber}-1`)?.click()
              }
              style={{ "--delay": ".6s" } as CSSProperties}
            >
              <input
                type="radio"
                value={"Todos"}
                name={`q${questionNumber}`}
                id={`q${questionNumber}-1`}
                onChange={(e) => handlResposta(e, category, question)}
              />
              <span>Todos</span>
            </li>
            <li
              tabIndex={2}
              onKeyDown={(e) =>
                e.key === "Enter" &&
                document.getElementById(`q${questionNumber}-2`)?.click()
              }
              style={{ "--delay": ".7s" } as CSSProperties}
            >
              <input
                type="radio"
                value={"Parcialmente"}
                name={`q${questionNumber}`}
                id={`q${questionNumber}-2`}
                onChange={(e) => handlResposta(e, category, question)}
              />
              <span>Parcialmente</span>
            </li>
            <li
              tabIndex={3}
              onKeyDown={(e) =>
                e.key === "Enter" &&
                document.getElementById(`q${questionNumber}-3`)?.click()
              }
              style={{ "--delay": ".8s" } as CSSProperties}
            >
              <input
                type="radio"
                value={"Nenhum"}
                name={`q${questionNumber}`}
                id={`q${questionNumber}-3`}
                onChange={(e) => handlResposta(e, category, question)}
              />
              <span>Nenhum</span>
            </li>
          </>
        )}

        {questionType === 2 && (
          <>
            <li
              tabIndex={2}
              onKeyDown={(e) =>
                e.key === "Enter" &&
                document.getElementById(`q${questionNumber}-2`)?.click()
              }
              style={{ "--delay": ".7s" } as CSSProperties}
            >
              <input
                type="radio"
                value={"Sim"}
                name={`q${questionNumber}`}
                id={`q${questionNumber}-1`}
                onChange={(e) => handlResposta(e, category, question)}
              />
              <span>Sim</span>
            </li>
            <li
              tabIndex={3}
              onKeyDown={(e) =>
                e.key === "Enter" &&
                document.getElementById(`q${questionNumber}-3`)?.click()
              }
              style={{ "--delay": ".8s" } as CSSProperties}
            >
              <input
                type="radio"
                value={"Não"}
                name={`q${questionNumber}`}
                id={`q${questionNumber}-2`}
                onChange={(e) => handlResposta(e, category, question)}
              />
              <span>Não</span>
            </li>
          </>
        )}

        {questionType === 3 && (
          <>
            <li
              tabIndex={1}
              onKeyDown={(e) =>
                e.key === "Enter" &&
                document.getElementById(`q${questionNumber}-1`)?.click()
              }
              style={{ "--delay": ".6s" } as CSSProperties}
            >
              <input
                type="radio"
                value={"Discordo totalmente"}
                name={`q${questionNumber}`}
                id={`q${questionNumber}-1`}
                onChange={(e) => handlResposta(e, category, question)}
              />
              <span>Discordo totalmente</span>
            </li>
            <li
              tabIndex={2}
              onKeyDown={(e) =>
                e.key === "Enter" &&
                document.getElementById(`q${questionNumber}-2`)?.click()
              }
              style={{ "--delay": ".7s" } as CSSProperties}
            >
              <input
                type="radio"
                value={"Discordo"}
                name={`q${questionNumber}`}
                id={`q${questionNumber}-2`}
                onChange={(e) => handlResposta(e, category, question)}
              />
              <span>Discordo</span>
            </li>
            <li
              tabIndex={3}
              onKeyDown={(e) =>
                e.key === "Enter" &&
                document.getElementById(`q${questionNumber}-3`)?.click()
              }
              style={{ "--delay": ".8s" } as CSSProperties}
            >
              <input
                type="radio"
                value={"Neutro"}
                name={`q${questionNumber}`}
                id={`q${questionNumber}-3`}
                onChange={(e) => handlResposta(e, category, question)}
              />
              <span>Neutro</span>
            </li>
            <li
              tabIndex={3}
              onKeyDown={(e) =>
                e.key === "Enter" &&
                document.getElementById(`q${questionNumber}-3`)?.click()
              }
              style={{ "--delay": ".8s" } as CSSProperties}
            >
              <input
                type="radio"
                value={"Concordo"}
                name={`q${questionNumber}`}
                id={`q${questionNumber}-3`}
                onChange={(e) => handlResposta(e, category, question)}
              />
              <span>Concordo</span>
            </li>
            <li
              tabIndex={3}
              onKeyDown={(e) =>
                e.key === "Enter" &&
                document.getElementById(`q${questionNumber}-3`)?.click()
              }
              style={{ "--delay": ".8s" } as CSSProperties}
            >
              <input
                type="radio"
                value={"Concordo Totalmente"}
                name={`q${questionNumber}`}
                id={`q${questionNumber}-3`}
                onChange={(e) => handlResposta(e, category, question)}
              />
              <span>Concordo totalmente</span>
            </li>
          </>
        )}

        {questionType === 4 && (
          <>
            <textarea
              className={styles.textBox}
              onChange={(e) => handlResposta(e, category, question)}
              name={`q${questionNumber}`}
              id={`q${questionNumber}-textBox`}
              placeholder="Digite aqui"
            ></textarea>
          </>
        )}

        {questionType === 5 && (
          <>
            <li
              tabIndex={1}
              onKeyDown={(e) =>
                e.key === "Enter" &&
                document.getElementById(`q${questionNumber}-1`)?.click()
              }
              style={{ "--delay": ".6s" } as CSSProperties}
            >
              <input
                type="radio"
                value={"Satisfeito"}
                name={`q${questionNumber}`}
                id={`q${questionNumber}-1`}
                onChange={(e) => handlResposta(e, category, question)}
              />
              <span>Satisfeito</span>
            </li>
            <li
              tabIndex={2}
              onKeyDown={(e) =>
                e.key === "Enter" &&
                document.getElementById(`q${questionNumber}-2`)?.click()
              }
              style={{ "--delay": ".7s" } as CSSProperties}
            >
              <input
                type="radio"
                value={"Insastifeito"}
                name={`q${questionNumber}`}
                id={`q${questionNumber}-2`}
                onChange={(e) => handlResposta(e, category, question)}
              />
              <span>Insastifeito</span>
            </li>
            <li
              tabIndex={3}
              onKeyDown={(e) =>
                e.key === "Enter" &&
                document.getElementById(`q${questionNumber}-3`)?.click()
              }
              style={{ "--delay": ".8s" } as CSSProperties}
            >
              <input
                type="radio"
                value={"Neutro"}
                name={`q${questionNumber}`}
                id={`q${questionNumber}-3`}
                onChange={(e) => handlResposta(e, category, question)}
              />
              <span>Neutro</span>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
