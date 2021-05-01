import React, {useEffect, useState, useContext} from "react";
import {useParams} from "react-router-dom";
import ItemCount from "./ItemCount";
import {ProdContext, ProdContextProvider} from "../../contexts/ProdContext";
import {CartContext, CartContextProvider} from "../../contexts/CartContext";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button} from "react-bootstrap";
import Navigation from "../navigation/Navigation";
import GoBack from "../navigation/GoBack";
import {pill} from "./css/pill.css";
/* Item individual. Detalle
   Muestra el item filtrado en el useEffect  */

const Item = (props) => {
	const {productosOriginal} = React.useContext(ProdContext);
	const {productos, setProductos} = React.useContext(ProdContext);
	const {cart} = React.useContext(CartContext);
	const [initialTemp, setInitialTemp] = useState();
	const [stockTemp, setStockTemp] = useState();

	const {id} = useParams();

	useEffect(() => {
    	
    	setProductos(productosOriginal.filter((element) => element.id === id));
    	
	}, []);

	return (
		<>
			<Navigation/>
			<GoBack/>
			<Container>
				{productos.map((productos)=>
				
				<div key={productos.id}>
				
				<Row className="justify-content-md-center">
					
					<h3 className="text-center mb-4">{productos.titulo}</h3>
					
					<Col>
					 	<Card>
						  <Card.Body>
							  <Card.Img className="card-img-top" src={productos.img} alt={productos.titulo}/>
						  </Card.Body>
						</Card>
					</Col>
					<Col>
						<Card>
						  <Card.Body>
						  	{productos.oferta? 
						  		(<Card.Text>
						  			<strong>Oferta!</strong>
						  		 </Card.Text>
						  		 ) : ""}

						    <Card.Text>
						    	<strong>Precio: </strong> $ {productos.precio.toLocaleString()}
						    </Card.Text>
						    <Card.Text>
						        <strong>Descripción:</strong> {productos.descripcion_larga}
						    </Card.Text>
						    <Card.Text>
						        <strong>Proveedor: </strong>{productos.proveedor}
						    </Card.Text>
						    <Card.Text>
						        <strong>Categoría: </strong>{productos.categoria}
						    </Card.Text>
					        <Card.Text>
						        <strong>Fecha de publicación: </strong>{productos.fecha}
						    </Card.Text>

						        {productos.tags? 
						        	(<div className="text-right">
						        	   {productos.tags.map((tag)=>
						        		<div className="pill mb-4">{tag}</div>)}
						        	 </div>
						        	) : ""
						        }
						    
						   
						   <ItemCount 
							   		id={productos.id} 
							   		titulo={productos.titulo}
							   		stock={productos.stock}
							   		precio={productos.precio}
							/>


						  </Card.Body>
						</Card>
					 </Col>
				</Row>
				</div>
				)}
			
			
			</Container>
		</>	
	)
}

export default Item;