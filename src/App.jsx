import { useState } from 'react'
import './App.css'
import ListadoPrincipal from './components/ListadoPrincipal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ListadoPrincipal />
      {/* <Detalle/> */}
    </>
  )
}

export default App
