import { mount } from '@vue/test-utils'
import PokemonCard from './PokemonCard.vue'

const mockedPokemonData = {
  "id": 1,
  "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  "stats": {
      "hp": 45,
      "attack": 49,
      "defense": 49,
      "special-attack": 65,
      "special-defense": 65,
      "speed": 45
  },
  "types": [
      "grass",
      "poison"
  ],
  "height": 7,
  "weight": 69,
  "abilities": [
      "overgrow",
      "chlorophyll"
  ],
  "moves": [
      "razor-wind",
      "swords-dance",
      "cut",
      "bind",
      "vine-whip",
      "headbutt",
      "tackle",
      "body-slam",
      "take-down",
      "double-edge",
      "growl",
      "strength",
      "mega-drain",
      "leech-seed",
      "growth",
      "razor-leaf",
      "solar-beam",
      "poison-powder",
      "sleep-powder",
      "petal-dance",
      "string-shot",
      "toxic",
      "rage",
      "mimic",
      "double-team",
      "defense-curl",
      "light-screen",
      "reflect",
      "bide",
      "sludge",
      "skull-bash",
      "amnesia",
      "flash",
      "rest",
      "substitute",
      "snore",
      "curse",
      "protect",
      "sludge-bomb",
      "mud-slap",
      "outrage",
      "giga-drain",
      "endure",
      "charm",
      "false-swipe",
      "swagger",
      "fury-cutter",
      "attract",
      "sleep-talk",
      "return",
      "frustration",
      "safeguard",
      "sweet-scent",
      "synthesis",
      "hidden-power",
      "sunny-day",
      "rock-smash",
      "facade",
      "nature-power",
      "helping-hand",
      "ingrain",
      "knock-off",
      "secret-power",
      "weather-ball",
      "grass-whistle",
      "bullet-seed",
      "magical-leaf",
      "natural-gift",
      "worry-seed",
      "seed-bomb",
      "energy-ball",
      "leaf-storm",
      "power-whip",
      "captivate",
      "grass-knot",
      "venoshock",
      "round",
      "echoed-voice",
      "grass-pledge",
      "work-up",
      "grassy-terrain",
      "confide",
      "grassy-glide"
  ]
}

describe('Pokemon Card component', function () {
  test ('renders a pokemon card', () => {
    const wrapper = mount(PokemonCard, {
      props: {
        pokemonData: mockedPokemonData,
        pokemonName: 'bulbasaur'
      }
    })
    const pokemonCard = wrapper.get('[data-test="pokemon-card-bulbasaur"]')
    expect(pokemonCard.text()).toBe('Bulbasaur')
  })
})
