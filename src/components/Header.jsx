import React from 'react';
import { NavLink } from 'react-router-dom';



const Header = () => {
    function determineActive({isActive}){
        if (isActive===true){
            return "active" 
        } else {
            return ""
        }
    }


    return (
<div>
<div className="logo">
            <img src="https://static.vecteezy.com/system/resources/previews/000/389/709/original/vector-plant-logo-design.jpg"/>
        </div>
        <div className = {"header"}>
        
            <NavLink to="/"  className={determineActive}>Home</NavLink>
            <NavLink to ="/plantes" className={determineActive}>Les plantes</NavLink>
            <NavLink to="/ollas" className={determineActive}>Les Ollas</NavLink>
            <div className ="panier"><NavLink to="/panier" className={determineActive}>🧺</NavLink></div>
            
        </div>
</div>
       
    
    );
};

export default Header;