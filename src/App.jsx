import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import AllUser from './Pages/AllUser';
import NavBar from './LayOut/NavBar'
import NewUser from './Pages/NewUser'
import Home from './Pages/Home'
import SingleUser from './Pages/SingleUser'
import Footer from './LayOut/Footer'



function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route index element={<Home/>}/>
      <Route path='/AllUser' element={<AllUser/>}/>
      <Route path='/NewUser' element={<NewUser/>}/>
      <Route path='/SingleUser/:userId' element={<SingleUser/>}/>

      </Routes>
      <Footer/>
      <Toaster />
      </BrowserRouter>
    </>
  )
}

export default App
