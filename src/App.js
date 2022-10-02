

import { Skeleton } from '@chakra-ui/react';
import { useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import AllRoutes from './Context/AllRoutes';


function App() {
  
  return (
    <div className="App">
      <Navbar/>
      
        <AllRoutes />
      
      
    </div>
  );
}

export default App;
