import './App.css';

// import Navbar from './Components/Navbar';

// import ProductPage from './Pages/ProductPage';
// import SingleProductPage from './Pages/SingleProductPage';
// import AllRoutes from './Routes/AllRoutes';

import { ChakraProvider } from '@chakra-ui/react'
import AllRoutes from './Routes/AllRoutes';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import React from "react";

function App() {
  
  return (

    <div className="App">
    <ChakraProvider>

        <Navbar />
        <AllRoutes />
        <Footer />
    </ChakraProvider>
    </div>
     
  );
}

export default App;
