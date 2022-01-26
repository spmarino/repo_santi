import React, { useContext } from "react";
import { contexto } from "./CartContext";

function CartItem({ producto, contador, id }) {
  const { eliminarProducto } = useContext(contexto);
  const { nombre, foto } = producto;

  return (
    <div>
      <h4>{nombre}</h4>
      <img src={foto} style={{ width: "65px", height: "65px" }} alt={nombre} />

      <button onClick={() => eliminarProducto(id)}>Eliminar</button>

      <p>Cantidad: {contador}</p>
    </div>
  );
}

export default CartItem;
