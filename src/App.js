import React from 'react';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { Helmet } from 'react-helmet';
import logo from './logo.svg';
import './App.css';
import Header from './pages/includes/Header';
import Footer from './pages/includes/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Tariff from './pages/Tariff';
import GalleryPage from './pages/GalleryPage';
import Contact from './pages/Contact';
import Locations from './pages/Locations';


function App() {
  console.log('public url: ', process.env.PUBLIC_URL)
  return (
    <div className="App">
      <BrowserRouter>
       <Header/>
      <Routes>
         <Route path={process.env.PUBLIC_URL+'/'} element={<Home/>} />
         <Route path={process.env.PUBLIC_URL+'/Car-Travels-in-Guntur'} element={<About/>} />
         <Route path={process.env.PUBLIC_URL+'/Services'} element={<Services/>} />
         <Route path={process.env.PUBLIC_URL+'/Guntur-Car-Travels-Rates'} element={<Tariff/>} />
         <Route path={process.env.PUBLIC_URL+'/GalleryPage'} element={<GalleryPage/>} />
         <Route path={process.env.PUBLIC_URL+'/Contact'} element={<Contact/>} />
         <Route path={process.env.PUBLIC_URL+'/Locations/:id'} element={<Locations/>} />
      </Routes>
       <Footer/>
       <Helmet>
        <script src={`${process.env.PUBLIC_URL}/assets/js/main.js`} type="text/javascript"></script>
       </Helmet>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
