import React, { useContext } from 'react'
import { Contexto } from '../contexto/baseDeDatos'
import "../estilos/diseño.css"

const Carrito = () => {

    const { constant  } = useContext(Contexto)

  return (
    <div>
      {
        constant.comp.map(pokemon => {
          return (
            <div className='product' id={pokemon.tipo} key={pokemon.id}>
              <div className='num'>
                <span >{pokemon.id}</span>
              </div>

              <img className='pokeimg' 
                src={pokemon.imagen} alt={pokemon.name} />
              <p className='nombres'>{pokemon.nombre}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Carrito
