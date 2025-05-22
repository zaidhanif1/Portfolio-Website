import "./Body.css"
import zaid from '../../assets/z.JPG'

export default function Body()
{
    return(
        <main>
        <div className="hero-section">
       <h1>Hi, I'm Zaid.</h1>
        <h3>Computer Science student building clean, responsive web apps.</h3>
        <button className="view-my-work-btn">View My Work</button>
        <a href="../../../public/Zaid Resume.pdf" target="_blank"><button className="resume-btn"  >Resume</button></a>
        
        </div>
        <div>
        {/* <img src={zaid} alt="Zaid Professional Picture" className="zaid-img" /> */}
        </div>
        <div className="about-section">
            <p>Junior at West Virginia University 
                    majoring in Computer Science and minoring in Physics. 
                    I have strong proficiency in React, JavaScript, Java, 
                    and CSS; with experience building responsive front-end 
                    web applications and object-oriented backend logic. 
                    Focused on building clean, efficient code and constantly 
                    expanding my skill set through hands-on projects and internships.
            </p>
        </div>

        </main>
        
)}