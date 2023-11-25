import React from 'react';

const Home = () => {
    return (
    <>
    <div className ="container">
        <div>
         <img className ="image" src="https://images.pexels.com/photos/3094211/pexels-photo-3094211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        </div>
   
        <div className ="paragraph">
            <h1>A propos de Raiz Verde  </h1>
            <br/>
            <p> Aujourd'hui, vendredi 13 octobre, je me lance dans cette nouvelle aventure avec les plantes et vous.  
            <br/>
            Ma passion pour les plantes d'intérieur me vient de ma mère, le jour où elle m'en a offert une et depuis je ne peux m'imaginer vivre sans plantes. 
            J'aime les faire et les voir grandir, en créer de nouvelles avec des boutures, et en offrir autour de moi. 
            En revanche je me suis vite confronté à une problématique qui est le prix de ces plantes vertes.. En effet, en focntion de la rareté de certaines, onp peut vite atteindre des sommes assez importantes. 
            <br/>
            J'ai donc décidé de me lancer dans la vente de plantes abordables pour tout le monde et qu'on adopte comme un vrai membre appart entière de notre environnement. 
            Alors si vous aussi vous partagez cette passion, Bienvenue, Vous êtes au bon endroit! 
            <br/>
            Bonne visite !
            </p>
        </div> 
    </div>
    <div className="reseaux">
        <h2>Retrouver Raiz Verde sur les réseaux</h2>
        <div className="follow">
            <div>
                <img src="/images/instagram.png"/>
                <button>Raiz_Verde</button>
            </div>
            <div>
                <img src="/images/tik-tok.png"/>
                <button>Raiz_Verde</button>
            </div>
            
            </div>
    </div>
</>  
    );
};

export default Home;