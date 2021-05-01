import React from 'react';
import {useEffect, useState, useContext} from 'react';
import {useParams} from 'react-router-dom';
import GoBack from "../navigation/GoBack";
import Navigation from '../navigation/Navigation';
import ItemList from '../items/ItemList';
import Search from "../search/Search";
import {ProdContext, ProdContextProvider} from "../../contexts/ProdContext";
import {CategoryContext, CategoryContextProvider} from "../../contexts/CategoryContext";
import {Container, Row, Col} from "react-bootstrap";

const Category = (props) => { 
  
  	const {id} = useParams();
	
    const {productosOriginal, setProductosOriginal} = React.useContext(ProdContext);
    const {productos, setProductos} = React.useContext(ProdContext);
    const {categoriasOriginal} = React.useContext(CategoryContext);
    const {categorias, setCategorias} = React.useContext(CategoryContext); //ancla la categoría para el buscador
    
    const productosCat = productos.filter((producto)=>producto.id_categoria == id);
    const cat  = categoriasOriginal.filter((categoria) => categoria.id == id);
    console.log(cat);
    const titulo=cat.map((categ)=>categ.titulo);
    console.log(titulo)
    /*useEffect(()=> {
    
      setProductos(productosOriginal.filter((producto) => producto.id_categoria == id));
      console.log(categoriasOriginal)
      console.log(categorias)
      //setCategorias(id); //ancla la categoría para el buscador
      
      const arrayTemp = categoriasOriginal.filter((categoria) => categoria.id == id);
      //console.log(arrayTemp.titulo);
      const tituloTemp = arrayTemp.map((e)=> e.titulo);
    
      setTitulo(tituloTemp.toString());
    
      
      //titulo=productos.map((producto)=>producto.categoria);
      //console.log(titulo)
    }, []);*/

  
    return (
    	<div>
 		
    	<Navigation/>
    	<GoBack/>
      <Search/>

      <Container fluid>
        <Row>
          <h3 className="text-center mt-5 mb-5">{titulo}</h3>
        </Row>

        <Row>

        {productosCat.length!=0?
          productosCat.map((producto)=>
          <Col key={producto.id}>
            <ItemList
              id={producto.id}
              titulo={producto.titulo}
              descripcion_corta={producto.descripcion_corta}
              precio={producto.precio}
              id_categoria={producto.id_categoria}
              categoria={producto.categoria}
              stock={producto.stock}
              img={producto.img}
              oferta={producto.oferta}
              />
          </Col>) : <p>No hay productos para esta categoría</p>
        }
        
        
        </Row>
      </Container>


    	</div>

    	)
    
}

export default Category;