import axios from 'axios';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import React, { useContext, useState } from 'react'
import "../estilos/diseño.css"
//import { Button } from 'react-bootstrap';
import { Contexto } from '../contexto/baseDeDatos';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const url = 'http://localhost:3002/products';

export const guetUser = async () => {
  

  try {

    const response = await axios.get(url);
    console.log(response.data);
    console.log('Código de estado get:', response.status);
  } catch (error) {
    console.error(error)
  }
};





export const Conecciones = () => {
  const navigate = useNavigate();
  const [texto, setTexto] = useState()
  const { funciones,constant} = useContext(Contexto)

  const handleClick = async () => {
    const responseStatus = await funciones.CreatePos();
  
    if (responseStatus === 200) {
      navigate('/');
    }
  };


  const handleTextChange = (e) => {
    setTexto(e.target.value);
    console.log(texto);
  }
  return (
    <div className='login'>
      <div className='formu'>
        <InputGroup className='conte' hasValidation>
          <InputGroup.Text >usuario</InputGroup.Text>
          <Form.Control onChange={handleTextChange} type="text" required isInvalid />
          <Form.Control.Feedback type="invalid">
            Please choose a username.
          </Form.Control.Feedback>
        </InputGroup>
        <div className='boton'>
          <Button   onClick={handleClick}>enviar</Button>
        </div>
      </div>

    </div>
  )
}