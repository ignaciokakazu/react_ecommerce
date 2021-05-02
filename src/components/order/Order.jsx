import React, {useContext, useEffect, useState} from "react";
import {Form, Button, Row, Col, Container, Table} from "react-bootstrap";
import ItemListContainer from "../items/ItemListContainer";
import {CartContext, CartContextProvider} from "../../contexts/CartContext";
import {UserContext, UserContextProvider} from "../../contexts/UserContext";
import {Redirect, Link} from "react-router-dom";
import Navigation from "../navigation/Navigation";
import swal from 'sweetalert'

import {getFirestore} from "../../config/firebase";
import firebase from "firebase/app";
import "firebase/firestore";

const Order = () => {
	const {cart, totalCart, vaciarCart, restarProdById} = React.useContext(CartContext);
	const {user} = React.useContext(UserContext);
	const [redireccion, setRedireccion] = useState({"redirect": false, "url": "/"});

	const [db, setDb] = useState(getFirestore());
	const [lastId, setLastId] = useState();

	useEffect(()=>{
		//si no está logeado redirect
		if (user.length==0) {
			
			swal("Debe ingresar sus datos personales antes de ordenar")
			//redirige
			setRedireccion({"redirect": true, "url": "/login"});
		}

		if (cart.length==0) {

			swal("No tiene productos en el carrito")
			//redirige
			setRedireccion({"redirect": true, "url": "/"});
		}
	},[])

	const enviar = () => {
		//graba

		const newOrder = {"user": user, 
					   "cart": cart, 
					   "createOn": firebase.firestore.Timestamp.fromDate(new Date()),
					   "total": totalCart};

		const orders = db.collection("orders");

	    orders.add(newOrder).then((resp) => {
	      setLastId(resp.id);
	      swal("Orden", `Su orden fue creada. Para futuros reclamos, su número de orden es: ${resp.id}`);
	    }).then(()=> {

		cart.map((e)=> {
			updateById(e.id, e.cantidad);
		});
		restarProdById();
	    
	    }).then(()=> {
	      vaciarCart();
		  setRedireccion({"redirect":true, "url":"/"});
	    })
    
	}

  const updateById = (id, cantidad) => {
  	const productos = db
      .collection("productos")
      .doc(id);

    productos.get().then((res) => {
      const array_temp = res.data();
      const stock_temp = array_temp.stock;
      const stock_nuevo = stock_temp - cantidad;

      const updateObject = { stock: stock_nuevo };
      productos.update(updateObject);
    });

  }

	return (
			<>	
				<Navigation/>
				<Container>
					<h3 className="text-center mt-5 mb-5">Orden</h3>
					<Row>
					<Col>
						<h5>Datos del usuario</h5>
							<ul>
								<li>Nombre: {user.nombre}</li>
								<li>Teléfono: {user.telefono}</li>
								<li>E-mail: {user.email}</li>
							</ul>
					</Col>
					<Col>
						<h5>Pago</h5>
							<p>Total a pagar: {totalCart.toLocaleString()}</p>

					</Col>
					</Row>
					<Row>
						<Col>
							<Link to="/cart/" className="btn btn-secondary">Volver al carrito</Link>
						</Col>
						<Col>
							<Link to="/" className="btn btn-warning">Volver a la lista de productos</Link>
						</Col>
						<Col>
							<Button onClick={()=>enviar()}>Comprar</Button>
						</Col>
					</Row>
					
				{redireccion.redirect? <Redirect to={redireccion.url} /> : ""}
				</Container>
			</>
		)
}

export default Order;