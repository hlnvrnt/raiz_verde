import React from 'react';
import { useShoppingCart } from "use-shopping-cart";

const Panier = () => {
 const { cartDetails, totalPrice, incrementItem, decrementItem, removeItem } = useShoppingCart() 
 const cartItems= Object.values(cartDetails) || [];   
    return (
      <div className="panier-container">
        <h1>Mon Panier</h1>
      <div className="panier">
        <div className="cartContainer">
          {cartItems.map((item) => {
            const{id, name, price, img, currency, quantity}= item;
            return (
              <div className="cart" key={id}>
                 <div className="img-text">
                  <img src={img} alt={name}/>
                  <div className="text">
                  {name} - {price}€ 
                  <div className="buttons-qty">
                  <div className="modify-qty">
                  <button onClick={()=>incrementItem(id)}>+</button>
                  <p>{quantity}</p>
                  <button onClick={()=>decrementItem(id)}>-</button>
                  </div>
                  <div className="button-cart">
                    <button onClick={() => removeItem(id)}>
                      <img src="/images/trash-bin.png" />
                    </button>
                  </div>
                  </div> 
                  </div>
                  </div>
              </div>
            );
          })}
        </div>
        <div className="price">
        {cartItems.map((item) => {
            const{id, name, price, quantity}= item;
            <div className="text" key={id}>
                  {name} - {price}€ - {quantity}
            </div>
          })}
          <div className="totalPrice">Total du panier : {totalPrice}€</div>
          <button>Acheter</button>
          
        </div>
      </div>
      </div>
    );
};

export default Panier;


