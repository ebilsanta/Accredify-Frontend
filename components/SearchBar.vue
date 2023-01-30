<template>
  <a-auto-complete
    :value="value"
    :options="options"
    style="width: 200px; margin: 16px 20px;"
    placeholder="Search here"
    :filter-option="filterOption"
    @select="moveToPage"
  />
</template>
<script>
import { defineComponent, ref } from 'vue';
import { usePokemonsStore } from '../store/pokemon';
export default defineComponent({
  setup() {
    const store = usePokemonsStore()
    const router = useRouter()
    const pokemonNames = store.pokemonNames
    const filterOption = (input, option) => {
      return option.value.toUpperCase().indexOf(input.toUpperCase()) >= 0;
    };
    return {
      value: ref(''),
      filterOption,
      pokemonNames,
      router
    };
  },
  computed: {
    options() {
      let options = []
      this.pokemonNames.forEach(name => options.push({value: name}))
      return options
    }
  },
  methods: {
    moveToPage(pokemonName, option){
      this.router.push(`/pokemon/${pokemonName.toLowerCase()}`)
    } 
  }
});
</script>