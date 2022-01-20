import { Link } from 'react-router-dom'
import React from 'react'
import "./Item.css"

function Item({producto}) {
    const {nombre, precio, foto, id} = producto  

    return (
        <div className='itemContainer'>
           <p className='itemWord'>Nombre: {nombre} </p> 
           <p className='itemWord'>Precio: {precio} </p> 
           <img src={foto} className='fotoProducto'/>
          <Link to={`/product/${id}`}> <button> Ver Mas </button> </Link> 
        </div>
    )
}

export default Item
