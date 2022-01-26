import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import {contexto} from "./CartContext"
import { toast } from 'react-toastify'

function ItemDetail({product, id}) {
    
    const [mostrarBotonCompra, setMostrarBotonCompra] = useState(false)
    const [cantidad, setCantidad] = useState(0)
    const {nombre , precio , foto,  stock , initial} = product
    const {agregarProducto} = useContext (contexto)
   
const item = {
    producto: product,
    id: id,
    cantidad: +cantidad
}

    const onAdd = (contador) =>{

    setCantidad(contador)
        //setMostrarBotonCompra (true);
    }

    return (
        <div className='itemDetailContainer'>
            <p>{nombre}</p>
            <p>Precio: ${precio}</p>
            <img src={foto}/>
            <div>
                {
                    mostrarBotonCompra
                    ?
                    <div>
                        <div>
                     
                        </div>
                    <Link to= "/cart" > <button>Finalizar Compra</button></Link>
                    </div>
                    :
                    <div><ItemCount  onAdd={onAdd} stock = {stock} initial={1}/></div>

                }
                <button onClick={() => agregarProducto(item)}>Agregar al Carrito</button>
                {console.log(cantidad)}
            </div>
            
        </div>
    )
    
    

} 

export default ItemDetail
