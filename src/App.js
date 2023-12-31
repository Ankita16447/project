import React from 'react';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Header from "./components/Header";
import Payment from './components/Payment';
import Footer from './components/Footer';
import {createBrowserRouter,Outlet, RouterProvider,ScrollRestoration} from "react-router-dom";
import { productsData } from './api/Api';
import Product from './components/Product';
import Login from './pages/Login';


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
        path: "/shop",
        element:<Shop />

      },
      
      {
        path: "/payment",
        element:<Payment />

      },

      {
        path: "/contact",
        element:<Contact />

      },
      {
        path: "/about",
        element:<About />

      },
      {
        path:"/Login",
        element:<Login />
      }
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
