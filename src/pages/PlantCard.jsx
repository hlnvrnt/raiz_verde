import React from 'react';
import { NavLink } from 'react-router-dom';
import { useShoppingCart } from 'use-shopping-cart';

const PlantCard = ({ plant }) => {
    // const [count, setCount] = useState(0);

    // const handleIncrease = () => {
    //   setCount(count + 1);
    // };
  
    const {addItem}=useShoppingCart();

  return (
    <div className="cardplants">
      <div>
      <NavLink to={"/plantes/" + plant.id} >
        <img src={plant.img} alt={plant.name} />
      </NavLink>
      </div>
      <div>{plant.name}</div>
      <div>{plant.price}€</div>
      <div className="buttons">
        <button onClick={()=> addItem(plant)}>Je l'adopte !</button>
        <div className="panierDecrease">
        {/* <div className="quantite">Quantité {count}</div> */}
        </div>
      </div>
    </div>
  );
};

export  default PlantCard;