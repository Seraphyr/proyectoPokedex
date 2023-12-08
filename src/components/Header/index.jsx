import './styles.css'

export default function Header() {
    return (
        <header>
            <img src="../public/images/pokeball.png" alt="pokeball logo" />
            <h1>Pokedex</h1> 
            <input className="searchBar" type="text" />
            <button><img src="../public/images/Arrow.svg" alt="" /></button>
        </header>
    )
}