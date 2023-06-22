import { useState } from "react"
import { NavLink } from "react-router-dom"
import '../styles/Navbar.css'

export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false)

    function toggleIsOpen(){
        setIsOpen(prev => !prev)
    }

    return (
        <nav className={isOpen ? "opened" : ""}>
            <img className="logo" src="/assets/shared/logo.svg" alt="Logo" />
            <div className="nav-divider"></div>
            <img className="menu-btn" src={`/assets/shared/icon-${isOpen ? "close" : "hamburger"}.svg`} onClick={toggleIsOpen} />
            <div className={`nav-items ${isOpen ? "opened" : ""}`}>
                <NavLink to={`/`}  ><span className="nav-item-number">00</span> Home</NavLink>
                <NavLink to={`/destination`}  ><span className="nav-item-number">01</span> Destination</NavLink>
                <NavLink to={`/crew`}  ><span className="nav-item-number">02</span> Crew</NavLink>
                <NavLink to={`/technology`}  ><span className="nav-item-number">03</span> Technology</NavLink>
            </div>
        </nav>
    )
}