import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import titulo from "../componentes/image/pngaaa.com-362678.png"
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
//import { CreatePos } from "../conexciones/conecciones";
import { Contexto } from "../contexto/baseDeDatos";


function BarraNab() {
  const { funciones, constant } = useContext(Contexto)
  const navigat = useNavigate()
  const [redirecion, setRedirect] = useState(false);

  const ingreso = async () => {
    const url = 'http://localhost:3002/products';
    try {

      const response = await axios.get(url);

      if (response.status === 200) {
        setRedirect(true);
        console.log("get", response.status, redirecion);
        navigat("/login")
      }
    } catch (error) {
      console.error('Error:', error);
      navigat("/login")
    }
  };

  return (
    <div className='fonvar'>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home"><img className='titulo' onClick={(event) => {
            event.preventDefault();
            navigat("/")
          }} src={titulo} alt="tit" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={(event) => {
                event.preventDefault();
                ingreso();
              }}>login</Nav.Link>

              <Nav.Link style={{ display: constant.createPosStatus === 200 ? "hidden" : "none" }} onClick={(event) => {
                event.preventDefault();
                navigat("/carrito")
              }}>carrito</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  );
}

export default BarraNab;