import React, {createContext, useContext, useState} from 'react';
import {ProdContext, ProdContextProvider} from "./ProdContext";
//https://blog.logrocket.com/pitfalls-of-overusing-react-context/

/*No sólo maneja el contexto del CART, sino que también actualiza los stocks disponibles de Prod*/
/*
  VARIABLES:
  cart: items para comprar
  cantidadCart: la cantidad de items para comprar
  totalCart: precio * cantidad de todos los items
  
  MÉTODOS:
  agregarCart: agrega a cart los items en forma de array, contabiliza la cantidad de items (cantidadCart) y 
  totaliza (totalCart). Luego de agregar, actualiza los stocks en ProdContext
  eliminaId: elimina de cart por ID. Contabiliza la cantidad de items (cantidadCart) y 
  totaliza (totalCart). Luego de agregar, actualiza los stocks en ProdContext
  vaciarCart: vacía el cart y actualiza el productContext
  actualizarProductosOriginal: suma o resta, según compre (resta) o vacía el cart (suma lo que estaba en cart)
  
*/
export const CartContext = React.createContext();

export const CartContextProvider = ({children}) => {
  const [cart, setCart] = useState([]); 
  const [cantidadCart, setCantidadCart] = useState(0);
  const [totalCart, setTotalCart] = useState(0);
  const [userCart, setUserCart] = useState();
  const {productosOriginal, setProductosOriginal} = React.useContext(ProdContext);
  const {productos, setProductos} = React.useContext(ProdContext);

  /*Cuando agrega y elimina del cart, debería impactar en productosOriginal*/

  const agregarCart = (values) => {
    //AGREGA EN EL ARRAY

    if (inArray(values.id)) {
      //si está en cart, entonces, solo sumar el parámetro cantidad
      
      const arrayTemp = cart.filter((producto) => producto.id == values.id); 

      //array con el producto del cart

      const cantidadVieja = Number(arrayTemp.map((producto)=> producto.cantidad));

      const cantidadNueva = cantidadVieja + values.cantidad;

      //hace el loop y setea a la vez, para actualizar la cantidad en el array
      cart.map((e)=> {
              if (e.id == values.id) {
                e.cantidad = cantidadNueva;
                 }
               }
              );

    } else {
      cart.push(values)

    }
  	
    //CANTIDAD Y TOTAL
  	const cant = values.cantidad;
  	cantidadCart==0? setCantidadCart(cant) : setCantidadCart(cant + cantidadCart);
  	
  	const total = Number(values.precio) * Number(values.cantidad);
  	totalCart==0? setTotalCart(total) : setTotalCart(totalCart + total);
    
    //Modifica productosOriginal

    const productosOriginalTemp = productosOriginal.filter((e)=> e.id == values.id);
    const cantidadTemp = Number(productosOriginalTemp.map((e)=>e.stock));
    const cantidadNueva = cantidadTemp - cant;

    console.log(cantidadNueva);


    const productosOriginalNuevo = productosOriginal;

      productosOriginalNuevo.map((e)=> {
              if (e.id == values.id) {
                e.stock = cantidadNueva;
                 }
               }
              );

    console.log(productosOriginalNuevo);
  	
  }

  const eliminarId = (id, precio, cantidad) => {
    
    const cartProdTemp = cart.filter(id_prod => id_prod.id != id);

    setCart(cartProdTemp);

    setCantidadCart(cantidadCart - cantidad);
    
    const total = precio * cantidad
    setTotalCart(totalCart - total);

    actualizarProductosOriginal(id, cantidad, "sumar");

    //return cartProdTemp;
  }

  const vaciarCart = () => {

      console.log(cart);
      cart.map((e)=>actualizarProductosOriginal(e.id, e.cantidad, "sumar"));

      //falta actualizar ProductosOriginal
      setCart([]);
      setCantidadCart(0);
      setTotalCart(0);
  }

  const restarProdById = () => {
  
    cart.map((e)=>actualizarProductosOriginal(e.id, e.cantidad, "restar"));
  }

  

  const actualizarProductosOriginal = (id, cantidad, tipo) => {
    //tipo puede ser "sumar" o "restar"
    const cantidadCarrito = cantidad;
    const arrayTemp = productosOriginal.filter((producto)=>producto.id == id);
    const cantidadOriginal = Number(arrayTemp.map((e)=>e.stock));

    let cantidadNueva;
    if (tipo == "sumar") {
      cantidadNueva = cantidadOriginal + cantidadCarrito;
    } else {
      cantidadNueva = cantidadOriginal - cantidadCarrito;
    }

    productosOriginal.map((e)=> {
          if (e.id == id) {
            e.stock = cantidadNueva
          }
    })

  }

  const inArray = (id)=> {

    if (cart) {
    const esta = cart.filter((producto)=> producto.id == id);

        if (esta.length>0) {
          return true
        } else {
          return false
        }  

    } else {
      return false
    }
    
  }

  const cantidadPorId = (id) => {

    const arrayTemp = cart.filter((producto)=> producto.id == id);
    const cantidadTemp = Number(arrayTemp.map((producto)=> producto.cantidad));

    return cantidadTemp;

  }


	return (
		<CartContext.Provider value={{ 
						cart, setCart,
						cantidadCart, setCantidadCart,
						totalCart, setTotalCart,
						userCart, setUserCart,
						agregarCart, eliminarId, vaciarCart, cantidadPorId, restarProdById
						 }}>
			{children}
		</CartContext.Provider>
		)
			
}
