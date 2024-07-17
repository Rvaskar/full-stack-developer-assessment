import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AllRoutes from './AllRoutes'
import ContextProvider from './context/ContextProvider'

const App = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
    {/* if navbar is there we have to add here */}
    <AllRoutes/> 
    </BrowserRouter>
    </ContextProvider>
  )
}

export default App
