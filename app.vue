<template>
  <div>
    <!-- Markup shared across all pages, ex: NavBar -->
      <NavBar>
        <NuxtPage />
      </NavBar>
  </div>
</template>

<script>
import { usePokemonsStore } from '/store/pokemon'
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