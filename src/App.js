
import { BrowserRouter, Routes,Route } from 'react-router-dom/dist'; 
import './App.css';
import React from 'react';


import Layout from './Comp/Layout';
import Login from './Pages/Login';
import Register from './Pages/Register';

 

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route path = '/' element   = {<Layout/>}>
        <Route index element = {<h1>Ques comming soon</h1>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
