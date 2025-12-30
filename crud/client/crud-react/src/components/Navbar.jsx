import {Link, useNavigate} from 'react-router-dom'
const Navbar = ()=>{
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
const handleLogout = ()=>{
    localStorage.removeItem('token')
    navigate('/login')
}
return(
    <div className="navbar">
        <nav>
<Link to={'/'}>Register</Link>
<Link to={'/login'}>Login</Link>
<Link to={'/profile'}>Profile</Link>
<button onClick={handleLogout}>Logout</button>
        </nav>
    </div>
)
}
export default Navbar