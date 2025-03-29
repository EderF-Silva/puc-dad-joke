import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faCheck, faShareFromSquare } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.css";
import { useCopyText } from "@src/hooks/useCopyText";


export type JokeCardPropos = {
  joke: string;
};

export function JokeCard({joke} : JokeCardPropos) {

  const {copied, copyText} = useCopyText();

  return (
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <p>
              {joke}
            </p>
          </div>
          <div className={styles.cardFooter}>
            <a onClick={()=> copyText(joke)}>
              <FontAwesomeIcon icon={copied ? faCheck : faCopy} />
              {copied ? " Copied!" : "Copy"}
            </a>
            <a onClick={() => {}}>
              <FontAwesomeIcon icon={faShareFromSquare} />
              Share on Twitter
            </a>
          </div>
        </div>
  );
}