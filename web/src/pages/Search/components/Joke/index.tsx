import { Button } from "../../../../components/Button";
import { faCopy, faCheck } from "../../../../lib/fontawesome/solid";
import { FontAwesomeIcon } from "../../../../lib/fontawesome";
import styles from "./styles.module.css";
import { useCopyText } from "@src/hooks/useCopyText";


export type JokeProps = {
  text: string;
};

export function Joke({ text }: JokeProps) {

  const {copied, copyText} = useCopyText();
     
  return (
    <div className={styles.joke}>
      <p>{text}</p>
      <Button variant="secondary" onClick={()=> copyText(text)}>
      <FontAwesomeIcon icon={copied ? faCheck : faCopy} />
              {copied ? " Copied!" : "Copy"}
      </Button>
    </div>
  );
}
