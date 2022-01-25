import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Item from './Item'
import "./ItemList.css"
import { db } from "../Firebase"
import {collection, getDocs, query, where} from "firebase/firestore"



function ItemList() {


const [productos , setProductos] = useState ([
 
])
const [loading, setLoading] = useState ([true])

const {id} = useParams()

useEffect(() => {
   const coleccionProductos = collection(db, "productos")
   

   const coleccionProds =
   (id === "buzos") ? query(coleccionProductos, where("gender", "==", id))
 : (id === "gorras") ? query(coleccionProductos, where("gender", "==", id))
 : coleccionProductos ;

   const pedido = getDocs(coleccionProds)
       pedido.then((resultado) => {
           const docs = resultado.docs
          const docs_formateado = docs.map(doc=>{
               const producto = {
                   id: doc.id,
                   ...doc.data()
               }
               return producto
           })
           setProductos(docs_formateado)
           setLoading(false)
       })
       .catch ((error) => {
           console.log(error)
       })
}, [id])

        return (
            <div className='itemList'>
                {loading ? (<div> Cargando Productos...</div>) : (productos.map((producto) => <Item key={producto.id} producto ={producto}/>))}
            </div>
        )
}

export default ItemList
