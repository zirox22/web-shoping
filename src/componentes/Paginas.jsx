import { useContext } from "react"
import { Contexto } from "../contexto/baseDeDatos"
import { Button } from "react-bootstrap"


export const Paginas = ()  => {

    const { constant, setcons } = useContext(Contexto)

    const sig = async () => {
        const sigUrl = await fetch (constant.next)
        const cont = await sigUrl.json()
        setcons.setNext (cont.next );
        window.scrollTo(0, 0);
      }
    //------------------------------------------------
    
      const atr = async () => {
        const sigUrl = await fetch (constant.next)
        const cont = await sigUrl.json()
        setcons.setNext (cont.previous );
        window.scrollTo(0, 0);
      }
      return (
        <div>
            <Button variant="light" onClick={atr}>atras</Button>
            <Button variant="light" onClick={sig}>siguiente</Button>
        </div>
    )}