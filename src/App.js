import React from 'react';
import Home from "./pages/Home";
import Cart from "./pages/Cart";

import Header from "./components/Header";
// import Banner from './components/Banner';
import Footer from './components/Footer';
import {createBrowserRouter,Outlet, RouterProvider,ScrollRestoration} from "react-router-dom";
import { productsData } from './api/Api';
import Product from './components/Product';
const Layout=()=>{
  return (
  <div>
      <Header />   
      <ScrollRestoration/>
      <Outlet/>
      <Footer />
    </div>

  );
};

const router = createBrowserRouter([
  {
    path :"/",
    element :<Layout />,
    children:[
      {
        path: "/",
        element:<Home />,
        loader: productsData,

      },
       {
        path:"/product/:id",
        element:<Product/>
       },
      {
        path: "/cart",
        element:<Cart />

      },
    ],

  },
]);

function App() {
  return (
    <div className="font-bodyFont">
  
    <RouterProvider router = {router} />
      {/* <Header />
      <Home />
      <Footer/> */}
    </div>
  );
}

export default App;
