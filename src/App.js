import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from "./features/auth/authSlice"
import { resetName } from "./features/user/userSlice"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import User from './pages/User'
import Error404 from './pages/Error404'
import './App.css';

function App() {

  const dispatch = useDispatch()
  const { rememberMe } = useSelector( state => state.auth )

  useEffect(() => {

    // If user doesn't want the Remember Me option, logout on tab close
    const handleTabClose = e => {
      e.preventDefault()
      if (rememberMe === false) {
        dispatch(logout())
        dispatch(resetName())
      }
    }

    window.addEventListener('beforeunload', handleTabClose);

    return () => {
      window.removeEventListener('beforeunload', handleTabClose);
    };
  }, [rememberMe, dispatch])


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
