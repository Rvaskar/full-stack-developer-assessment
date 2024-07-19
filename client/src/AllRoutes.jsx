import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Auth from "./components/Auth/Auth";
import AddTask from "./components/AddTask/AddTask";
import UpdateTask from "./components/updateTask/UpdateTask";
import PageNotFound from "./pages/PageNotFound";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Auth" element={<Auth />} />
      <Route path="/addTask" element={<AddTask />} />
      <Route path="/edit/:id" element={<UpdateTask />} />
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
  );
};

export default AllRoutes;
