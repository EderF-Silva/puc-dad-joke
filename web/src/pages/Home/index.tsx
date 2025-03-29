import styles from "./styles.module.css";
import { Button } from "@src/components/Button";
import { faShuffle } from "../../lib/fontawesome/solid";
import { FontAwesomeIcon } from "@src/lib/fontawesome";
import { JokeCard } from "./components/JokeCard";
import JokeService, { Joke } from "@src/services/JokeService";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export function Home() {

  const [randomJoke, setRandomJoke] = useState<Joke>();

  const getRandomJoke = async () => {
    try {
      const joke = await JokeService.getRandomJoke();
      setRandomJoke(joke);
    } catch  {
      toast("Erro ao consultar API", {type: "error"});
  
    }
  };

  useEffect(() => {
    getRandomJoke();

  },[]);


  function handleNewJoke() {
    getRandomJoke();
  }


  return (
    <main style={{ padding: "50px 80px" }}>
      <div className={styles.heading}>
        <h1>Random dad joke:</h1>
        <Button onClick={handleNewJoke}>
          <FontAwesomeIcon icon={faShuffle} /> New Joke
        </Button>
      </div>
      <div className={styles.content}>
        <JokeCard joke={randomJoke?.text ?? ""} />
      </div>
    </main>
  );
}
