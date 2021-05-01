import React, {useEffect, useState} from "react";
import {UserContext, UserContextProvider} from "../../contexts/UserContext";
import Navigation from "../navigation/Navigation"
import LoginForm from "./LoginForm";

const Login = () => {
	const [orders, setOrders] = useState()
	
	return (
			<>
			<Navigation/>
			<LoginForm/>
			</>
		)
}

export default Login;