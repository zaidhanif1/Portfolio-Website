import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import Navigation from '../../components/Navigation/Navigation.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import bootImg from '../../assets/mpx/BootLogoMPX.png'
import helpImg from '../../assets/mpx/HelpMPX.png'
import processesImg from '../../assets/mpx/ShowAllMPX.png'
import memoryImg from '../../assets/mpx/ShowAllocatedMemoryMPX.png'
import '../../components/Projects/Projects.css'
import './ProjectPage.css'
import './MPXOS.css'

const highlights = [
    'Bootstrapped protected-mode kernel infrastructure with a GDT, IDT, PIC, interrupt handling, and virtual memory paging.',
    'Implemented cooperative multitasking with process control blocks, scheduling queues, and an assembly context-switching ISR.',
    'Built a first-fit heap allocator with block splitting, adjacent-block merging, and commands for inspecting allocated memory.'
]

const stack = ['C', 'x86 Assembly', 'GCC', 'GDB', 'QEMU', 'GRUB']

const screenshots = [
    { src: helpImg, alt: 'MPX OS terminal displaying the built-in help command and available shell commands', caption: 'The command-line interface exposes process, memory, date, and system controls.' },
    { src: processesImg, alt: 'MPX OS terminal displaying active processes and their execution states', caption: 'Process inspection shows the scheduler queues and current state of each process.' },
    { src: memoryImg, alt: 'MPX OS terminal displaying allocated memory blocks', caption: 'Heap inspection reports allocated blocks managed by the custom allocator.' }
]

export default function MPXOSPage()
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
                            <p className="project-eyebrow">Systems programming - Bare-metal x86 kernel</p>
                        </div>
                        <h1>MPX Operating System</h1>
                        <p className="project-lede">
                            A command-driven operating system built from the ground up in a
                            freestanding environment, with custom process, memory, interrupt,
                            and I/O management.
                        </p>
                    </header>
                </div>

                <figure className="project-media">
                    <img src={bootImg} alt="MPX OS boot screen showing the MPX logo and terminal prompt" />
                </figure>

                <div className="project-page-inner project-body">
                    <section className="project-section" aria-labelledby="overview-heading">
                        <h2 id="overview-heading">Overview</h2>
                        <p>
                            MPX explores the foundations of an operating system without relying
                            on a host runtime. The kernel boots into a serial command handler and
                            coordinates low-level hardware setup, processes, memory, and system
                            services directly.
                        </p>
                    </section>

                    <section className="project-section" aria-labelledby="built-heading">
                        <h2 id="built-heading">What I built</h2>
                        <ul>
                            {highlights.map((item) => <li key={item}>{item}</li>)}
                        </ul>
                    </section>

                    <section className="project-section" aria-labelledby="stack-heading">
                        <h2 id="stack-heading">Stack</h2>
                        <ul className="project-stack" aria-label="Technologies used">
                            {stack.map((item) => <li key={item}>{item}</li>)}
                        </ul>
                    </section>
                </div>

                {screenshots.map((screenshot) => (
                    <figure className="project-media project-media--secondary project-media--captioned" key={screenshot.src}>
                        <img src={screenshot.src} alt={screenshot.alt} />
                        <figcaption className="project-media-caption">{screenshot.caption}</figcaption>
                    </figure>
                ))}
            </main>
            <Footer />
        </>
    )
}
