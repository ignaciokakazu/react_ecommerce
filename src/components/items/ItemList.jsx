import React, {useEffect, useState} from "react";
import ItemCount from "./ItemCount";
import {Card, ListGroup, ListGroupItem} from "react-bootstrap";
import {Container, Row, Col} from "react-bootstrap";
import {ProdContext, ProdContextProvider} from "../../contexts/ProdContext";
//import {CategoryContext} from "../../contexts/CategoryContext";
import {Link, useRouteMatch} from "react-router-dom";
import Spinner from "../spinner/Spinner";

/* Lista los items y muestra el detalle. Hace el map con los items del context */

const ItemList = ({id, titulo, descripcion_corta, descripcion_larga, fecha, precio, id_categoria,
					categoria, stock, img, oferta, tags}) => {

	const {productos, setProductos} = React.useContext(ProdContext);
	const {productosOriginal} = React.useContext(ProdContext);
	let {path, url} = useRouteMatch(); //para ver la URL. Si está en Category, no muestra el link a la categoría
	//const [cantidad, setCantidad] = useState();
	const [isLoad, setIsLoad] = useState(false)

	const titleMax = 24;
	const descripMax = 28;
	//estilos de imagen
	const background = {backgroundSize : 'cover'};
    const textStyle = {
          position: 'absolute', 
          backgroundColor:'white',
          right:'0%',
          padding:'12px'
        };

	const shortner = (texto, max) => {
		
		if (texto.length>max) {
			return texto.substring(0,max-3) + "..."
		} else {
			return texto
		}
	}

	const priceFormater = (valor) => {

		return valor.toLocaleString();
	}

	return (
		<div>
			
						<Col>
						  	
							<Card style={{ width: '18rem' }} className="mb-4">
							  <Card.Img className="card-img-top" src={img} alt={titulo} 
							  			height="160px" width="auto"
							  			style={background}/>
							  			{oferta? <p style={textStyle}>Oferta!</p> : ""}
							  			
							  <Card.Body>
							    <Card.Title className="text-center">{shortner(titulo, titleMax)}
							    		
							    		
							    		
							    </Card.Title>
							    <Card.Text>
							        
							          <small>{shortner(descripcion_corta, descripMax)}</small>
							    </Card.Text>
							    <Card.Text>

							        {path=="/category/:id"?
							         "" : (<Link to={`category/${id_categoria}`} className="btn btn-primary">
							        	Categoría: {categoria}
							        </Link>)}
							     </Card.Text>
							         
							  </Card.Body>
							  <ListGroup className="list-group-flush">
							    <ListGroupItem className="text-center">
							    	<Row>
							    		<Col>$ {priceFormater(precio)}</Col>
							    		<Col>
							    			<Link className="btn btn-secondary" to={`/item/${id}`}
												id={id}
												titulo={titulo}
												descripcion_larga={descripcion_larga}
												fecha={fecha}
												precio={precio}
												id_categoria={id_categoria}
												categoria={categoria}
												stock={stock}
												img={img}
												oferta={oferta}
							    				>Ver detalle</Link>
							    		</Col>
							    	</Row>
							    </ListGroupItem>
						   
							   	<ItemCount 
							   		id={id} 
							   		titulo={titulo}
							   		stock={stock}
							   		precio={precio}
							   		/>
							    
							  </ListGroup>

							</Card>
							
						</Col>
					
				
		</div>

			
	)
}

export default ItemList;