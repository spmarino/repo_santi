import React, { useContext } from 'react'
import { contexto } from './CartContext'


function CartItem({producto, cantidad, id}) {

    const {eliminarProducto} = useContext(contexto)
    const {nombre, precio, foto} = producto;

    return (
        <div>
            <h4>{nombre}</h4>
            <img src={foto}  style={{width:'65px' , height:'65px'}}/>
            <button onClick={() => eliminarProducto(id)}>Eliminar</button>
            <p>Cantidad: {cantidad}</p>
                    
        </div>
    )
}

export default CartItem
