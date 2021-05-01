import React, {useEffect} from "react";
import Navigation from "./navigation/Navigation";
import GoBack from "./navigation/GoBack";
import Footer from "./footer/Footer";
import Search from "./search/Search";
import ItemListContainer from "./items/ItemListContainer";
import {CategoryContext} from "../contexts/CategoryContext";
import {ProdContext} from "../contexts/ProdContext";
import {CartContext} from "../contexts/CartContext";
import SpinnerBorder from "./spinner/Spinner"
//https://sweetalert.js.org/guides/

const Home = () => {
	const titulo = "Productos"
	const {categorias, setCategorias} = React.useContext(CategoryContext);
	const {categoriasOriginal, setCategoriasOriginal} = React.useContext(CategoryContext);
	const {productos, setProductos} = React.useContext(ProdContext);
	const {productosOriginal, setProductosOriginal} = React.useContext(ProdContext);
	const {cart} = React.useContext(CartContext);

	const {ofertasOn, setOfertasOn} = React.useContext(ProdContext);
	const {novedadesOn, setNovedadesOn} = React.useContext(ProdContext);
	const {categoryOn, setCategoryOn} = React.useContext(CategoryContext);

	useEffect(()=>{
		setCategorias(categoriasOriginal);

		setProductos(productosOriginal);

		setOfertasOn(false);
		setNovedadesOn(false);
		setCategoryOn(false);

	},[])

	return (
		<div>
				<Navigation/>
				<GoBack/>
				<Search/>

				{productos.length>0?
					<ItemListContainer titulo={titulo}/> :
					<SpinnerBorder/>

				}

				<Footer/>
	
				
		</div>
	)
}

export default Home;