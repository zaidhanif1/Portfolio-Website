import './Footer.css'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import transparentLogo from "../../assets/logos/logo-white.png"
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const MotionFooter = motion.footer

export default function Footer()
{
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

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
        <MotionFooter
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
        >
            <div className='footer-logo'>
                <button onClick={footerToNav} className="footer-logo-btn">
                    <img src={transparentLogo} className='footer-logo-img' alt="Website Logo" />
                </button>
            </div>
            <div className='footer-about'>
                <h3>About</h3>
                <p className='footer-p'>
                    Building across Python AI tooling, React/TypeScript products, SQL-backed APIs,
                    and low-level C systems work.
                </p>
            </div>
            <div className='footer-socials'>
                <h3>Socials</h3>
                <div className="social-links">
                    <a href="https://github.com/zaidhanif1" target='_blank' rel="noreferrer" className='footer-git'>
                        <FaGithub /> GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/zaidhanif/" target='_blank' rel="noreferrer" className='footer-linkedin'>
                        <FaLinkedin/> LinkedIn
                    </a>
                    <a href="mailto:zah00005@mix.wvu.edu" className="footer-email" onClick={compatibilityCheck}>
                        <MdEmail /> Email
                    </a>
                </div>
            </div>  
        </MotionFooter>
    )
}
