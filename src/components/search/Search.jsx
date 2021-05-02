import React, {useContext, useEffect, useState} from "react";
import {Form, Button, Row, Col, Container} from "react-bootstrap";
import {ProdContext, ProdContextProvider} from "../../contexts/ProdContext";
import {CategoryContext, CategoryContextProvider} from "../../contexts/CategoryContext";
import ItemListContainer from "../items/ItemListContainer";


const Search = () => {
	const {productos, setProductos} = React.useContext(ProdContext);
	const {productosOriginal} = React.useContext(ProdContext);
	const {categorias, setCategorias} = React.useContext(CategoryContext);
	const {categoryOn} = React.useContext(CategoryContext);
	const {ofertasOn} = React.useContext(ProdContext);
	const {novedadesOn} = React.useContext(ProdContext);

	const [mensaje, setMensaje] = useState();
	
	const buscador = (event) => {
		

		const valor = document.getElementById("buscador").value;
		let filtrado;
		
		console.log(categorias);
		
		if (valor.length>1) {

			
			if (ofertasOn) {
				//Search en Ofertas
				filtrado = productosOriginal.filter(
				(str)=>(str.titulo.indexOf(valor.toUpperCase()) !== -1) && 
					   (str.oferta == true));

			} else if (novedadesOn) {
				//Search en Novedades
				filtrado = productosOriginal.filter(
				(str)=>(str.titulo.indexOf(valor.toUpperCase()) !== -1) && 
						(Date.parse(str.fecha) > Date.parse("2021/01/01")));	

			} else if (categoryOn) {
				//Search en Categoría
				const categoriaBusqueda = categorias;
				
				filtrado = productosOriginal.filter(
				(str)=>(str.titulo.indexOf(valor.toUpperCase()) !== -1) && 
					   (str.id_categoria == categoriaBusqueda));				

			} else {
				//Search en Home
				filtrado = productosOriginal.filter(
				(str)=>(str.titulo.indexOf(valor.toUpperCase()) !== -1));		
			}


		/*	if (categorias.length!=0) {
				const categoriaBusqueda = categorias;
				
				filtrado = productosOriginal.filter(
				(str)=>(str.titulo.indexOf(valor.toUpperCase()) !== -1) && 
					   (str.id_categoria == categoriaBusqueda));
				
				console.log("categorias !=0")
				console.log(filtrado)
			} else {
		
				console.log("categorias ==0")
			}*/

			setProductos(filtrado);
			console.log(productos);

		} else {
			
			//CASO EN QUE EL SEARCH SEA NULL

			if (ofertasOn) {
				//SOLO OFERTAS
				filtrado = productosOriginal.filter(
				(str)=>str.oferta == true);

			} else if (novedadesOn) {
				//SOLO NOVEDADES
				filtrado = productosOriginal.filter(
				(str)=>(Date.parse(str.fecha) > Date.parse("2021/01/01")));	

			} else if (categoryOn) {
				//SOLO CATEGORIA
				const categoriaBusqueda = categorias;
				
				filtrado = productosOriginal.filter(
				(str)=>(str.id_categoria == categoriaBusqueda));				

			} else {
				//Search en Home
				filtrado = productosOriginal;
			}


			setProductos(filtrado);
			console.log(productos);
			
		}

		mensajeDefault();


	}

	const mensajeDefault = () => {
		const valor = document.getElementById("buscador").value;

		if (valor.length>1) {
			setMensaje(productos.length + " resultados");
		} else if (valor.length==0) {
			setMensaje()
			
		} else {
			setMensaje("Ingrese más caracteres para buscar");
		}
		
	}


	return (
		<div>
			<Container fluid>
			<Row>
				<Col/>
				<Col>
					<Form>
					  <Form.Group>
					    <Form.Control id="buscador" type="text" placeholder="Buscar" 
					    onFocus={(e)=>buscador(e)} 
					    onBlur={(e)=>buscador(e)}
					    onChange={(e)=>buscador(e)}
					    onKeyDown={(e)=>buscador(e)}/>
					    {mensaje? <p>{mensaje}</p> : "" }
					  </Form.Group>
					</Form>
				</Col>
				<Col/>
			</Row>
			</Container>
		</div>
	)
}

export default Search;