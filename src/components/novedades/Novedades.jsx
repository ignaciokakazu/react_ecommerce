import React, {useContext, useEffect} from "react";
import Navigation from "../navigation/Navigation";
import GoBack from "../navigation/GoBack";
import Footer from "../footer/Footer";
import Search from "../search/Search";
import ItemListContainer from "../items/ItemListContainer";
import {ProdContext, ProdContextProvider} from "../../contexts/ProdContext";
import {CategoryContext, CategoryContextProvider} from "../../contexts/CategoryContext";

const Novedades = () => {
	const titulo = "Novedades"
	const {productos, setProductos} = React.useContext(ProdContext);
	const {productosOriginal} = React.useContext(ProdContext);
	const {ofertasOn, setOfertasOn} = React.useContext(ProdContext);
	const {novedadesOn, setNovedadesOn} = React.useContext(ProdContext);
	const {categoryOn, setCategoryOn} = React.useContext(CategoryContext);

	useEffect(()=>{
		const novedades = productosOriginal.filter((producto)=> Date.parse(producto.fecha) > Date.parse("2021/01/01"));
		setProductos(novedades);
		//prepara las variables para el Search
		setOfertasOn(false);
		setNovedadesOn(true);
		setCategoryOn(false);

		
	},[])

	return (
		<div>
				<Navigation/>
				<GoBack/>
				<Search/>

				{productos?
					<ItemListContainer titulo={titulo}/> : <p>No hay novedades</p>
				}

				<Footer/>
	
				
		</div>
	)
}

export default Novedades;