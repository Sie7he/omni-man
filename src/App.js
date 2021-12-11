import React from 'react';
import { Outlet } from "react-router";
import { Navbar } from "./components/ui/Navbar";


function App() {
  return (
    <div>
      <Navbar />
       <div className="container">
          <Outlet />
        </div>
    </div>
  );
}

export default App;
