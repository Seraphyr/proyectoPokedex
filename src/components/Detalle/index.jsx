import styles from './styles.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Text from '../Text'

export default function Detalle(props) {
    const [pokemon, setPokemon] = useState(null)
    const [types, setTypes] = useState(styles.type)
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



    useEffect(() => {
        if (pokemon) {
            setTypes(pokemon.types[0].type.name)
        }
    }, [pokemon])

    const typeStyles = {
        normal: styles.normal,
        fire: styles.fire,
        water: styles.water,
        electric: styles.electric,
        grass: styles.grass,
        ice: styles.ice,
        fighting: styles.fighting,
        poison: styles.poison,
        ground: styles.ground,
        flying: styles.flying,
        psychic: styles.psychic,
        bug: styles.bug,
        rock: styles.rock,
        ghost: styles.ghost,
        dragon: styles.dragon,
        dark: styles.dark,
        steel: styles.steel,
        fairy: styles.fairy
    }

    const typeStylesText = {
        normal: styles.normalText,
        fire: styles.fireText,
        water: styles.waterText,
        electric: styles.electricText,
        grass: styles.grassText,
        ice: styles.iceText,
        fighting: styles.fightingText,
        poison: styles.poisonText,
        ground: styles.groundText,
        flying: styles.flyingText,
        psychic: styles.psychicText,
        bug: styles.bugText,
        rock: styles.rockText,
        ghost: styles.ghostText,
        dragon: styles.dragonText,
        dark: styles.darkText,
        steel: styles.steelText,
        fairy: styles.fairyText
    }

    return (
        pokemon && <>
            <div className={typeStyles[types]}>

                <div className={styles.cardImg}>
                    <img className={styles.invert} src="../public/images/pokeball.png" alt="" />
                </div>
                <div className={styles.header}>
                    <Link to="/"><img className={styles.invert} src="../images/arrow-left.svg" alt="arrow left" /></Link>
                    <h1>{pokemon.name}</h1>
                    # <span className={styles.numero}>{pokemon.id} </span>
                </div>
                <div className={styles.pokemonImg} >
                    <img className={styles.img} src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name}></img>
                    {pokemon.id == 1 ? '' : <button className={styles.button} onClick={() => navigate(`/detalle/${pokemon.id - 1}`)}><img src="../public/images/chevron_left.svg" alt="" /></button>}
                    <button className={styles.button} onClick={() => navigate(`/detalle/${pokemon.id + 1}`)}><img src="../public/images/chevron_right.svg" alt="" /></button>
                </div>

                <div className={styles.cardDetails}>
                    <div className={typeStylesText[types]}>

                        {pokemon.types.map((t, i) => <span className={`${typeStyles[t.type.name]} ${styles.badge}`} key={i}>{t.type.name}</span>)}

                    </div>
                    <h1 className={typeStylesText[types]} >About</h1>
                    <div className={styles.info}>

                        <label ><img src="../public/images/weight.svg" alt="weight" /> {pokemon.weight}g <br />Weight: </label>
                        <label ><img src="../public/images/height.svg" alt="height" /> {pokemon.height}m <br />Height: </label>
                        <label className={styles.abilities}>{pokemon.abilities.map((a, i) => <li key={i}>{a.ability.name}</li>)} Abilities: </label>


                    </div>
                    <div> <Text id={id} /></div>
                    <div className={styles.stats}>
                        <div className={typeStylesText[types]} >{pokemon.stats.map((s, i) => <li key={i} >{s.stat.name}: {s.base_stat} <progress value={s.base_stat} max={252} /></li>)}</div>
                          {/* <input type="range" min={0} max={255} value={pokemon.stats[0].base_stat}/>  */}
                    </div>
                </div>

            </div>

        </>
    )
}



