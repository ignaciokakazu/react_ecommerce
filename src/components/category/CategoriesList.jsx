import React, {useState, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
import {Card, ListGroup, ListGroupItem} from "react-bootstrap";
import {CategoryContext, CategoryContextProvider} from "../../contexts/CategoryContext";
import {Link} from "react-router-dom";

/* Se incluye el título y el subtítulo y mensajes varios*/

const CategoriesList = ({titulo}) => {
	const [isLoad, setIsLoad] = useState(false);
	const {categoriasOriginal, categorias, setCategorias} = React.useContext(CategoryContext); 

	useEffect(()=>{
		setCategorias(categoriasOriginal);
	},[])

	return (
		<div>
			<Container fluid>
				<Row>
					<h3 className="text-center mt-5 mb-5">{titulo}</h3>
				</Row>
			</Container>
			<Container>
				<Row className="justify-content-md-center">
					{categoriasOriginal.map((categoria)=>
						<Col key={categoria.id}>
						  <Link to={`/category/${categoria.id}`}>
							  <div>
								<Card style={{ width: '18rem' }} className="mb-4">
								  <Card.Img className="card-img-top" 
								  			src={categoria.img} alt={categoria.titulo} 
								  			height="160px" width="auto"/>
								  			
								  <Card.Body>
								    <Card.Title className="text-center">
								    	{categoria.titulo}
								    		
								    </Card.Title>
								    <Card.Text className="text-center">
								        {categoria.descripcion_corta}
								    </Card.Text>
								  </Card.Body>

								</Card>
							   </div>
						  </Link>
						</Col>
					)
					
					}
				</Row>

				

			</Container>
		</div>
	)
}
export default CategoriesList;