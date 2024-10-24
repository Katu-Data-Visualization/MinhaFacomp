import { CSSProperties } from "react";
import styles from "./Question.module.css";

interface QuestionProps {
  showQuestion?: boolean;
  category: string;
  question: string;
  questionNumber: number;
  handlResposta: (e: any) => void;
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
                name={`q${questionNumber}`}
                id={`q${questionNumber}-1`}
                onChange={(e) => handlResposta(e)}
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
                name={`q${questionNumber}`}
                id={`q${questionNumber}-2`}
                onChange={(e) => handlResposta(e)}
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
                name={`q${questionNumber}`}
                id={`q${questionNumber}-3`}
                onChange={(e) => handlResposta(e)}
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
                name={`q${questionNumber}`}
                id={`q${questionNumber}-2`}
                onChange={(e) => handlResposta(e)}
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
                name={`q${questionNumber}`}
                id={`q${questionNumber}-3`}
                onChange={(e) => handlResposta(e)}
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
                name={`q${questionNumber}`}
                id={`q${questionNumber}-1`}
                onChange={(e) => handlResposta(e)}
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
                name={`q${questionNumber}`}
                id={`q${questionNumber}-2`}
                onChange={(e) => handlResposta(e)}
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
                name={`q${questionNumber}`}
                id={`q${questionNumber}-3`}
                onChange={(e) => handlResposta(e)}
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
                name={`q${questionNumber}`}
                id={`q${questionNumber}-3`}
                onChange={(e) => handlResposta(e)}
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
                name={`q${questionNumber}`}
                id={`q${questionNumber}-3`}
                onChange={(e) => handlResposta(e)}
              />
              <span>Concordo totalmente</span>
            </li>
          </>
        )}

        {questionType === 4 && (
          <>
            <textarea
              className={styles.textBox}
              onChange={(e) => handlResposta(e)}
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
                name={`q${questionNumber}`}
                id={`q${questionNumber}-1`}
                onChange={(e) => handlResposta(e)}
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
                name={`q${questionNumber}`}
                id={`q${questionNumber}-2`}
                onChange={(e) => handlResposta(e)}
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
                name={`q${questionNumber}`}
                id={`q${questionNumber}-3`}
                onChange={(e) => handlResposta(e)}
              />
              <span>Neutro</span>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
