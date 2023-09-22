import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaBarsStaggered } from 'react-icons/fa6'

import Logo from '../assets/logo.png'
import '../styles/Navbar.css'

const Navbar = () => {
    const [menuState, setMenuState] = useState(false)
    const toggleMenu = () => setMenuState(!menuState)
    const closeMenu = () => setMenuState(false)

    return (
        <header>
            <nav>
                <div className="menu-icon" onClick={toggleMenu}>
                {menuState ? <FaBarsStaggered className="fa-barsstaggered" /> : <FaBars className="fa-bars" />}
                </div>

                <Link to="/" className="logo" onClick={closeMenu}>
                     <img src={Logo} alt="Logo" className='nav-logo' />
                 </Link>

                <div className="menu">
                    <ul className={menuState ? 'showing' : ''}>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/projects'>Projects</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar


