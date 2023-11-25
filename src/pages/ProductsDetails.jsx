import React from 'react';
import plantsdata from './PlantesData';
import {useParams} from 'react-router-dom';
import { useState } from 'react';
import { useShoppingCart } from "use-shopping-cart";


const ProductsDetails = () => {
  const { id } = useParams();
  const plant = plantsdata.find((p) => p.id === parseInt(id));
  const [count2, setCount2]=useState(0)

  const { addItem} = useShoppingCart();

  if (!plant) {
    return <div>Plante non trouvée</div>;
  }

const handleIncrease2 = () => {
    setCount2(count2 + 1);
  }

const handleDecrease2 = () => {
  if (count2 > 0) {
    setCount2(count2 - 1);
  }
};

const handleAddCart = () => {
  if(count2 > 0){
    addItem(plant)
  }
 
}
    return (
      <>
        <div className="product-details">
          <div className="img-product">
            <img src={plant.img} alt={plant.name}/>
          </div>
            <div className="description">
                <h1>{plant.name}</h1>
                <p>{plant.price} €</p>
                <div className="button-product">
                <button onClick={handleIncrease2}>+</button>
                <p>{count2}</p>
                <button onClick={handleDecrease2}>-</button>
                <div className="button-panier">
                <button onClick={handleAddCart}>Ajouter au panier</button>
                </div>
                </div>
                <p>{plant.description}</p>
            </div>
        </div>
        <div className="entretien">
        <img src="/images/water-bucket.png" alt="waterbucket" />  
        <h2>Conseils d'entretien</h2>
        <p>{plant.entretien}</p>
        </div>
        </>
    );
};

export default ProductsDetails;