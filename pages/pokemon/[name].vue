<template>
  <a-layout-content style="padding: 0 50px">
    <div :style="{ margin: '20px 0px', background: '#fff', padding: '0px', minHeight: '280px' }">
      <a-row type="flex" align="center">
        <a-col>
          <img
            :src="pokemonData.image"
            :height="400"
          />
        </a-col>
        <a-col :span="6">
          <a-avatar :src="pokemonData.sprite" :size=200 />
          <a-card>
            <template #cover>
            </template>
            <template #actions>
              #{{ pokemonData.id }}
              <a-avatar v-for="pokeType in pokemonData.types" :src="'/img/' + pokeType + '.png'" />
            </template>
            <a-typography-title :level="4">{{ formattedName }}</a-typography-title>
            <br>
            Height: {{ formattedHeight }}
            <br>
            Weight:
            {{ formattedWeight }}
          </a-card>
        </a-col>
      </a-row>
      <div :style="{padding: '20px'}">
        <a-divider orientation="left">
          <a-typography-title :level="4">Move List</a-typography-title>
        </a-divider>
        <a-list
          :grid="{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 6, xxxl: 6 }"
          :data-source="formattedMoves"
        >
          <template #renderItem="{ item }">
            <a-list-item>
              <a-card :title="item.title">{{ item }}</a-card>
            </a-list-item>
          </template>
        </a-list>
      </div>
    </div>
    
  </a-layout-content>
</template>
<script>
import { usePokemonsStore } from '../../store/pokemon'
export default {
  setup() {
    const store = usePokemonsStore()
    const route = useRoute()
    const pokemonName = route.params.name
    const allPokemonData = store.pokemonData
    return { pokemonName, allPokemonData }
  },
  beforeCreate() {
    this.pokemonData = this.allPokemonData[this.pokemonName]
  },
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
    formattedMoves() {
      const formattedMoves = this.pokemonData.moves.map(move => {
        let words = move.split('-')
        for (let i = 0; i < words.length; i++) {
          words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
        }
        return words.join(" ")
      })
      return formattedMoves
    }
  },
}
</script>

<style>
.site-layout-content {
  min-height: 280px;
  padding: 24px;
  background: #fff;
}
#components-layout-demo-top .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}
.ant-row-rtl #components-layout-demo-top .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

[data-theme='dark'] .site-layout-content {
  background: #141414;
}
</style>

