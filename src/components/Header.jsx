import React from 'react';
import { NavLink } from 'react-router-dom';



const Header = () => {
    // function determineActive({isActive}){
    //     if (isActive===true){
    //         return "active" 
    //     } else {
    //         return ""
    //     }
    // }


    return (
<div>
<div className="logo">
            <img src="https://static.vecteezy.com/system/resources/previews/000/389/709/original/vector-plant-logo-design.jpg"/>
        </div>
        <div className = {"header"}>
            <div className="onglets">
            <NavLink to="/"  >Home</NavLink>
            <NavLink to ="/plantes" >Nos Plantes</NavLink>
            <NavLink to="/ollas" >Nos Ollas</NavLink>
            </div>
            <div className ="panier-page">
                <NavLink to="/panier" >Mon Panier</NavLink>
            </div>
            
        </div>
</div>
       
    
    );
};

export default Header;