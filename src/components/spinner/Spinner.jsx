import React from "react";
import {Spinner, Container} from "react-bootstrap";

const SpinnerBorder = () => {

	return (
		  <>
		  <Container>
			  <Spinner animation="border" variant="success"> 
			  <p>Loading...</p>
			  </Spinner>
		  </Container>
		  </>
		 )
}

export default SpinnerBorder;