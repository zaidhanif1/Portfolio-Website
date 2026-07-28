import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import Navigation from '../../components/Navigation/Navigation.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import landingImg from '../../assets/momentum/HomeMomentum.png'
import dashboardImg from '../../assets/momentum/MomentumDashboard.png'
import profileImg from '../../assets/momentum/MomentumProfile.png'
import '../../components/Projects/Projects.css'
import './ProjectPage.css'

const highlights = [
    'Implemented authenticated sessions with short-lived access tokens, 90-day refresh tokens, and server-side session revocation.',
    'Built streak-tracking logic that normalizes workout timestamps into unique calendar dates for consistent progress calculations.',
    'Led an eight-person Agile team by breaking requirements into scoped tasks and coordinating delivery across the application.'
]

const stack = ['React', 'TypeScript', 'Express', 'MySQL', 'JWT', 'REST API']

const screenshots = [
    {
        src: dashboardImg,
        alt: 'Momentum fitness dashboard showing workout progress and activity information'
    },
    {
        src: profileImg,
        alt: 'Momentum user profile page with account and fitness information'
    }
]

export default function MomentumPage()
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
                            <p className="project-eyebrow">Team software project - Fitness tracker</p>
                        </div>
                        <h1>Momentum</h1>
                        <p className="project-lede">
                            A full-stack workout tracker that helps users record activity,
                            monitor progress, and maintain consistent fitness streaks.
                        </p>
                    </header>
                </div>

                <figure className="project-media">
                    <img
                        src={landingImg}
                        alt="Momentum fitness tracker landing page"
                    />
                </figure>

                <div className="project-page-inner project-body">
                    <section className="project-section" aria-labelledby="overview-heading">
                        <h2 id="overview-heading">Overview</h2>
                        <p>
                            Momentum was built by an eight-person team as an authenticated
                            fitness platform. It combines a responsive React interface with an
                            Express REST API and a MySQL database secured over SSL, giving users
                            one place to manage workouts and track ongoing progress.
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

                {screenshots.map((screenshot) => (
                    <figure className="project-media project-media--secondary" key={screenshot.src}>
                        <img src={screenshot.src} alt={screenshot.alt} />
                    </figure>
                ))}
            </main>
            <Footer />
        </>
    )
}
