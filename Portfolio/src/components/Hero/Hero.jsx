import "./Hero.css"
import zaid from '../../assets/logos/z.JPG'

export default function Body()
{
    const scrollToProjects = (e) => {
        e.preventDefault();
        const projectsSection = document.getElementById('byte-bistro-div');
        projectsSection.scrollIntoView({ behavior: 'smooth' });
    };

    return(
        <main>
        <div id="hero-section">
       <h1>Hi, I'm Zaid.</h1>
        <h3>Computer Science student building clean, responsive web apps.</h3>
        <div className="hero-buttons">
        <a href="#" onClick={scrollToProjects} className="view-my-work-btn">View My Work</a>
        <a href="/Zaid Resume.pdf" target="_blank" className="resume-btn">Resume</a>
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
                </div>

        </main>
        
    )
}