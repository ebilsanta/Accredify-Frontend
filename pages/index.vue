<template>
  <div>
    <a-layout-content style="padding: 0 50px;">
      <div :style="{ margin: '20px 0px', minHeight: '280px' }">
        <a-list
          :grid="{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 6, xxxl: 6 }"
          :data-source="pokemonNames"
        >
          <template #renderItem="{ item }">
            <a-list-item>
              <PokemonCard :pokemonData="pokemonData[item]" :pokemonName="item"></PokemonCard>
            </a-list-item>
          </template>
        </a-list>
      </div>
  </a-layout-content>
  
  </div>
  
</template>

<script>
import { usePokemonsStore } from '../store/pokemon'
export default {
  setup() {
    const store = usePokemonsStore()
    const pokemonData = store.pokemonData
    const pokemonNames = store.pokemonNames
    return {
      pokemonData,
      pokemonNames
    }
  },
}
</script>