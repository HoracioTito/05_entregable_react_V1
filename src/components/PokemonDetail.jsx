

import React, { useEffect, useState } from 'react';
/* Axios */
import axios from 'axios';
/* Import parametro  */
import { useParams } from 'react-router-dom';
/* Import Navigate */
import { useNavigate } from 'react-router-dom';


const PokemonDetail = () => {

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


    /* Parametros  */
    const { id } = useParams()

    /* Navigate  */
    const navigateBack = useNavigate()

    //alert({ id })
    /* Var APP */
    const [detail, setDetail] = useState([])

    useEffect(() => {

        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => {
                setDetail({
                    id: res.data.id,
                    name: res.data.name,
                    weight: res.data.weight,
                    height : res.data.height,
                    arrAbilities: res.data.abilities,
                    arrMoves: res.data.moves,
                    imageBig: res.data.sprites.other.dream_world.front_default,
                    imageGif: res.data.sprites.versions["generation-v"]["black-white"].animated.front_default,
                    arrTypes: res.data.types,
                    hp: res.data.stats[0].base_stat,
                    attack: res.data.stats[1].base_stat,
                    defense: res.data.stats[2].base_stat,
                    speed: res.data.stats[5].base_stat
                })

                console.log(res.data)
            })


    }, [id])
    const typeName = detail?.arrTypes !== undefined ? detail?.arrTypes[0].type.name : "normal"

    const colorBg = colorType[typeName][0]
    // const colorBgCard = colorType[typeName][1]
    const colorBgCard = '#fff'
    const colorImg = colorType[typeName][2]
    const colorBgText = colorType[typeName][3]
    const colorBgTitle = colorType[typeName][4]


    console.log('----  PokemonDetail 27 -----')
    console.log(detail)

    document.body.style.backgroundColor = colorBg

    return (
        <div className='content'>
            <>

                <div><button className='button_back' onClick={() => navigateBack(-1)}></button></div>
                
                

                <div className='pokemon-content'>
                    <img className='img-pokemon' src={detail.imageBig} alt="" />
                    <div className='img-pokemon-info'> 
                        <h4>Heigth : {detail.height}</h4>
                        <h2>Detail {detail.id}</h2>
                        <h4>Weigth : {detail.weight}</h4>
                    </div>
                    <div className='pokemon-name' ><h1>{detail.name}</h1></div>
                    
                </div>

              <br/>

                <div className='order-article'>
                    <div className='width-75'>
                        <div className='type-abilities'>
                            <div className='card-detail' style={{ backgroundColor: `${colorBgCard}` }} >
                                <div className='title-detail' style={{ backgroundColor: `${colorBgTitle}` }}  >Type</div>
                                {
                                    detail.arrTypes?.map((type) => (
                                        <p>{type.type.name}</p>
                                    ))
                                }
                            </div>
                            <div className='card-detail' style={{ backgroundColor: `${colorBgCard}` }} >
                                <div className='title-detail' style={{ backgroundColor: `${colorBgTitle}` }}  >Abilities</div>
                                {
                                    detail.arrAbilities?.map((abilitie) => (

                                        <p>{abilitie.ability.name}</p>

                                    ))

                                }

                            </div>
                        </div>

                        <div className='card-stats' style={{ backgroundColor: `${colorBgCard}` }}  >
                            <div className='title-detail' style={{ backgroundColor: `${colorBgTitle}` }} >Stats</div>
                            <p className='car-text' style={{ backgroundColor: `${colorBgText}` }} >hp : {detail.hp}</p>
                            
                            <div className='bar-progress'>
                                <div  className='hp-stat' style={{ width: `${100*(detail.hp/150)}%` }}>{detail.hp} / 150</div>
                            </div>
                            <p className='car-text' style={{ backgroundColor: `${colorBgText}` }} >attack : {detail.attack}</p>
                            <div className='bar-progress'>
                                <div  className='attack-stat' style={{ width: `${100*(detail.attack/150)}%` }}>{detail.attack} / 150</div>
                            </div>
                            <p className='car-text' style={{ backgroundColor: `${colorBgText}` }} >defense : {detail.defense}</p>
                            <div className='bar-progress'>
                                <div className='defense-stat' style={{ width: `${100*(detail.defense/150)}%` }}>{detail.defense} / 150</div>
                            </div>
                            <p className='car-text' style={{ backgroundColor: `${colorBgText}` }} >speed : {detail.speed}</p>
                            <div className='bar-progress'>
                                <div className='speed-stat' style={{ width: `${100*(detail.speed/150)}%` }}>{detail.speed} / 150</div>
                            </div>
                            <div><img src={detail.imageGif} alt="" /></div>

                        </div>
                    </div>
                    <div  className='width-25'>

                        <div className='card-Movies' style={{ backgroundColor: `${colorBgCard}` }}  >
                            <div className='title-detail' style={{ backgroundColor: `${colorBgTitle}` }} >Movies</div>
                            {
                                detail.arrMoves?.map((move) => (

                                    <p>{move.move.name}</p>

                                ))

                            }

                        </div>

                    </div>
                </div>
            </>
        </div>
    );
};

export default PokemonDetail;