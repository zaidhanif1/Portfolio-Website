import profilePic from "../../assets/z.JPG"
import transparentLogo from "../../assets/logo-white.png"
import logo from '../../assets/Logo.png'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import "./Navigation.css"

export default function Navigation()
{
    return(
            <nav className="navigation-container">
                <div logo-container>
                <a href="/"><img src= {transparentLogo} alt="Website Logo" className="nav-logo" /></a>
                 </div>
                 <div className="nav-social-icons">
                    <a href="https://github.com/zaidhanif1" target="_blank" className="nav-git"><FaGithub/> GitHub</a>
                    <a href="https://www.linkedin.com/in/zaidhanif/" target='_blank' className="nav-linkedin">{<FaLinkedin/>} LinkedIn</a>
                 </div>

            </nav>
            


    )
}