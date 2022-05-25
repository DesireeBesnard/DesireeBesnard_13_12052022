import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import User from './pages/User'
import Error404 from './pages/Error404'
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/signin' element = {<SignIn />} />
          <Route path ='/user' element = {<User />}/>
          <Route path = '*' element = { <Error404 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
