import React from "react";
import {BrowserRouter,Routes, Route } from 'react-router-dom';

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import Metodologia from "./pages/Metodologia";
import QuemSomos from "./pages/QuemSomos";
import Contato from "./pages/Contato";


export default function Rotas(){
    return(
        <BrowserRouter>
     <Header/>
     <Footer/>
     <Home/>
     <Metodologia/>
     <QuemSomos/>
     <Contato/>
      <Routes>
  
    <Route path='/' element={​​​​​<Home/>}/>​​​​​
   
    <Route path='/Metodologia'element={​​​​​<Metodologia/>}/>​​​​​
    <Route path='/QuemSomos' element={​​​​​<QuemSomos/>}/>​​​​​
    <Route path='/Contato' element={​​​​​<Passagens/>}/>​​​​​
   
  </Routes>
   
    </BrowserRouter>
   
    );
   
    
}