import {NavLink, Link} from 'react-router-dom'
import '../../App.css'
import './style.css'

function NavBar() {
    return (
        <nav className="main-nav">
            <Link  to='/' className="main-nav-logo" >
                <img
                    className="main-nav-logo-image"
                    src={process.env.PUBLIC_URL + '/assets/argentBankLogo.png'} 
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                <NavLink className="main-nav-item" to="/signIn">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </NavLink>
            </div>
        </nav>
    )
  }
  
  export default NavBar;
  