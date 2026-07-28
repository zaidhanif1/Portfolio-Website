import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa'
import Navigation from '../../components/Navigation/Navigation.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import heroImg from '../../assets/bytebistro/byteBistroOne.png'
import kitchenImg from '../../assets/bytebistro/byteBistroTwo.png'
import '../../components/Projects/Projects.css'
import './ProjectPage.css'
import './ByteBistro.css'

const LIVE_URL = 'https://bytebistro.netlify.app/'
const GITHUB_URL = 'https://github.com/zaidhanif1/ByteBistro'

const highlights = [
    'Integrated Google Gemini for recipe generation and Hugging Face Stable Diffusion for food illustrations.',
    'Implemented JWT authentication, PostgreSQL persistence, and Supabase Storage caching for generated images.',
    'Built responsive React UI states with theme switching, Framer Motion interactions, and accessibility-minded controls.'
]

const stack = ['React', 'Express', 'PostgreSQL', 'Gemini', 'Hugging Face', 'Supabase']

export default function ByteBistroPage()
{
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Navigation />
            <main className="project-page">
                <div className="project-page-inner">
                    <Link to="/#byte-bistro-div" className="project-back">
                        <FaArrowLeft aria-hidden="true" />
                        Back to Featured Work
                    </Link>

                    <header className="project-hero">
                        <div className="project-hero-top">
                            <p className="project-eyebrow">Live · Full-stack product</p>
                            <span className="live-tag">Live</span>
                        </div>
                        <h1>ByteBistro</h1>
                        <p className="project-lede">
                            An AI recipe assistant that turns available ingredients into meals,
                            illustrations, and saved history.
                        </p>
                        <div className="project-actions">
                            <a
                                className="featured-link featured-link--primary"
                                href={LIVE_URL}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaExternalLinkAlt aria-hidden="true" />
                                Try the app
                            </a>
                            <a
                                className="featured-link"
                                href={GITHUB_URL}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaGithub aria-hidden="true" />
                                GitHub
                            </a>
                        </div>
                    </header>
                </div>

                <figure className="project-media">
                    <img
                        src={heroImg}
                        alt="ByteBistro landing page with chef illustration and sign up options"
                    />
                </figure>

                <div className="project-page-inner project-body">
                    <section className="project-section" aria-labelledby="overview-heading">
                        <h2 id="overview-heading">Overview</h2>
                        <p>
                            People waste groceries because they don't know what to cook.
                            ByteBistro takes an ingredient list, generates a recipe with Gemini,
                            creates a food image, and stores the result for signed-in users.
                        </p>
                    </section>

                    <section className="project-section" aria-labelledby="built-heading">
                        <h2 id="built-heading">What I built</h2>
                        <ul>
                            {highlights.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="project-section" aria-labelledby="stack-heading">
                        <h2 id="stack-heading">Stack</h2>
                        <ul className="project-stack" aria-label="Technologies used">
                            {stack.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </section>
                </div>

                <figure className="project-media project-media--secondary">
                    <img
                        src={kitchenImg}
                        alt="ByteBistro ingredient input screen asking what’s in your kitchen"
                    />
                </figure>

            </main>
            <Footer />
        </>
    )
}
