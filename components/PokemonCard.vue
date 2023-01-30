<template >
  <div :data-test="`pokemon-card-${pokemonName}`">
    <NuxtLink :to="'/pokemon/'+pokemonName">
      <a-card hoverable style="width: 250px">
        <template #cover>
          <img
            :src="pokemonData.image"
          />
        </template>
        <template #actions>
          #{{ pokemonData.id }}
          <a-avatar v-for="type of pokemonData.types" :src="'/img/' + type + '.png'" />
        </template>
        <a-avatar :src="pokemonData.sprite" :size=50 />
        <a-typography-text strong>{{ formattedName }}</a-typography-text>
      </a-card>
    </NuxtLink>
  </div>
  
  
</template>
<script lang="ts">
export default {
  props: ['pokemonData', 'pokemonName'],
  computed: {
    formattedName() {
      return this.pokemonName.charAt(0).toUpperCase() + this.pokemonName.slice(1)
    },
    formattedHeight() {
      return this.pokemonData.height / 10 + ' m'
    },
    formattedWeight() {
      return this.pokemonData.weight / 10 + ' kg'
    },
    getTypeImgs() {
      var typeImgs = []

    }
  },
}
</script>

