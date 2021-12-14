import React from 'react';
import { Outlet } from "react-router";
import { Navbar } from "./components/ui/Navbar";
import './App.css';


function App() {
  return (
    <div>
      <Navbar />
       <div className='container-app'>
          <Outlet />
        </div>
    </div>
  );
}

export default App;
