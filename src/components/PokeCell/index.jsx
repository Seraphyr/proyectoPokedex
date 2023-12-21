import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { useNavigate } from 'react-router-dom'

const PokeCell = ({ url }) => {
    const navigate = useNavigate()
    const [pokemon, setPokemon] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url)
            const data = await response.json()
            setPokemon(data)
        }

        fetchData()
    }, [url]);
    
    
    return (pokemon && <button key = {pokemon.id} className={styles.cell} onClick={() => navigate(`/detalle/${pokemon.id}`)}>
        <img className={styles.img} src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name}></img>
        <h1 className={styles.pokeName}>{pokemon.name}</h1> <span className={styles.numero}> #{pokemon.id} </span>
    </button>)
}

export default PokeCell