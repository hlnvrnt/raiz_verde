import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Root from "./components/Root.jsx";
import Home from "./pages/Home.jsx";
import Plantes from "./pages/Plantes.jsx";
import Ollas from "./pages/Ollas.jsx";
import Panier from "./pages/Panier.jsx";
import Header from "./components/Header.jsx";


const App = () => {

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Root/>,
        children: [
          {
            index: true,          //URL est le même que celui du parent
            element: <Home />
          },
          {
            path: "plantes",
            element: <Plantes />,
      
          },
          // {
          //   path: "products",
          //   element: <Products />,
      
          // },
          {
            path: "ollas",
            element: <Ollas />
          },
          {
            path: "panier",
            element: <Panier />
          },
          // {
          //   path: "plantes/:id",
          //   element : <Plantesdetails />,
          // }
    
        ]
      }
    ]
    
  )
  
  return (
    <>
    <RouterProvider router={router} />
    {/* <Products />
    <Plantes image={image} name={name} price={price}/> */}
  
    </>
    
  );
};

export default App;