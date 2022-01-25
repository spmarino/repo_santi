import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { db } from "../Firebase"
import {collection, getDoc, doc} from "firebase/firestore"


console.log(db)

function ItemDetailContainer() {

    const [product, setProduct] = useState ([])
    const [loading, setLoading] = useState (true)

    const {id} = useParams()


    useEffect(() => {

        const coleccionProductos = collection(db, "productos")
        const item = doc(coleccionProductos, id)
        const pedido = getDoc (item)

        pedido
            .then((resultado) => {
                          
                   
                    const producto = {
                        id: doc.id,
                        ...resultado.data()}
                    
               
                setProduct(producto)
                setLoading(false)
            })
            .catch ((error) => {
                console.log(error)
            })

    }, [id]);

    if(loading === true) {
        return (
            <>
                <h2>...Loading</h2>           
            </>
        );
    }
    if(loading === false){
        return (
            <>
               
                    <ItemDetail key={id} product={product} />
                
            </>
        )}

}

export default ItemDetailContainer
