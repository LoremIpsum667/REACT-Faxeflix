import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Home from "./components/Home";
import List from './components/List';
import Contact from './components/Contact';
import Login from "./components/connection/Login";
import PageNotFound from "./components/PageNotFound";
import Register from "./components/connection/Register";

export const MyRoutes = {
  HOME:'/home',
  LIST:'/list',
  CONTACT:'/contact',
  LOGIN:'/login',
  REGISTER:'/register',
};

const Router = () => {

  return (
    <div className="test">
    <BrowserRouter>
    <Header/>
      <Routes >
        <Route path={MyRoutes.HOME} element={<Home/>}/>
        <Route path={MyRoutes.LIST} element={<List/>}/>
        <Route path={MyRoutes.CONTACT} element={<Contact/>}/>
        <Route path={MyRoutes.LOGIN} element={<Login/>}/>
        <Route path={MyRoutes.REGISTER} element={<Register/>}/>
        <Route  path="*" element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
};
export default Router;
