import React from 'react';
import {CartContext} from "../contexts/CartContext";
import {ProdContext} from "../contexts/ProdContext";
import {Row, Col, Button, Table, Container} from "react-bootstrap";
import Navigation from "./navigation/Navigation";
import GoBack from "./navigation/GoBack";
import {Link} from "react-router-dom";
import swal from 'sweetalert';

const Cart = () => {
	const {cart} = React.useContext(CartContext);
	const {totalCart} = React.useContext(CartContext);
	const {productosOriginal} = React.useContext(ProdContext)
	const {agregarCart, eliminarId, vaciarCart} = React.useContext(CartContext);

	const sumarUno = (id, titulo, precio) => {

		//controla contra el stock. No puede agregar más que el stock
		const arrayTemp = productosOriginal.filter((producto)=>producto.id === id);
		const cantidadTemp = Number(arrayTemp.map((e)=>e.stock));

		if (cantidadTemp===0) {
			swal("No se disponen de más unidades en stock")
			return
		} else {
			const arr_productos = {"id": id, "titulo": titulo, "cantidad": 1, "precio": precio};
			agregarCart(arr_productos);	
		}

		
	}

	const restarUno = (id, titulo, precio, cantidad) => {
		if (cantidad===1) {
			
			eliminar(id,titulo, precio,cantidad);

		} else {

			const arr_productos = {"id": id, "titulo": titulo, "cantidad": -1, "precio": precio};
			agregarCart(arr_productos);

		}
		
	}

	const eliminar = (id, titulo, precio, cantidad) => {

		if (window.confirm(`Desea eliminar ${titulo} ?`)) {
			eliminarId(id,precio,cantidad);	
		}
	}

	const vaciar =() => {
		if (window.confirm("Desea eliminar el contenido del carrito?")) {
		vaciarCart();
		}
	}

	return (
			<>
			<Navigation/>
			<GoBack/>

			<Container>
			<h3 className="text-center mb-4 mt-4">Carrito </h3>
			{cart.length!==0? 
			(<>
			<Table striped bordered hover>
			  <thead>
			    <tr className="text-center">
			      <th>Producto</th>
			      <th>Precio ($)</th>
			      <th>Cantidad (u)</th>
			      <th>Subtotal</th>
			      <th></th>
			    </tr>
			  </thead>
  			 <tbody>
   
			{cart.map((producto) =>
				
					<tr key={producto.id}>
						<td>
							<p>{producto.titulo}       <Link className="btn btn-secondary" to={`/item/${producto.id}`}>Ver detalle</Link>
							</p>
						</td>

						<td className="text-center">{producto.precio.toLocaleString()}</td>
						<td className="text-center">
							<Button onClick={()=>restarUno(producto.id, producto.titulo, producto.precio, producto.cantidad)}>
								{producto.cantidad === 1?
									<i className="bi bi-trash"></i>
									: 
									"-"}
							</Button>

							<Button>
								{producto.cantidad.toLocaleString()}
							</Button>

							<Button onClick={()=>sumarUno(producto.id, producto.titulo, producto.precio)}>
								+
							</Button>

							</td>
						<td className="text-center">{producto.cantidad * producto.precio}</td>
						<td className="text-center">
							<Button className="btn btn-danger"
									onClick=
									{()=>eliminar(producto.id, producto.titulo, producto.precio, producto.cantidad)}>
								<i className="bi bi-trash"></i>
							</Button>
						</td>
					</tr>
				
				)}
			</tbody>
				</Table>

				<p className="text-right">Total a pagar: {totalCart}</p>

				<Row>
					<Col>
						<Button className="btn btn-danger" onClick={()=>vaciar()}>
						<i className="bi bi-cart-x"></i> Borrar todo</Button>
					</Col>
					<Col>

						<Link to="/order/" className="btn btn-warning">
							<i className="bi bi-cart-x"></i> Terminar la compra</Link>
					</Col>
					<Col/>
					<Col/>
				</Row>

				</>
			) 
			: 
			<div>No hay productos en el carrito. <Link to="/">Volver</Link></div>}
			
			</Container>
			</>
		)
}

export default Cart;