import { createContext, useState } from 'react'; 
import { toast } from 'react-toastify';


 export const contexto =createContext ()

const {Provider} = contexto

const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState ([])

    const agregarProducto = (product, contador) => {

        const index = carrito.findIndex((item) => item.product.id === product.id);

        if(index > -1){
            toast.error(`Este producto ya se encuentra en el carro`)
        }else{
        setCarrito([...carrito, {product, contador}])
        toast.success(`Se agrego el producto correctamente`)
    }}
    
    const eliminarProducto = (id) => {
        const items = carrito.filter ((product) => product.product.id !== id)
        setCarrito(items)
    }
    const limpiarCarrito = () => {
        setCarrito([])
    }

    const contador_carrito = () => {
        return carrito.reduce((acum, i) => acum + i.contador, 0);
      };
    
      const precio_total = () => {
        return carrito.reduce((acum, i) => acum + i.contador * i.product.precio, 0);
      };


    return (
        <Provider value = {{ 
            carrito,
            precio_total,
            agregarProducto,
            eliminarProducto,
            limpiarCarrito,
            precio_total,
            contador_carrito}}>
            {children}
        </Provider>
    )
    
}

export default CartProvider