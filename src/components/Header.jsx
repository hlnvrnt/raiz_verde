import React from 'react';
import { NavLink } from 'react-router-dom';



const Header = () => {

    return (
<div>
<div className="logo">
            <img src="/images/logo.jpg" alt="logo"/>
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