import { ProxyState } from "../AppState.js"
import { ActivePokemon } from "../Models/ActivePokemon.js"
import { WildPokemon } from "../Models/WildPokemon.js"
import { pokemonApi } from "./AxiosService.js"




class WildPokemonsService{
    async getPokemons(){
        let res = await pokemonApi.get(`/api/v2/pokemon`)
        ProxyState.wildPokemons = res.data.results.map(p => new WildPokemon(p))
    }

    async setActivePokemon(url){
        let res = await pokemonApi.get(url)
        console.log('set active', res);
        ProxyState.activePokemon = new ActivePokemon(res.data)
    }
}


export const wildPokemonsService = new WildPokemonsService()
