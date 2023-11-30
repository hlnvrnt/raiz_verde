import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
    <div className="home">
        <div className="hero">
            <img src="/images/hero.jpg" alt="hero"/>
            <div className="text-hero">
                <h1>Raiz Verde</h1>
                <h2>Adopte ta plante !</h2>
               <NavLink to="/plantes">Voir Nos Plantes</NavLink>
            </div>
        </div>
        <div className="about">
            <div className="line1"></div>
        <h1>A propos de Raiz Verde  </h1>
            <div className="line2"></div>
        </div>
        
    <div className ="container">
        <div >
         <img className ="image" src="https://images.pexels.com/photos/3094211/pexels-photo-3094211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        </div>
        <div className ="paragraph">
            <br/>
            <p> C'est en 2023 que je me lance dans cette nouvelle aventure entre les plantes et vous.  
            <br/>
            Ma passion pour les plantes d'intérieur me vient de ma mère, le jour où elle m'en a offert une et depuis je ne peux m'imaginer vivre sans plantes. 
            J'aime les voir grandir, en créer de nouvelles avec des boutures, et en offrir autour de moi. 
            En revanche je me suis vite confronté à une problématique qui est le prix de ces plantes.. En effet, en fonction de la rareté de certaines, on peut vite atteindre des sommes importantes. 
            <br/>
            J'ai donc décidé de me lancer dans la vente de plantes abordables pour tout le monde et qu'on adopte comme un vrai membre appart entière de notre environnement. 
            <br/>Alors si vous aussi vous partagez cette passion, bienvenue, Vous êtes au bon endroit! 
            
            </p>
        </div> 
    </div>
    <div className="entretien-container">
    <div className="text-container">
            <div className="text">
            <h2>Guide d'entretien de mes plantes</h2>
            <p>Comment prendre soin de ma plante ? Quand et comment rempoter ? Quand arroser ? Si vous vous posez toutes ces questions, vous êtes au bon endroit ! Découvrez nos fiches d'entretien détaillées par variété de plantes</p>
            </div>
            <NavLink to="/entretien" >Notre guide d'entretien</NavLink>
            </div>
            <img src="/images/entretien.jpg" alt="entretien"/>
        </div>
</div>  
    );
};

export default Home;