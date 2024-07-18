import React from "react";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./AllRoutes";
import ContextProvider from "./context/ContextProvider";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Navbar/>
        <AllRoutes />
      </BrowserRouter>
    </ContextProvider>
  );
};

export default App;
