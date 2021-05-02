import React, {useContext, useEffect} from "react";
import Navigation from "../navigation/Navigation";
import GoBack from "../navigation/GoBack";
import Footer from "../footer/Footer";
import Search from "../search/Search";
import ItemListContainer from "../items/ItemListContainer";
import {ProdContext, ProdContextProvider} from "../../contexts/ProdContext";
import {CategoryContext, CategoryContextProvider} from "../../contexts/CategoryContext";

const Ofertas = () => {
	const titulo = "Ofertas"
	const {productos, setProductos} = React.useContext(ProdContext);
	const {productosOriginal} = React.useContext(ProdContext);
	//estas variables sirven para el Search
	const {ofertasOn, setOfertasOn} = React.useContext(ProdContext);
	const {novedadesOn, setNovedadesOn} = React.useContext(ProdContext);
	const {categoryOn, setCategoryOn} = React.useContext(CategoryContext);

	useEffect(()=>{
		const ofertas = productosOriginal.filter((producto)=> producto.oferta)
		console.log(ofertas);
		setProductos(ofertas);

		//prepara las variables para el Search
		setOfertasOn(true);
		setNovedadesOn(false);
		setCategoryOn(false);
		
	},[])

	return (
		<div>
				<Navigation/>
				<GoBack/>
				<Search/>

				{productos?
					<ItemListContainer titulo={titulo}/> : <p>No hay ofertas</p>
				}

				<Footer/>
	
				
		</div>
	)
}

export default Ofertas;