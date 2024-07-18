import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Auth from './components/Auth/Auth'


const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route  path='/Auth' element={ <Auth /> }/>
        
        
    </Routes>
      
    
  )
}

export default AllRoutes
