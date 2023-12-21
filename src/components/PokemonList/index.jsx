import { useState, useEffect, useMemo } from 'react'
import PokeCell from '../PokeCell'
import styles from './styles.module.css'

const PokemonList = ({ search, filter /* , order  */}) => {
    const [pokemon, setPokemon] = useState([]);
    const [filteredPokemon, setFilteredPokemon] = useState([]);
    

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=12')
            const data = await response.json()
            setPokemon(data.results.map((p) => {
                return {
                    id: parseInt(p.url.split('/')[6]), //p.url.split('/')[6],
                    name: p.name,
                    url: p.url
                }
            }));
            setFilteredPokemon(data.results);
        }
    
        fetchData()
    }, []);
     
    useEffect(() => {
     setFilteredPokemon (pokemon.filter((p) =>{
      return p.name.toLowerCase().includes(search.toLowerCase())
    } ));
    }, [search])

    useEffect(() => {
        if (filter === 'A') {
          setFilteredPokemon(pokemon.sort((a, b) => (a.name > b.name ? 1 : -1)));
          console.log('alfabetico');
        }
        if (filter === '#') {
          setFilteredPokemon(pokemon.sort((a, b) => (a.id > b.id ? 1 : -1)));
          console.log('numerico');
        }
    }, [filter]);

    /* const filteredAndSortedPokemon = useMemo(() => {
        const filteredPokemon = pokemon.filter((p) => {
            return true;
        });
        if (order === 'asc') {
          return filteredPokemon.sort((a, b) => (a.name > b.name ? 1 : -1));
        }
        if (order === 'desc') {
          return filteredPokemon.sort((a, b) => (order === 'asc' ? a.id - b.id : b.id - a.id));
        }
        
        return filteredPokemon;
     }, [pokemon, search, order]); */


      
    return (
        <section className={styles.list}>
            {filteredPokemon.map((p) => {
                return (
                    <PokeCell key={p.id} url={p.url} />
                )
            })}
        </section>
    )
}

export default PokemonList