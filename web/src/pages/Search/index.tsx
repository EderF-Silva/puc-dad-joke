import styles from "./styles.module.css";
import { Button } from "../../components/Button";
import { Joke } from "./components/Joke";
import JokeService, {Joke as IJoke}from "@src/services/JokeService";
import { useCallback, useEffect, useState } from "react";

export function Search() {

  const [jokes, setJokes] = useState<IJoke[]>();
  const [totalOfItems, setTotalOfItems] = useState<number>(0);
  const [query, setQuery] = useState<string | undefined>(undefined);
  const [searchedTerm, setSeachedTerm] = useState('');


  const getJokes = useCallback(async () => {
    try {
      const {jokes,totalOfItems} = await JokeService.getJokes({ query });
      setJokes(jokes);
      setTotalOfItems(totalOfItems);

    } catch (error) {
      console.error("Erro ao consultar!:", error);
    }
  }, [query]);

  useEffect(() => {
    getJokes();
  }, [getJokes]);

  function handleSearch() {
    setQuery(searchedTerm);
  }

  return (
    <div style={{ padding: "50px 80px" }}>
      <div className={styles.heading}>
        <span className="styles">
          <strong>{totalOfItems}</strong> jokes found
        </span>
        <div className={styles.search}>
          <input value={searchedTerm} onChange={e=>setSeachedTerm(e.target.value)} type="text" placeholder="Search terms..." />
          <Button onClick={handleSearch}>Search</Button>
        </div>
      </div>

      <div className={styles.content}>
        <span>Joke</span>
        <div className={styles.jokes}>
          {jokes?.map((joke) => (
            <Joke key={joke.id} text={joke.text} />
          ))}
        </div>
      </div>
    </div>
  );
}
