import { useState, useEffect } from 'react'
import PokeCell from '../PokeCell'
import styles from './styles.module.css'

const PokeList = ({ handleOnClick }) => {
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=12')
            const data = await response.json()
            setPokemon(data.results)
        }
    
        fetchData()
    }, [])
     
    return (
        <section className={styles.list}>
            {pokemon.map((p, id) => {
                return (
                    <PokeCell key={id} url={p.url} pokeClass={id} handleOnClick={handleOnClick} />
                )
            })}
        </section>
    )
}

export default PokeList