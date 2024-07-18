import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Auth from './components/Auth/Auth'
// import DisplayTask from './components/Tasks/DisplayTask'
import AddTask from './components/AddTask/AddTask'


const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route  path='/Auth' element={ <Auth /> }/>
        
        <Route path='/addTask' element={<AddTask/> } />
        
        
    </Routes>
      
    
  )
}

export default AllRoutes
