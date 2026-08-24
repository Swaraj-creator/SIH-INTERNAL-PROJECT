import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './home'
import SignUser from './signUser'
import Navigation from './navigation'
import Login from './auth/login'

const Body = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home></Home>}/>
            <Route path='/login' element={<SignUser></SignUser>}/>
            <Route/>
            <Route/>
            <Route/>
            <Route/>
        </Routes>
    </BrowserRouter>
  )
}

export default Body
