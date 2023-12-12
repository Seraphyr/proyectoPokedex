import styles from './styles.module.css'
import PokemonList from '../PokemonList'

export default function Home() {
    return (
        <div className={styles.home}>

            <header className={styles.headerDiv}>

                <img className={styles.pokeball} src="../public/images/pokeball.png" alt="pokeball logo" />
                <span>Pokédex</span>
                <button><img className={styles.arrow} src="../public/images/Arrow.svg" alt="" /></button>
            </header>

            <div>
                <input className="searchBar" type="text" />
            </div>

            <PokemonList />
        </div>
    )
}