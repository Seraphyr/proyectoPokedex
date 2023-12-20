import { useState, useEffect, useMemo } from 'react'
import PokeCell from '../PokeCell'
import styles from './styles.module.css'

const PokemonList = ({ search, order }) => {
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
      return p.name.toLowerCase().includes(search.toLowerCase())
    } ));
    }, [search])


    const filteredAndSortedPokemon = useMemo(() => {
        const filteredPokemon = pokemon.filter((p) => {
            return true;
        });
        if (order === 'asc') {
          return filteredPokemon.sort((a, b) => (a.name > b.name ? 1 : -1));
        }
        if (order === 'desc') {
          return filteredPokemon.sort((a, b) => (a.name < b.name ? 1 : -1));
        }
        return filteredPokemon;
     }, [pokemon, search, order]);


      
    return (
        <section className={styles.list}>
            {filteredAndSortedPokemon.map((p) => {
                return (
                    <PokeCell key={p.id} url={p.url} />
                )
            })}
        </section>
    )
}

export default PokemonList