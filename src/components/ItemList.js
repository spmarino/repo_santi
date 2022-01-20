import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Item from './Item'
import "./ItemList.css"



function ItemList() {
    const {id} = useParams()

    const productList =[
        {id : 1 , nombre : "Ciervo" , stock : '3' , precio: "$1500" , foto: "/img/ciervo.jpg", category: "gorras"},
        {id : 2 , nombre : "Tigre" , stock : "3" , precio: "$1500" , foto: "/img/tigre.jpg", category: "gorras" },
        {id : 3 , nombre : "Gallo" , stock : "3" , precio: "$1500", foto: "/img/gallo.jpg", category: "gorras"},
        {id : 4 , nombre : "Elefante" , stock : "3" , precio: "$1500" , foto: "/img/elefante.jpg", category: "buzos"},
        {id : 5 , nombre : "Pitbull" , stock : '3' , precio: "$1500" ,foto: "/img/pitbull.jpg", category: "buzos"},
    ]

const [productos , setProductos] = useState ([
 
])
const [loading, setLoading] = useState ([true])

useEffect(() => {
   const promesa = new Promise ((res, rej) =>{
    setTimeout(()=>{
        res(productList)
        setLoading(false)
    },2000)

   })
   promesa.then((productos) =>{
       console.log(productos)
       setProductos(!id? productos : (productos.filter((product) => {return product.category === id})))
   })
}, [id])

        return (
            <div className='itemList'>
                {loading ? (<div> Cargando Productos...</div>) : (productos.map((producto) => <Item key={producto.id} producto ={producto}/>))}
            </div>
        )
}

export default ItemList
