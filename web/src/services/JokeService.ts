import { Joke } from '@src/pages/Search/components/Joke';
import axios from 'axios';

const BASE_URL = 'http://localhost:3333/joke';
const RANDOM_JOKE_URL = `${BASE_URL}/random`;

export type Joke = {
    id: string;
    text: string;
}

export type createJoke = {
    joke: string;
}

export type createJokeParams = {
    joke: string;
}

export type GetJokesResponse = {
    jokes: Joke[] | undefined;
    totalOfItems: number | undefined;
}

export type GetJokesParams = {
    query: string | undefined;
}

class JokeService{

    #baseUrl: string = BASE_URL;

    async createJoke({joke}: createJokeParams): Promise<Joke> {
        try{
            const response = await axios.post(BASE_URL, {text:joke});
            return response.data;
        }catch(error){
            console.error("Erro ao cadastrar Piada: ", error);
            throw new Error("Erro ao cadastrar Piada");
        }
    }

    getRandomJoke = async (): Promise <Joke> => {
        try{
            const response = await axios.get(RANDOM_JOKE_URL);
            return response.data;
        }catch(error){
            console.error("Erro ao consultar API: ", error);
            throw new Error("Erro ao consultar API");
        }     
    }

    async getJokes({query} : GetJokesParams): Promise<GetJokesResponse[]> {
        try{
            const response = await axios.get(this.#baseUrl,{
                params:{
                    query,
                }
            });
            return response.data;
        }catch(error){
            console.error("Erro ao consultar API: ", error);
            throw new Error("Erro ao consultar API");
        }
    }

}


export default new JokeService();