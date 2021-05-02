import React, {useContext, useState, useEffect, createContext} from "react";

export const UserContext = React.createContext();

export const UserContextProvider = ({children}) => {
  const [user, setUser] = useState([]); 

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
		)
			
}