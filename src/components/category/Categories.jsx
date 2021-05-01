import React from 'react';
import {useEffect, useState, useContext} from 'react';
import GoBack from "../navigation/GoBack";
import Navigation from '../navigation/Navigation';
import CategoriesList from './CategoriesList';
import Search from "../search/Search";
import {CategoryContext, CategoryContextProvider} from "../../contexts/CategoryContext";

const Categories = (props) => { 
	
    const titulo = "Todas las categorías"
 
    return (
    	<div>
 		
    	<Navigation/>
    	<GoBack/>
      <CategoriesList titulo={titulo}/>


    	</div>

    	)
    
}

export default Categories;