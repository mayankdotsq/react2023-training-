import React from 'react';
import Main from "./app-layout/Main";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import Help from './pages/Help';
import Register from './pages/Register';
import PageNotFound from './pages/PageNotFound';
import Home from './pages/Home';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}>
          <Route index element={<Home/>}/>
          <Route path='login' element={<Login />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='help' element={<Help />} />
          <Route path='register' element={<Register />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )

}
export default App