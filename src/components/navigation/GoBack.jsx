import React from 'react';
import { useHistory } from "react-router-dom";
import {Button} from "react-bootstrap";

const GoBack = () => {
	const history = useHistory();

	return (
		<>
			<div className="container">
			<Button className="btn" onClick={() => history.goBack()}>Volver</Button>
			</div>
		</>
		)
}

export default GoBack;