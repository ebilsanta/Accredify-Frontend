import { usePokemonsStore } from '../store/pokemon'
const useStore = () => {
  const store = usePokemonsStore()
  store.getPokemonData()
}

export default useStore