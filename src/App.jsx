import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "./components/Header.jsx";
import { CartProvider } from 'use-shopping-cart';

const App = () => {
  return (
    
    <div className="App">
      <CartProvider 
      mode="payment"
      cartMode="client-only"
      successUrl="stripe.com"
      cancelUrl="twitter.com/dayhaysoos"
      currency="EUR"
      allowedCountries={['US', 'GB', 'EU']}
      billingAddressCollection={true}
      >
      <Header /> 
      <Outlet />            
      {/* outlet indique le contenu de la page sur laquelle on est */}
      </CartProvider>
    </div>

  );
};

export default App;
