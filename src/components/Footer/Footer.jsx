import './Footer.css'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import logo from '../../assets/logos/logo-white.png'
import transparentLogo from "../../assets/logos/logo-white.png"


export default function Footer()
{


    const footerToNav = (e) => {
    e.preventDefault()
    const navSection = document.getElementById("hero-section")
    navSection.scrollIntoView({
        behavior: 'smooth'
    })
}
const compatibilityCheck = (e) => {
        e.preventDefault()
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
        
        if (isMobile)
        {
            window.location.href = 'mailto:zah00005@mix.wvu.edu'
        }
        else
        {
            window.open('https://mail.google.com/mail/?view=cm&fs=1&to=zah00005@mix.wvu.edu', '_blank')
        }
    }



    return(
        <footer>
            <div className='footer-logo'>
                    <button onClick = {footerToNav} className="footer-logo-btn" >
                        <img src={transparentLogo}  className = 'footer-logo-img'  alt="Website Logo" />
                        </button>
            </div>
            <div className='footer-about'>
                <h3>About</h3>
                <p className = 'footer-p'>Specializing in React, Express, SQL, and PostgreSQL. Passionate about learning and 
                    consistent improvment. 
                </p>
                
            </div>
            <div className='footer-socials'>
                    <h3>Socials</h3>
                    <div className="social-links">
                        <a href="https://github.com/zaidhanif1" target='_blank' className='footer-git'>{<FaGithub />} GitHub</a>
                        <a href="https://www.linkedin.com/in/zaidhanif/" target='_blank' className='footer-linkedin'>{<FaLinkedin/>} LinkedIn</a>
                        <a href="mailto:zah00005@mix.wvu.edu" className="footer-email" onClick={compatibilityCheck}>{<MdEmail />} Email</a>
                    </div>
                </div>  
        </footer>
    )
}