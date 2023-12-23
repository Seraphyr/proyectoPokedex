import styles from './styles.module.css'
import PokemonList from '../PokemonList'
import { useState } from 'react'
import ImgPokeball from '/public/images/pokeball.png'

export default function Home() {
    const [filter, setFilter] = useState('#');
    /* const [idFilter, setidFilter] = useState(false); */
    /* const [order, setOrder] = useState('asc'); */
    const [search, setSearch] = useState('');

    const changeFilter = () => {
        if (filter === '#') {
            setFilter('A');
        } else if (filter === 'A') {
            setFilter('#');
        }
      };

    
    return (
        <div className={styles.home}>
            <header>
                <div className={styles.headerDiv}>
                    <div>
                        <img className={styles.pokeball} src={ImgPokeball} alt="pokeball logo" />
                        <span>Pokédex</span>
                    </div>

                    <button onClick={changeFilter} >{filter}</button>
                </div>

            </header>

            <div>
                <input className="searchBar" type="text" placeholder='Buscar' value={search}
                    onChange={(e) => setSearch(e.target.value)} />
            </div>

            <PokemonList search={search} filter={filter} /* order={order} *//>
        </div>
    )
}