import React from 'react'
import { Routes,Route } from 'react-router-dom'
import HomePage from './HomePage'
import Equipments from './Equipments/Equipments'
import Services from './Services/Services'
import Contact from './Contact/Contact'
import About from './About/About'
import Pages from '../ContentPage/Pages'


const Router = () => {
  return (
    <div>
        <Routes>

        <Route path='/' element={<Pages/>}/>
         <Route path='/services' element={<Equipments/>}/>
         <Route path='/equipments' element={<Services/>}/>
         <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>

        </Routes>
   </div>
  )
}

export default Router
