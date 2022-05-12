import React from "react";
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Error404 from './pages/Error404';
import NavBar from './components/NavBar'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='*' element={<Error404 />}/>
      </Routes> 
    </div>
  );
}

export default App;
