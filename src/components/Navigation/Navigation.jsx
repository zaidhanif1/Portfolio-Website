import profilePic from "../../assets/logos/z.JPG"
import transparentLogo from "../../assets/logos/logo-white.png"
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FaBars } from 'react-icons/fa'
import "./Navigation.css"


export default function Navigation()
{
   
const scrollToNav = (e) => {
    e.preventDefault()
    const navSection = document.getElementById("hero-section")
    navSection.scrollIntoView({
        behavior: 'smooth'
    })
}

function scrollTo (e) {
    e.preventDefault
    const theElement = document.getElementById('element')
}
const hamburgDisplay = () => {
    const navSocial = document.getElementById('nav-social-icons')
    navSocial.classList.toggle('visible')
    
}
    return(
            <nav className="navigation-container">
                <div className="logo-container">
                    <button onClick = {scrollToNav} ><img src={transparentLogo}  className="nav-logo" alt="Website Logo" /></button>
                 </div>

            
                <div>  
                    <div id="nav-social-icons">
                    <a href="https://github.com/zaidhanif1" target="_blank" className="nav-git"><FaGithub/> GitHub</a>
                    <a href="https://www.linkedin.com/in/zaidhanif/" target='_blank' className="nav-linkedin">{<FaLinkedin/>} LinkedIn</a>
                    </div>
                    <a className="icon" onClick={hamburgDisplay}>
                    <FaBars />
                    </a>
                 
                 </div>


            </nav>
            


    )
}