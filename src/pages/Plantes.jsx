import React from 'react';
import PlantCard from './PlantCard';
import plantsdata from './PlantesData';


const Plantes = () => {
   
    return (
        <>
            <div className="boutures-presentation">
                <div className="text-boutures">
                    <h1>Nos boutures</h1>
                    <p>Pour nous, bouture rime avec échange et partage, c’est pourquoi il nous parait évident de vous proposer des boutures de nos plantes mères favorites à des prix les plus accessibles possible.
                        <br />
                        <br />
                        Nous aimons l’idée qu’avec une bouture commence une chaîne de partage et d’échange, alors nous comptons sur vous, partagez notre plants lovers!
                    </p>
                </div>
                <img src="/images/pexels-cottonbro-studio-4503261.jpg" alt="boutures" />
            </div>
            <div className="container-icone">
                <div className="icones">
                <div>
                    <img src="/images/home.png" alt="fait maison" />
                    <p>100% fait maison</p>
                </div>
                <div>
                    <img src="/images/like.png" alt="fait avec amour" />
                    <p>100% fait avec amour</p>
                </div>
                <div>
                    <img src="/images/france.png" alt="made in France" />
                    <p>100% Made in France</p>
                </div>
                </div>
                <div className="ligne"></div>
            </div>
            <div className="allcards">
                {plantsdata.map((plant) => (
                    <div key={plant.id}>
                        <PlantCard
                            key={plant.id}
                            plant={plant}
                        />

                    </div>
                ))
                }
            </div>
        </>
    );

};



export default Plantes;

