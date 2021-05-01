import React from "react";
import {Container, Row, Col} from "react-bootstrap";

const Footer = () => {

	return (
		<div className="bg-dark text-white mt-5" height="100px">
			<Container>
				<Row>
					<Col/>
					<Col>
						<p>Políticas de la empresa</p>
					</Col>
					<Col/>
					<Col>
						<p>Mapa del sitio</p>
					</Col>
				</Row>
			</Container>
		</div>
		) 

}

export default Footer;