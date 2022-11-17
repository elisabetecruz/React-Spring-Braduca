import React from "react";
import {BrowserRouter,Routes, Route } from 'react-router-dom';

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import Metodologia from "./pages/Metodologia";
import QuemSomos from "./pages/QuemSomos";
import Contato from "./pages/Contato";
import Videos from "./pages/Metodologia";



export default function Rotas(){
    return(
  <BrowserRouter>
     <Header/>
     <Routes>
     <Route path="/" element={<Home/>}/>
   
    <Route path="/Metodologia" element={<Metodologia/>}/>
    <Route path="/QuemSomos" element={<QuemSomos/>}/>
    <Route path="/Contato" element={<Contato/>}/>
    <Route path="/Videos" element={<Videos/>}/>
    
   </Routes>
   <Footer/>
  </BrowserRouter>
   
    );
   
    
}