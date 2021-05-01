import 'bootstrap/dist/css/bootstrap.min.css';
import {ProdContextProvider} from "./contexts/ProdContext";
import React from "react";
import Routes from "./routes/Routes";
import {CategoryContextProvider} from "./contexts/CategoryContext";
import {CartContextProvider} from "./contexts/CartContext";
import {UserContextProvider} from "./contexts/UserContext";


function App() {
  //const productos = React.useContext(ProdContext.productos)

  return (
    <>

    
    <ProdContextProvider>
    <CartContextProvider>
   	<CategoryContextProvider>
   	<UserContextProvider>

    	<Routes/> 
      
    </UserContextProvider>
   	</CategoryContextProvider>
    </CartContextProvider>
    </ProdContextProvider>
    
    
    </>
  );
}

export default App;
