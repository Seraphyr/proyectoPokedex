import { useState, useEffect } from 'react'
import PokeCell from '../PokeCell'
import styles from './styles.module.css'

const PokemonList = ({ search }) => {
    const [pokemon, setPokemon] = useState([]);
    const [filteredPokemon, setFilteredPokemon] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=12')
            const data = await response.json()
            setPokemon(data.results);
            setFilteredPokemon(data.results);
        }
    
        fetchData()
    }, [])
     
    useEffect(() => {
     setFilteredPokemon (pokemon.filter((p) =>{
      console.log(p.name.toLowerCase(), (search.toLowerCase()), p.name.toLowerCase().includes(search.toLowerCase()));
      return p.name.toLowerCase().includes(search.toLowerCase())
    } ));
    }, [search])

    return (
        <section className={styles.list}>
            {filteredPokemon.map((p) => {
                console.log(p);
                return (
                    <PokeCell key={p.id} url={p.url} />
                )
            })}
        </section>
    )
}

export default PokemonList