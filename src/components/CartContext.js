import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const contexto = createContext();

const { Provider } = contexto;

const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarProducto = (item) => {
    const { id } = item;

    const index = carrito.findIndex((item) => item.id === id);

    if (index > -1) {
      toast.error(`Este producto ya se encuentra en el carro`);
    } else {
      setCarrito([...carrito, item]);

      toast.success(`Se agrego el producto correctamente`);
    }
  };

  const eliminarProducto = (id) => {
    const items = carrito.filter((product) => product.id !== id);

    setCarrito(items);
  };

  const limpiarCarrito = () => {
    setCarrito([]);
  };

  const precio_total = () => {
    return carrito.reduce(
      (acum, i) => acum + i.cantidad * i.producto.precio,
      0
    );
  };

  return (
    <Provider
      value={{
        carrito,
        precio_total,
        agregarProducto,
        eliminarProducto,
        limpiarCarrito,
        precio_total,
      }}
    >
      {children}
    </Provider>
  );
};

export default CartProvider;
