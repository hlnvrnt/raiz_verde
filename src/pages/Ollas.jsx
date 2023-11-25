import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


const Ollas = () => {
    const [count2, setCount2] = useState(0);
  
    const handleIncrease2 = () => {
      setCount2(count2 + 1);
    };
  
    // const handleDecrease2 = () => {
    //   if (count2 > 0) {
    //     setCount2(count2 - 1);
    //   }
    // };

  return (
    <div className="cardplants">
      {/* <div>
      <NavLink to={"/ollas/" + ollas.id} >
        <img src={ollas.img} alt={ollas.name} />
      </NavLink>
      </div>
      <div>{ollas.name}</div>
      <div>{ollas.price}</div>
      <div className="buttons">
        <button onClick={handleIncrease2}>Je l'adopte !</button>
        <div className="panierDecrease">
        <div className="quantite">Quantité {count2}</div>
        </div>
      </div> */}
    </div>
  );

    return (
        <div className="presentation">
            <h1>Nos Ollas</h1>
            <img src="" alt="" />
            
        </div>
    );
};

export default Ollas;