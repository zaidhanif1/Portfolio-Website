import "./Hero.css"

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
        <h3>Computer Science student building software across AI tooling, systems, and full-stack products.</h3>
        <div className="hero-buttons">
        <a href="#" onClick={scrollToProjects} className="view-my-work-btn">View My Work</a>
        <a href="/Resume.pdf" target="_blank" rel="noreferrer" className="resume-btn">Resume</a>
        </div>  

        <div className="about-section">
            <p>
                I'm a senior computer science major and physics minor student at West Virginia University,
                graduating in May 2027. Recently, I built a Python RAG and semantic search
                prototype at Southwest Research Institute using LangChain, local embeddings,
                SQLite vector storage, Docker, and Ollama. I enjoy designing, building, and 
                refining systems that solve meaningful problems while expanding my technical skills. 
                From React and TypeScript applications to operating system internals, I am always eager to learn, 
                experiment, and improve.
            </p>
        </div>
        <div className="skill-strip" aria-label="Core skills">
            <span>Python</span>
            <span>C / x86</span>
            <span>React</span>
            <span>TypeScript</span>
            <span>Express</span>
            <span>SQL</span>
        </div>
                </div>

        </main>
        
    )
}
