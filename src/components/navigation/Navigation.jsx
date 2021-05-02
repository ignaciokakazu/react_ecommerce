import React from "react";
import {Container, Nav, Navbar, Item, DropdownButton, Dropdown,Button} from 'react-bootstrap';
import {CategoryContext, CategoryContextProvider} from "../../contexts/CategoryContext";
import {CartContext, CartContextProvider} from "../../contexts/CartContext";
import {Link} from "react-router-dom";
import {buttonCustom, buttonDropdown} from "./css/buttonCustom.css";
import {UserContext, UserContextProvider} from "../../contexts/UserContext";

//https://react-bootstrap.github.io/components/navs/

const Navigation = () => {
	//REACT CONTEXT. Categorías
    const {categoriasOriginal} = React.useContext(CategoryContext);
    const {cantidadCart} = React.useContext(CartContext);
    const {user} = React.useContext(UserContext);

	return (
		<>

		  <Navbar bg="dark" variant="dark">
			<Navbar.Brand>Carrito</Navbar.Brand>
	      
			  <Link className="btn text-white bg-dark" to="/">Home</Link>
			  
			  <Link className="btn text-white bg-dark" to="/ofertas/">Ofertas</Link>

			  <Link className="btn text-white bg-dark" to="/novedades/">Novedades</Link>

			<DropdownButton variant="dark" id="dropdown-basic-button" title="Categorías">
			  
			  {categoriasOriginal.map((categoria)=> 
			  
			  	
			  	<Link to={`/category/${categoria.id}`} className="dropdown-item" key={categoria.id}>
			  	{categoria.titulo}
			  	</Link>			  	
			  	
			  	)}


			  		<Link to="/categorias/" className="dropdown-item">
			  			Todas las categorías
			  		</Link>
			</DropdownButton>
    
		    <Nav className="justify-content-end" style={{ width: "100%" }}>

		    
			  <Link to="/login/" className="btn text-white bg-dark">
			  	{user.length!=0? user.nombre : "Login"}
			  </Link>
			  

		      {cantidadCart>0?
		      	(<>
		      		<Link to="/cart/" className="btn text-white bg-dark"><i className="bi bi-cart h5"></i> {cantidadCart}</Link>
			  		
		      	</>) : ""
		      }
		      
			  
		    </Nav>
		  
		  </Navbar>
		</>
		) 

}

export default Navigation;