import axios from 'axios';

import React, { useEffect, useState } from 'react';

/* Import navigate */
import { useNavigate } from "react-router-dom";


const PokemonItem = ({ pokemonUrl }) => {
    
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
    const navigate = useNavigate();

    /*  Variable ini array contendor objeto */
    const [pokemonInfo, setPokemonInfo] = useState([])

    useEffect(() => {
        axios.get(pokemonUrl)
            .then(res => {
                setPokemonInfo({
                    id: res.data.id,
                    name: res.data.name,
                    weigth: res.data.weigth,
                    abilities: res.data.abilities.length,
                    imageBig: res.data.sprites.other.home.front_default, //https://cdn.traction.one/pokedex/pokemon/149.png
                    imageGif: res.data.sprites.versions["generation-v"]["black-white"].animated.front_default,
                    arrTypes: res.data.types,
                    hp: res.data.stats[0].base_stat,
                    attack: res.data.stats[1].base_stat,
                    defense: res.data.stats[2].base_stat,
                    speed: res.data.stats[5].base_stat
                })
            })

    }, [pokemonUrl])

    /*  Color */
    // test console.log(pokemonInfo?.arrTypes !== undefined ? pokemonInfo?.arrTypes[0].type.name : "normal"  )
   const typeName = pokemonInfo?.arrTypes !== undefined ? pokemonInfo?.arrTypes[0].type.name : "normal" 

   const colorBg = colorType [typeName][0]
   const colorBgCard = colorType [typeName][1]
   const colorImg = colorType [typeName][2]
   const colorBgText = colorType [typeName][3]
   const colorBgTitle = colorType [typeName][4]


   console.log(colorBgCard)
    console.log('----  PokemonItem 23 -----')
    // console.log(character)
    console.log(pokemonInfo)
    
   // ${pokemonInfo.arrTypes[0].type.name}`style={{ backgroundColor: {color_1}  }}

    return (
        <div>

            <div onClick={() => navigate(`/pokemon/${pokemonInfo.id}`)}
                key={pokemonInfo.id}
                className='card' style={{ backgroundColor: `${colorBgCard}` }} >

                <h3  style={{ backgroundColor: `${colorBgTitle}` }} >{pokemonInfo.name} --- {pokemonInfo.id}</h3>
                <div><img src={pokemonInfo.imageBig} alt="" className='img-little' /> </div>
                <p  className='car-text' style={{ backgroundColor: `${colorBgText}` }} >Abilities : {pokemonInfo.abilities}</p>
                <p  className='car-text' style={{ backgroundColor: `${colorBgText}` }} >hp : {pokemonInfo.hp}</p>
                <p  className='car-text' style={{ backgroundColor: `${colorBgText}` }} >attack : {pokemonInfo.attack}</p>
                <p  className='car-text' style={{ backgroundColor: `${colorBgText}` }} >defense : {pokemonInfo.defense}</p>
                <p  className='car-text' style={{ backgroundColor: `${colorBgText}` }} >speed : {pokemonInfo.speed}</p>
                <div><img src={pokemonInfo.imageGif} alt="" /> </div>

            </div>
        </div>
    );
};

export default PokemonItem;