import React, {useState, useEffect} from "react";
import {Col, Row, ListGroupItem, Button} from "react-bootstrap";
import {CartContext, CartContextProvider} from "../../contexts/CartContext";
import {Link} from "react-router-dom";
import swal from "sweetalert";

/* Contador de cada item */

const ItemCount = (props) => {
	const [cantidad, setCantidad] = useState(0);
	const [stock, setStock] = useState(props.stock);
	const [habilitaCompra, setHabilitaCompra] = useState(false);
	
	const {cart, setCart} = React.useContext(CartContext); 
  	const {cantidadCart, setCantidadCart} = React.useContext(CartContext); 
  	const {totalCart, setTotalCart} = React.useContext(CartContext); 
  	const {userCart, setUserCart} = React.useContext(CartContext); 
  	const {agregarCart} = React.useContext(CartContext); 
  	const {cantidadPorId} = React.useContext(CartContext); 

  	useEffect(()=>{
  		if (cart.length!=0) {
  			const initial = cantidadPorId(props.id);

  			if (initial !==0 ) {
  				setHabilitaCompra(true);
  			}
  			setCantidad(initial);
  		} else {
  			setCantidad(0)
  		}


  	},[])

	const modificarCantidad = (operacion) => {
		
		switch (operacion){
			case "sumar":
				if (cantidad<props.stock) {
					setCantidad(cantidad + 1);
					setStock(stock -1);
				} else {
					swal("Error", "No hay más unidades disponibles");
				}
				break;

			case "restar":
				if (cantidad!=0) {
					setCantidad(cantidad - 1);
					setStock(stock + 1);
				} else {
					swal("Error", "No puede pedir menos de 0");
				}
				break;
		}
	}


	const agregarCarrito = (q, titulo, id, precio) => {

		if (q==0) {
			swal("Error", "Agregue una cantidad mayor a 0");
			return;
		}
		/*Agrega al CartContext */
		const total = precio * q;
		swal("Agregar", `Has agregado ${q} ${titulo} al carrito. En total, son $ ${total}`);
		//setStock(stock - q);
			//setHabilitaCompra(1);

		//CONTEXT
		const arr_productos = {"id": id, "titulo": titulo, "cantidad": q, "precio": precio};

		agregarCart(arr_productos);

		setHabilitaCompra(true);

	}

	return (
		<div>
				
					<ListGroupItem className="text-center">
						<Row>
							
									
							<Col>
								{habilitaCompra?
									"" : <Button onClick={()=>modificarCantidad("restar")}>-</Button>	
								}
							
							
								<Button>{cantidad}</Button>
							
							
								{habilitaCompra?
									"" : <Button onClick={()=>modificarCantidad("sumar")}>+</Button>	
								}
							</Col>
							
							
						</Row>
					</ListGroupItem>
					<ListGroupItem className="text-center">
							<p>Stock: {stock}</p>
					</ListGroupItem>
					

			<ListGroupItem className="text-center">
				{habilitaCompra? 
				 (<Link to="/cart" className="btn btn-danger">Ir al carrito</Link>)
				 :
				 (<Button onClick={
				 	()=>agregarCarrito(cantidad, props.titulo, props.id, props.precio)}>
				 	Agregar al carrito
				 </Button>)
				}
			</ListGroupItem>
		</div>
	)
}

export default ItemCount;