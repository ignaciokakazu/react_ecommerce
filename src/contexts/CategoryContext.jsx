import React, {useContext, useState, useEffect, createContext} from "react";
import {getFirestore} from "../config/firebase.jsx";
import {useRouteMatch,useParams} from "react-router-dom";
import swal from "sweetalert";

export const CategoryContext = React.createContext();
/*https://www.pluralsight.com/guides/how-to-use-react-context-to-share-data-between-components*/

export const CategoryContextProvider = ({children}) => {
	const [categorias, setCategorias] = useState([]); //esta es la lista de categorías filtrada, por la url
  const [categoriasOriginal, setCategoriasOriginal] = useState([]); //esta es la lista de categorias sin filters
  const [categoryOn, setCategoryOn] = useState(false); //sirve para determinar si Search está en Category

  //const {id} = useParams();

    useEffect(()=> {
      const db = getFirestore();
      const categoriesCollection = db.collection("categorias");
      categoriesCollection.get().then((resp) => {
        if (resp.size === 0) {
          console.log("Sin datos");
        } else {
         const resp_temp = resp.docs.map((e)=> ({id: e.id, ...e.data()}));
         console.log(resp_temp);
         
         setCategoriasOriginal(resp_temp);
        }  

      }).catch((error) => swal(error));
     }, [])
  

	return (
		<CategoryContext.Provider value={{ categorias, setCategorias, 
                                       categoriasOriginal, setCategoriasOriginal,
                                       categoryOn, setCategoryOn }}>
			{children}
		</CategoryContext.Provider>
		)
			
}