import React, {useState, useContext} from "react";
import ItemList from "./ItemList";
import {Container, Row, Col} from "react-bootstrap";
import {ProdContext, ProdContextProvider} from "../../contexts/ProdContext";
/* Se incluye el título y el subtítulo y mensajes varios*/

const ItemListContainer = ({titulo}) => {
	const {productos} = React.useContext(ProdContext);

	return (
		<div>
			<Container fluid>
				<Row>
					<h3 className="text-center mt-5 mb-5">{titulo}</h3>
				</Row>

				<Row>

				{productos.map((producto)=>
					<Col key={producto.id}>
						<ItemList 
							id={producto.id}
							titulo={producto.titulo}
							descripcion_corta={producto.descripcion_corta}
							descripcion_larga={producto.descripcion_larga}
							fecha={producto.fecha}
							precio={producto.precio}
							id_categoria={producto.id_categoria}
							categoria={producto.categoria}
							stock={producto.stock}
							img={producto.img}
							oferta={producto.oferta}
							tags={producto.tags}
							/>
					</Col>)
				}
				
				
				</Row>
			</Container>
		</div>
	)
}

export default ItemListContainer;