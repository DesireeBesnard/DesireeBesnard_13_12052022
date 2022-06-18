import {NavLink, Link, useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from "../../features/auth/authSlice"
import '../../App.css'
import './style.css'

function NavBar() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.auth)
    const { firstName } = useSelector( state => state.user)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate("/")
    }

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
                {user ? (
                    <>
                        <NavLink className="main-nav-item" to="/user">
                            <i className="fa fa-user-circle"></i> {firstName}
                        </NavLink> 
                        <button className="main-nav-item" to="/" onClick={onLogout}>
                            <i className="fa fa-sign-out"></i> Sign Out
                        </button> 
                    </>
                ) : (
                    <NavLink className="main-nav-item" to="/signIn">
                        <i className="fa fa-user-circle"></i>Sign In
                    </NavLink> 
                )}
            </div>
        </nav>
    )
  }
  
  export default NavBar;