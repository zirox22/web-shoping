import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';



const urlDefaul = 'https://pokeapi.co/api/v2/pokemon?limit=22&offset=0';
const url = 'http://localhost:3002/products';

export const Contexto = createContext();



export const Datos = ({ children }) => {

  const navigate = useNavigate();
  const CreatePos = async () => {
    
    
    try {
      const body = {
          
      }
      const response = await axios.post(url, body);
  if (response.status === 200){
      setCreatePosStatus(response.status);      
      navigate('/');

      return response.status
      }
    } catch (error) {
      console.error(error)
    }
  };
  
  
//----------------------------------------------
  const [createPosStatus, setCreatePosStatus] = useState(null);
  const [next, setNext] = useState(urlDefaul);
  const [pokemones, setPokemones] = useState([]); //genera el objeto con los pokemons 
  const [imageSrc, setImageSrc] = useState('');
  const [hp, setHP] = useState('');
  const [nombre, setNombre] = useState()
  const [attack, setAttack] = useState()
  const [defense, setDefense] = useState()
  const [speed, setSpeed] = useState()
  const [comp, setComp] = useState([])
  const [tipo,setTipo] = useState()
  const [id,setId] = useState()
  //------------------------------------------

  const contextValue = {
    setcons: {
      setCreatePosStatus,
      setAttack,
      setComp,
      setDefense,
      setHP,
      setSpeed,
      setNombre,
      setImageSrc,
      setNext,
      setTipo,
      setId
    },
  
    constant: {
      createPosStatus,
      next,
      pokemones,
      imageSrc,
      hp,
      nombre,
      attack,
      defense,
      speed,
      comp,
      tipo,
      id
    },
    funciones:{
      CreatePos
    }
  }
  useEffect(() => {

    const getPokemones = async () => {

      //pokemons
      const response = await fetch(next);
      const lista = await response.json();
      const { results } = lista;

      const newPokemones = results.map(async (pokemon) => {
        const response = await fetch(pokemon.url)
        const poke = await response.json()

        return {
          tipo: poke.types[0].type.name,
          id: poke.id,
          name: poke.name,
          img: poke.sprites.other.home.front_default,
          statsHP: poke.stats[0].base_stat,
          atake: poke.stats[1].base_stat,
          defensa: poke.stats[2].base_stat,
          velosidad: poke.stats[5].base_stat
        }
      })
      setPokemones(await Promise.all(newPokemones))
    };
    getPokemones()

    

  }, [next]);

  //console.log ("pokemones",pokemones)
  return (
    <Contexto.Provider value={contextValue}>
      {children}
    </Contexto.Provider>
  )
}