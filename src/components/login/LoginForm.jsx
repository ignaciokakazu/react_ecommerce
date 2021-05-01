import React, {useContext, useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {Container, FormGroup, Form, Button} from "react-bootstrap";
import {Redirect} from "react-router-dom";
import {UserContext, UserContextProvider} from "../../contexts/UserContext";
import {CartContext, CartContextProvider} from "../../contexts/CartContext";
import swal from "sweetalert";

const LoginForm = (event) => {
  	const [msgNombre, setMsgNombre] = useState(true);
  	const [msgTelefono, setMsgTelefono] = useState(true);
  	const [msgEmail, setMsgEmail] = useState(true);
  	const {user, setUser} = React.useContext(UserContext);
  	const {cart} = React.useContext(CartContext)
  	const [ordenes, setOrdenes] = useState([]);

	const enviar = (event) => {
		event.preventDefault();
		event.stopPropagation();


		if (msgNombre == true && msgTelefono == true && msgEmail == true) {
			const nombre = document.getElementById("nombre").value;
			const telefono = document.getElementById("telefono").value;
			const email = document.getElementById("email").value;

			const usr = {"nombre": nombre, "telefono": telefono, "email": email}

			setUser(usr);
			swal("Log in", `Bienvenido ${nombre}. Está habilitado para comprar`);

			console.log(user);

		} else {
			swal("Error", "Revise los campos para continuar");
		}
	}


	const validarNombre = () => {
		const nombre = document.getElementById("nombre").value;
		if (nombre=="") {
			setMsgNombre("Ingrese un nombre para continuar")	
		} else {
			setMsgNombre(true);
		}		
	}
	
	const validarTelefono = () => {
		const telefono = document.getElementById("telefono").value;
		if (telefono=="") {
			setMsgTelefono("Ingrese un telefono para continuar")	
		} else {
			setMsgTelefono(true);
		}
	}

	const validarEmail = () => {
		//const inputs = document.getElementsByTagName("input");
		//console.log(inputs);
		const email = document.getElementById("email").value;
		if (email=="") {
			setMsgEmail("Ingrese un email para continuar")	
		} else if (email.search("@") == -1) {
			setMsgEmail("Ingrese un email válido para continuar")
		} else {
			setMsgEmail(true);
		}
		
	}

	const cerrarSesion = () => {
		if (window.confirm("Desea cerrar sesión?")) {
			setUser([])	
			console.log(user.length);
		}

	}


	return (
		<>	
				<Container>
				
				<h3 className="text-center mt-4 mb-4">Login</h3>

				<Form>
  					<Form.Group>
					    <Form.Label>Nombre</Form.Label>
					    <Form.Control type="text" id="nombre" onChange={()=>validarNombre()} defaultValue="Ignacio"/>
					    <Form.Text className="text-danger">
      					{msgNombre}
    					</Form.Text>
				    </Form.Group>
				    <Form.Group>
				    	<Form.Label>Teléfono</Form.Label>
				    	<Form.Control type="number" id="telefono" onChange={()=>validarTelefono()} defaultValue="111111"/>
				    	<Form.Text className="text-danger">
      					{msgTelefono}
    					</Form.Text>
				    </Form.Group>
				    <Form.Group>
				        <Form.Label>Email</Form.Label>
				        <Form.Control type="email" id="email" onChange={()=>validarEmail()} defaultValue="ignaciokakazu@gmail.com"/>
				        <Form.Text className="text-danger">
      					{msgEmail}
    					</Form.Text>
				    </Form.Group>
				    
				    <Button type="submit" onClick={(event)=>enviar(event)}>Guardar</Button>
				    {user.length!=0? 
				    	<Button onClick={()=>cerrarSesion()} className="btn-danger">
				    		Cerrar sesión
				    	</Button> : ""}


				    {cart.length!=0? 
				    	<Link to="/cart" className="btn btn-danger">Ir al carrito</Link> : ""
				    }
				    
				</Form>
				</Container>
			
		</>

		) 

}

export default LoginForm;