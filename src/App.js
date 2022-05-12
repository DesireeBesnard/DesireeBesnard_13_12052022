import React from "react";
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import User from './pages/User';
import Error404 from './pages/Error404';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/user" element={<User />} />
        <Route path='*' element={<Error404 />}/>
      </Routes> 
      <Footer />
    </div>
  );
}

export default App;
