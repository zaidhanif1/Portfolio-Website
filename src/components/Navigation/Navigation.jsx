import { Link, useLocation, useNavigate } from 'react-router-dom'
import transparentLogo from "../../assets/logos/logo-white.png"
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa'
import "./Navigation.css"


export default function Navigation()
{
    const location = useLocation()
    const navigate = useNavigate()

const goHome = (e) => {
    e.preventDefault()
    if (location.pathname === '/') {
        const navSection = document.getElementById("hero-section")
        navSection?.scrollIntoView({ behavior: 'smooth' })
        return
    }
    navigate('/')
}

const hamburgDisplay = () => {
    const navSocial = document.getElementById('nav-social-icons')
    navSocial.classList.toggle('visible')
    
}
    return(
            <nav className="navigation-container">
                <div className="logo-container">
                    <Link to="/" onClick={goHome} aria-label="Go to home">
                        <img src={transparentLogo}  className="nav-logo" alt="Website Logo" />
                    </Link>
                 </div>

            
                <div>  
                    <div id="nav-social-icons">
                    <a href="https://github.com/zaidhanif1" target="_blank" rel="noreferrer" className="nav-git"><FaGithub/> GitHub</a>
                    <a href="https://www.linkedin.com/in/zaidhanif/" target='_blank' rel="noreferrer" className="nav-linkedin"><FaLinkedin/> LinkedIn</a>
                    </div>
                    <button className="icon" onClick={hamburgDisplay} aria-label="Toggle social links">
                    <FaBars />
                    </button>
                 
                 </div>


            </nav>
            


    )
}
