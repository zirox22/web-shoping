import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
//import "../components/estilos/diseño.css";


const Producto = ({compra, show,handleClose,infoPok,nomInf,hp,atake, velosidad, defensa}) => {

  return (
    <>
      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{nomInf}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <img src={infoPok} alt="Imagen"/>
          </div>
          <div className='stats'>
            <p>estadisticas</p>
            <div className='data'>puntos de vida iniciales: {hp}</div> 
            <div className='data'>atake: {atake} </div>
            <div className='data'>defensa: {defensa}</div>
            <div className='data'>velosidad: {velosidad}</div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={compra}>
            compra
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Producto
