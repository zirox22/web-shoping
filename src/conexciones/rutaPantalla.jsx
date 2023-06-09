import React, { useContext } from 'react'
import Productos from '../componentes/Productos'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
//import Carrito from '../componentes/Carrito'
import BarraNab from '../componentes/NavBar';
import { Contexto } from '../contexto/baseDeDatos';
import Carrito from '../componentes/Carrito';
import Error from '../componentes/error';



const RutaPantalla = () => {

    const { constant } = useContext(Contexto)
    console.log(constant.createPosStatus)

    const Protect = () => {
        if (constant.createPosStatus !== 200) {
            return <Navigate to={"/error"} replace />
        }
        return <Outlet />
    }
    return (
        <div>
            <div>
                <BarraNab />
            </div>

            <Routes>

                <Route path="/error" element={<Error />}/>
                <Route path="/" element={<Productos />}/>
                <Route element={<Protect /> }  >
                    <Route path="carrito" element={<Carrito />}/>
                </Route>

            </Routes>

        </div>
    )
}

export default RutaPantalla
