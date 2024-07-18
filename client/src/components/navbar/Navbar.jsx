import React, { useContext } from 'react'
import {Link, NavLink, useNavigate} from 'react-router-dom'
import './Navbar.css'
import TaskContext from '../../context/taskContext'

const Navbar = () => {

    const {User,setUser} = useContext(TaskContext)

    const navigate = useNavigate()

    const handleLogout = ()=>{
      localStorage.clear()
      setUser(null)
      navigate('/Auth')


    }

  return (
    <nav className='main-nav'>
      <div className='navbar'>
        <div className="logo">
            Task Manager
        </div>
        <ul>
            <li>
                <NavLink to={'/'}>Home</NavLink>
            </li>
            <li>
                <NavLink to={'/about'}>About</NavLink>
            </li>
            <li>
                <NavLink to={'/contact'}>Contact</NavLink>
            </li>
           
        </ul>
        <div className="auth">
            {User === null? <Link to={'/Auth'}>sign in</Link> :
            <button className='nav-item nav-links' onClick={handleLogout}>Log out</button>}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
