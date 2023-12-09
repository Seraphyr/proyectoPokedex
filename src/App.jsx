import { useState } from 'react'
import './App.css'
import PokemonList from './components/PokemonList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PokemonList />
      {/* <Detalle/> */}
    </>
  )
}

export default App
