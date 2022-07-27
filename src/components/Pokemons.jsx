import axios from 'axios';
import React, { useEffect, useState } from 'react';

/* 4 Import */
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
/* Component */
import Pagination from './pagination/Pagination';
import PokemonItem from './PokemonItem';


const Pokemons = () => {
    /* https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20  */

    const colorType = {
        normal: ['#dcdcca', '#cbcbaf', '#bab995', '#a8a77a', '#9d9c69'],
        fire: ['#f8cdac', '#f5b482', '#f29b59', '#ee8130', '#ec7215 '],
        water: ['#c0d2f9', '#a0bbf6', '#81a5f3', '#6390f0', '#4378ec'],
        electric: ['#fcecaa', '#fae280', '#f9d856', '#f7d02c', '#f6c80f'],
        grass: ['#cae8b8', '#afdd94', '#94d270', '#7ac74c', '#6bbc3b'],
        ice: ['#d5f0ef', '#c0e8e6', '#abe1de', '#96d9d6', '#7bcfcb'],
        fighting: ['#eca6a4', '#e37976', '#da4d48', '#c22e28', '#af2924'],
        poison: ['#e0acdf', '#d083cf', '#c059be', '#a33ea1', '#923891'],
        ground: ['#f3e5c1', '#edd8a2', '#e7cb84', '#e2bf65', '#dcb349'],
        flying: ['#ddd3fa', '#ccbdf8', '#bca6f6', '#a98ff3', '#906df0'],
        psychic: ['#fdbace', '#fb98b6', '#fa759d', '#f95587', '#f8336e'],
        bug: ['#e5f096', '#d9e861', '#cce12c', '#a6b91a', '#94a518'],
        rock: ['#e6dcaa', '#d9ca80', '#ccb855', '#b6a136', '#a39031'],
        ghost: ['#c7bad8', '#ab98c4', '#8f76b0', '#735797', '#684f89'],
        dragon: ['#c5affe', '#a886fd', '#8b5efd', '#6f35fc', '#5818fb'],
        dark: ['#cdbbaf', '#b49987', '#997760', '#705746', '#664f40'],
        steel: ['#e2e2eb', '#d3d3e1', '#c5c5d7', '#b7b7ce', '#9f9fbe'],
        fairy: ['#efcede', '#e7b6ce', '#de9dbe', '#d685ad', '#ce6b9c']
    }

    /*  Navigate */
    const navigate = useNavigate()

    /* User Name */
    const userName = useSelector(state => state.userName)
    /*  setNumItem */
    const setNumItem = useSelector(state => state.setNumItem)

    /*  Load Pokemon  */
    /* Var Change pokemon */
    const [pokemons, setPokemons] = useState([])
    const [pokemonsType, setPokemonsType] = useState([])

    /* Number Total of Pokemoon and Type */
    const [totalItem, setTotalItem] = useState(0)
    const [selectType, setSelectType] = useState([])
    const [typeFilter, setTypeFilter] = useState("")

    /* Offset load pokemoon */
    const [offSet, setOffSet] = useState(0)
    const [pageActual, setPageActual] = useState(1)

    /* Search */
    const [search, setSearch] = useState("")

    /* Change Page - Pagination */

    /* Parametros  */
    const { page } = useParams()

    /* const btnSearch =(search)=>{
             alert(search)
     } */

    const changePage = (page) => {
        // alert(page)
        setOffSet(setNumItem * (page - 1))
        setPageActual(page)
        window.scrollTo(0, 0);
    }

    /* Select Type - Filter for type */
    const fomrSelectType = (data) => {
        //alert(data.target.value)
        if (data.target.value !== typeFilter) {
            setTypeFilter(data.target.value);
            setPageActual(1)
        }
    }

    /* Load  Total Number of Pokemon */
    useEffect(() => {
        /* Listado de Pokemont paginar  */

        /* Type filter for pokemont  */
        if (typeFilter == "") {
            axios.get(`https://pokeapi.co/api/v2/pokemon/`)
                .then(res => {
                    setTotalItem(res.data.count)
                    console.log('----  Pokemons 42 - setTotalItem  -----')
                    console.log(res.data)
                })
        } else {
            axios.get(`https://pokeapi.co/api/v2/type/${typeFilter}/`)
                .then(res => {
                    setTotalItem(res.data.pokemon.length)
                    console.log('----  Pokemons 62 - setTotalItem  -----')
                    console.log(res.data.pokemon.length)
                })

        }

        /* Listado de Pokemont Type for filter   */
        axios.get(`https://pokeapi.co/api/v2/type/
        `)
            .then(res => {
                setSelectType(res.data.results)
                console.log('----  Pokemons 50 - setTotalItem  -----')
                console.log(res.data.results)
            })

    }, [typeFilter])


    /* List Url Pokemont  */
    useEffect(() => {
        /* Listado de Pokemont paginar  */

        /* Selector for type */
        if (typeFilter == "") {

            axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offSet}&limit=${setNumItem}`) // ${ramdom}
                .then(res => {
                    setPokemons(res.data.results)
                    console.log('----  Pokemons 77 - setPokemons -----')
                    console.log(res.data.results)
                })
        } else {
            axios.get(`https://pokeapi.co/api/v2/type/${typeFilter}/`) // ${ramdom}
                .then(res => {
                    setPokemonsType(res.data.pokemon)
                    console.log('----  Pokemons 84 - TYPE setPokemons -----')
                    console.log(res.data.pokemon)
                })

        }

    }, [offSet, typeFilter])

    /* New array Pokemon Type data for paginate  */
    const newPokemonType = pokemonsType.slice((setNumItem * (pageActual - 1)), ((setNumItem * (pageActual - 1) + setNumItem)))

    document.body.style.backgroundColor = '#fff'
    console.log('----  Pokemons 112 -----')
    console.log(newPokemonType)

    return (
        <div>
            <>
                <Link to={`/setting`} >
                    <div className='div-setting'>
                        <p>Setting</p>
                        <div className='link_setting'>
                        </div>
                    </div>
                </Link>

                <h3 class="title pokedex">Welcome {userName.toUpperCase()} , here you can find your favorite pokemon</h3>
                <br />

                <input
                    type="text"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    className='input-form'
                    placeholder='Name Pokemon'
                />
                <button className='btn-form' onClick={() => navigate(`/pokemon/${search}`)}>Search</button>

                <br />
                <select name="type" id="type" onClick={fomrSelectType} className={'select-type'}>
                    <option value="">All pokemons</option>
                    {
                        selectType.map((typeData) => (

                            <option
                                value={typeData.name} key={typeData.name}
                                selected={typeData.name === typeFilter ? true : false}
                            >
                                {typeData.name[0].toUpperCase() + typeData.name.slice(1)}
                            </option>
                        ))
                    }
                </select>
                <br />

            </>
            <div className='pokemon-content '>

                {typeFilter == "" ?

                    pokemons.map((pokemon) => (
                        <PokemonItem pokemonUrl={pokemon.url} key={pokemon.url} />
                    ))
                    :

                    newPokemonType.map((pokemon) => (
                        <PokemonItem pokemonUrl={pokemon.pokemon?.url} key={pokemon.pokemon?.url} />
                    ))
                }

            </div>

            <div>
                <Pagination totalItem={totalItem} actualPage={pageActual} changePage={changePage} />
            </div>
        </div>



    );
};

export default Pokemons;