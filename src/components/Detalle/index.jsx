import styles from './styles.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Detalle(props) {
    const [pokemon, setPokemon] = useState(null)
    const navigate = useNavigate()
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            const data = await response.json()
            setPokemon(data)
        }
        fetchData()
    }, [id])


    return (
        pokemon && <>
            <div className={styles.card}>
                <h1>{pokemon.name}</h1>
                
                <label >Weight: {pokemon.weight}g</label>
                <label >Height: {pokemon.height}m</label>
                <label >Moves: {pokemon.abilities[0].ability.name}</label>
                {pokemon.id==1 ? '' : <button onClick={() => navigate ( `/detalle/${pokemon.id-1}`)}>Anterior</button>}
                <button onClick={() => navigate ( `/detalle/${pokemon.id+1}`)}>Siguiente</button>
                
            </div>
        </>
    )
}



