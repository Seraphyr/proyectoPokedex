import styles from './styles.module.css'
import PokemonList from '../PokemonList'


export default function Home() {
    return (
        <div className={styles.home}>
            <header>
                <div className={styles.headerDiv}>
                    <div>
                    <img className={styles.pokeball} src="../public/images/pokeball.png" alt="pokeball logo" />
                    <span>Pokédex</span></div>

                    <button>#<img className={styles.arrow} src="../public/images/Arrow.svg" alt="" /></button>
                </div>

            </header>

            <div>
                <input className="searchBar" type="text" placeholder='Buscar' />
            </div>

            <PokemonList />
        </div>
    )
}