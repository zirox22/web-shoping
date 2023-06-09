import React, { useContext, useState } from 'react'
import { Contexto } from '../contexto/baseDeDatos'
import Producto from './Modal'
import "../estilos/diseño.css"
import { Paginas } from './Paginas'



const Productos = () => {
  const { constant, setcons } = useContext(Contexto)

  const compra = () => {
    setShow(false)
  

    setcons.setComp([...constant.comp,
    {nombre:constant.nombre,
      hp:constant.hp,
      attack:constant.attack,
      defense:constant.defense,
      imagen:constant.imageSrc,
      tipo:constant.tipo,
      id:constant.id
    }])
    
    
  };

  const handleClose = () => {
    setShow(false)
        
  };
    const [show, setShow] = useState(false);

    //-----------------------------------------------------
    const handleShow = (event) => {

      setShow(true);

    };
    const infoPok = (event) => {
      
      const imgSrc = event.currentTarget.querySelector('img').getAttribute('src'); //imagen
      const spanElement = event.currentTarget.querySelector('p');
      const ipElement = event.currentTarget.querySelector('span');
      const texspam = ipElement.textContent
      setcons.setHP(constant.pokemones[texspam - constant.pokemones[0].id].statsHP)
      setcons.setAttack(constant.pokemones[texspam - constant.pokemones[0].id].atake)
      setcons.setDefense(constant.pokemones[texspam - constant.pokemones[0].id].defensa)
      setcons.setSpeed(constant.pokemones[texspam - constant.pokemones[0].id].velosidad)
      setcons.setNombre(spanElement.textContent); 
      setcons.setTipo(constant.pokemones[texspam - constant.pokemones[0].id].tipo)
      setcons.setId(texspam)

      setcons.setImageSrc(imgSrc);

      
      
      //console.log ("tex",texspam)
  } 
  //console.log ("com",constant.comp)
  
  return (
    <div className='fonvar'>

      {
        constant.pokemones.map(pokemon => {
          return (
            <div className='product' id={pokemon.tipo} key={pokemon.id}   onClick={infoPok} >
              <div className='num'>
                <span >{pokemon.id}</span>
              </div>

              <img className='pokeimg' onClick={handleShow}
                src={pokemon.img} alt={pokemon.name} />
                <div className='nombre'>
              <p className='nombres'>{pokemon.name}</p>
              </div>
            </div>
          )
        })
      }
      <Producto show={show} compra={compra} handleClose={handleClose} infoPok={constant.imageSrc}
       nomInf={constant.nombre} hp={constant.hp} atake={constant.attack} velosidad={constant.speed} defensa={constant.defense} />
      <Paginas/>
    </div>
  )
}

export default Productos
