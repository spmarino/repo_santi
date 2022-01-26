import { useContext } from "react"
import { contexto } from "./CartContext"
import "./Cart.css"
import CartItem from "./CartItem"

function Cart() {

   const {carrito , precio_total} = useContext(contexto)
   const {limpiarCarrito} = useContext (contexto)
    

    if (carrito.length > 0){
        return (<div>
                    <h1>Carrito de compras</h1>
                {carrito.map((i) => <CartItem key={i.id} id={i.id} producto={i.producto} contador ={i.cantidad}/>)}
                <button onClick = {limpiarCarrito}>Vaciar Carrito</button>
                <p>{precio_total()}</p>
                   
                </div>)
    }else{
        return ( 
            <div className="cartContainer">
                 <h1>Carrito de compras</h1>
                    <h2>No hay productos en el carrito</h2>
            </div>
        )
    }

}

export default Cart
