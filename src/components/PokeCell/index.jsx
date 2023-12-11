import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'

const PokeCell = ({ url }) => {
    const [pokemon, setPokemon] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url)
            const data = await response.json()
            setPokemon(data)
        }
    
        fetchData()
    }, [])
    console.log(pokemon);
    return (pokemon && <button className={styles.cell}>
        <img src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name}></img>
        <h1 className={styles.pokeName}>{pokemon.name}</h1>
    </button>)
}

export default PokeCell