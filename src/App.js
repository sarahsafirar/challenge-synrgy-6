
import React from "react";
import NavbarBCR from "./components/Navbar/Navbar"
import JumbotronBCR from "./components/Jumbotron/Jumbotron"
import LandingPage from "./components/LandingPage/LandingPage"
import Footer from "./components/Footer/Footer"
// import Search from "./components/Search/search";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cards from "./components/Cards/Cards";

function App() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path="/" element={<><NavbarBCR/><JumbotronBCR /><LandingPage /><Footer/></>}/>
            <Route path="/cars" element={<><NavbarBCR/><JumbotronBCR /> <Cards /><Footer/></>}/>
        </Routes>
      </Router>
      
      
      
    </div>
  );
}

export default App;
 