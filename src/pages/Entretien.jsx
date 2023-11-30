import React from 'react';
import entretienData from './EntretienData';

const Entretien = () => {
    return (
        <div className="entretien">
            {entretienData.map((entretien)=>
            <div className="entretien-container">
            <div className="image-family">
            <img src={entretien.image} alt="entreiten-image"/>
            </div>
            <div className="text">
            <h2>{entretien.famille}</h2>    
            <p>{entretien.conseils}</p>
            </div>
            </div>
            )}
            
        </div>
    );
};

export default Entretien;