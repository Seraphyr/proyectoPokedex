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


    return (
        pokemon && <>
            <div className={typeStyles[types]}>

                <div className={styles.cardImg}>
                    <img src="../public/images/pokeball.png" alt="" />
                </div>
                <div className={styles.header}>
                    <Link to="/"><img src="../images/arrow-left.svg" alt="arrow left" /></Link>
                    <h1>{pokemon.name}</h1>
                    # <span className={styles.numero}>{pokemon.id} </span>
                </div>
                <div className={styles.pokemonImg} >
                    <img className={styles.img} src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name}></img>
                    {pokemon.id == 1 ? '' : <button className={styles.button} onClick={() => navigate(`/detalle/${pokemon.id - 1}`)}><img src="../public/images/chevron_left.svg" alt="" /></button>}
                    <button className={styles.button} onClick={() => navigate(`/detalle/${pokemon.id + 1}`)}><img src="../public/images/chevron_right.svg" alt="" /></button>
                </div>

                <div className={styles.cardDetails}>
                    <div className={(typeStyles[types])}>

                        {pokemon.types.map((t, i) => <span key={i}>{t.type.name}</span>)}

                    </div>
                    <h1 /* className={typeStyles[types]} */>About</h1>
                    <div className={styles.info}>
                        
                        <label ><img src="../public/images/weight.svg" alt="weight" /> {pokemon.weight}g <br />Weight: </label>
                        <label ><img src="../public/images/height.svg" alt="height" /> {pokemon.height}m <br />Height: </label>
                        <label className={styles.abilities}>{pokemon.abilities.map((a, i) => <li key={i}>{a.ability.name}</li>)} Abilities: </label>


                    </div>
                    <span> <Text id={id} /></span>
                    <span >{pokemon.stats.map((s, i) => <li key={i} >{s.stat.name}: {s.base_stat} <progress value={s.base_stat} max={252} /></li>)}</span>
                </div>

            </div>

        </>
    )
}



