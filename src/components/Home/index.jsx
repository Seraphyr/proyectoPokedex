import styles from './styles.module.css'
import PokemonList from '../PokemonList'
import { useState } from 'react'


export default function Home() {
    const [filter, setFilter] = useState('A');
    const [idFilter, setidFilter] = useState(false);
    const [order, setOrder] = useState('asc');
    const [search, setSearch] = useState('');

    const changeFilter = () => {
        if (filter === 'A' && order === 'asc') {
          setFilter('#');
          setOrder('asc');
        } else if (filter === '#' && order === 'asc') {
          setFilter('A');
          setOrder('desc');
        } else if (filter === 'A' && order === 'desc') {
          setFilter('#');
          setOrder('desc');
        } else if (filter === '#' && order === 'desc') {
          setFilter('A');
          setOrder('asc');
        }
      };

    
    return (
        <div className={styles.home}>
            <header>
                <div className={styles.headerDiv}>
                    <div>
                        <img className={styles.pokeball} src="../public/images/pokeball.png" alt="pokeball logo" />
                        <span>Pokédex</span>
                    </div>

                    <button onClick={changeFilter} >{filter}</button>
                </div>

            </header>

            <div>
                <input className="searchBar" type="text" placeholder='Buscar' value={search}
                    onChange={(e) => setSearch(e.target.value)} />
            </div>

            <PokemonList search={search} filter={filter} order={order}/>
        </div>
    )
}