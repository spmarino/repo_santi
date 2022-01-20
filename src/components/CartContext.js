import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const contexto = createContext();

const { Provider } = contexto;

const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [precio_total, setPrecio_total] = useState(0);
  const [cantidad_total, setCantidad_total] = useState(0);

  const agregarProducto = (product, contador) => {
    const index = carrito.findIndex((item) => item.product.id === product.id);

    if (index > -1) {
      toast.error(`Este Producto ya se encuentra en el carrito`);
    } else {

      setCarrito([...carrito, { product, contador }]);
  toast.success(`Se agrego el produto al Carrito`)
    }
  };

  const eliminarProducto = (id) => {
    const items = carrito.filter((producto) => producto.product.id !== id);

    setCarrito(items);
  };
  const limpiarCarrito = () => {
    setCarrito([]);
  };
  const isInCart = () => {};

  return (
    <Provider
      value={{
        carrito,
        precio_total,
        cantidad_total,
        agregarProducto,
        eliminarProducto,
        limpiarCarrito,
      }}
    >
      {children}
    </Provider>
  );
};

export default CartProvider;
