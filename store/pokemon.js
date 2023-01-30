import { defineStore } from 'pinia'
import '../utils/arrToObj.js'

export const usePokemonsStore = defineStore('pokemon-store', {
  state: () => ( { pokemonData: {}, pokemonNames: [] } ),
  getters: {

  },
  actions: {
    async getPokemonData() {
      const pokemonApiUrl = 'https://pokeapi.co/api/v2/pokemon/'
      for (let i = 1; i < 12; i++ ) {
        try {
          fetch(pokemonApiUrl + `${i}/`)
          .then(response => response.json())
          .then(data => {
            const moves = data.moves.map(el => el.move.name)
            const abilities = data.abilities.map(el => el.ability.name)
            const height = data.height
            const weight = data.weight
            const id = data.id
            const image = data.sprites.other['official-artwork'].front_default
            const sprite = data.sprites.front_default
            const name = data.name
            const stats = arrToObj(data.stats, 'stat', 'name', 'base_stat')
            const types = data.types.map(el => el.type.name)
            const pokemon = {
              id,
              image,
              sprite,
              stats,
              types,
              height,
              weight,
              abilities,
              moves
            }
            console.log(name)
            this.pokemonData[name] = pokemon
            this.pokemonNames.push(name)
          }) 
        } catch (error) {
          console.log(error)
        }
      }
      console.log('pokemon data fetched')
    }
  }

})