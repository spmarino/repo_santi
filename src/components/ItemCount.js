import { useState } from "react"
import "./ItemCount.css"

const ItemCount = ({stock , initial, onAdd }) => {

    const [contador, setContador] = useState(1)

    const aumentarContador = () => {
       if(contador < stock) setContador(contador + 1)
    }
    const disminuirContador = () => {
       if(contador > initial) setContador (contador - 1)
    }
    const agregarCount = () =>{
        onAdd(contador)
    }
    return (
        <div className="itemCount--Container">
            <div className="contadorContainer">
                <p>Cantidad: {contador} </p>
                <div className="button">
                    <button onClick={disminuirContador}>-</button>
                    <button onClick={aumentarContador}>+</button>
                </div>
                <button onClick={agregarCount}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount

