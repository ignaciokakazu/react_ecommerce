import React, {useContext, useState, useEffect, createContext} from "react";
import {getFirestore} from "../config/firebase.jsx";
import swal from "sweetalert";

export const ProdContext = React.createContext();
/*https://www.pluralsight.com/guides/how-to-use-react-context-to-share-data-between-components*/

export const ProdContextProvider = ({children}) => {
	const [productos, setProductos] = useState([]); //esta es la lista de productos filtrada, por el buscador y las categorías
  const [productosOriginal, setProductosOriginal] = useState([]); //esta es la lista de productos sin filters
  const [ofertasOn, setOfertasOn] = useState(false); //sirve para determinar si Search está en Ofertas
  const [novedadesOn, setNovedadesOn] = useState(false); //sirve para determinar si Search está en Novedades
  
  //RESTA EL STOCK SI HAY ELEMENTOS EN EL CART

    useEffect(()=> {
      const db = getFirestore();
      const prodCollection = db.collection("productos");
      prodCollection.get().then((resp) => {
        if (resp.size === 0) {
          console.log("Sin datos");
        } else {
         const resp_temp = resp.docs.map((e)=> ({id: e.id, ...e.data()}));
         console.log(resp_temp);
         setProductos(resp_temp);
         setProductosOriginal(resp_temp);
         }

      }).catch((error) => swal(error));
     }, [])

	return (
		<ProdContext.Provider value={{ productos, setProductos, 
                                   productosOriginal, setProductosOriginal, 
                                   ofertasOn, setOfertasOn,
                                   novedadesOn, setNovedadesOn }}>
			{children}
		</ProdContext.Provider>
		)
			
}