import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./styles/index.scss"
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Plantes from "./pages/Plantes.jsx";
import Ollas from "./pages/Ollas.jsx";
import Panier from "./pages/Panier.jsx";
import PlantCard from "./pages/PlantCard.jsx";
import ProductsDetails from './pages/ProductsDetails.jsx';
import Entretien from './pages/Entretien.jsx';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App/>,
      children: [
        {
          index: true,          //URL est le même que celui du parent
          element: <Home />,
        },
        {
          path: "plantes",
          element: <Plantes />,
          children: [
            {
              path: "plantcard",
              element: <PlantCard />,
            },
          ]
        },
        {
          path: "plantes/:id",           //:id indique que l'élément est dynamique
          element: <ProductsDetails />,
        },

        {
          path: "ollas",
          element: <Ollas />
        },
        {
          path: "panier",
          element: <Panier />
        },
        {
          path: "entretien",
          element: <Entretien />
        },
      ]
    }
  ]
  
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
