import React from 'react';
import { useState } from 'react';


const Plantes = () => {

const [count, setCount] = useState(0)

const handleIncrease = () => {
    setCount(count + 1)
}

const handleDecrease = () => {
    if (count > 0){
        setCount(count - 1)
    } 
}

    return (
<div className="allcards">{plants.map((plant) =>
        <div key={plant.id} className="cardplants">
                <div><img src={plant.img}/></div>
                <div>{plant.name}</div>
                <div>{plant.price}</div>
            <div className="buttons">
                <button onClick={handleIncrease}>+</button>
                <button onClick = {handleDecrease}>-</button>
                <div>Quantité {count}</div>
            </div>
        </div>
        )}
</div>
    );
};


const plants = [
    {
        id : 1,
        name:"Begonia varigata",
        img : "src/images/plant1.jpeg",
        price: "5€"
    },
    {
        id : 2,
        name:"Allocacia",
        img : "src/images/plant2.jpg",
        price: "7€"
    },
    {
        id : 3,
        name:"Monstera",
        img : "src/images/plant3.jpg",
        price: "6€"
    },
    {
        id : 4,
        name:"Bullosa",
        img : "src/images/plant4.jpeg",
        price: "8€"
    },
]
export default Plantes;