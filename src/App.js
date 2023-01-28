//import logo from './logo.svg';
import React,{useEffect, useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import {Navbar, Signup} from './Navbar';
import Recipes from './Recipes';
import Recipedetials from './Recipedetails';

function Home() {
  return (
    <div className='welcomepage'>
    <img src='https://cdn.pixabay.com/photo/2017/07/28/14/29/macarons-2548827_960_720.jpg' alt='cookies'/>
      <p className='welcome-page'>"Deciding what to eat shouldn’t be complicated. And cooking dinner shouldn’t take hours out of your evening. 
      Still, we’ve all been there. Scrolling through pages of recipes until our eyes burn and chopping veggies until blood pools in our ankles. 
      That’s why we’ve put together a list of quick and easy dinner ideas that will have you in and out of the kitchen in 40 minutes or less. 
      There’s something for everyone, whether you’re in the mood for salad or steak, 
      soup or a rice bowl. Look no further, we’ve got you covered.</p>
    </div>
  )
}

function App() {
 const[view, setView]=useState("recipes")
 const[id ,setId]=useState(0)
  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipes' element={view==="recipes"? <Recipes setView={setView} setId={setId}/>:<Recipedetials id={id} setView={setView}/>} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
    
  )
}

export default App;
