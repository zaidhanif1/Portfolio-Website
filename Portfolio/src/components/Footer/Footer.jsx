import './Footer.css'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import logo from '../../assets/logo-white.png'

export default function Footer()
{
    return(
        <footer>
            <div className='footer-logo'>
                <img src={logo} alt="Logo on Footer" className='footer-logo-img'/>
            </div>
            <div className='footer-about'>
                <h3>About</h3>
                
            </div>
            <div className='footer-socials'>
                    <h3>Socials</h3>
                    <div className="social-links">
                        <a href="https://github.com/zaidhanif1" target='_blank' className='footer-git'>{<FaGithub />} GitHub</a>
                        <a href="https://www.linkedin.com/in/zaidhanif/" target='_blank' className='footer-linkedin'>{<FaLinkedin/>} LinkedIn</a>
                    </div>
                </div>  
        </footer>
    )
}