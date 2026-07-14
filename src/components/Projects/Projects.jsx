import './ByteBistro.css'

const featuredWork = [
    {
        title: 'Southwest Research Institute',
        subtitle: 'Software Engineering Intern',
        meta: 'Python, LangChain, SQLite, sqlite-vec, SQLAlchemy, Docker, Ollama',
        description:
            'Built a local RAG and semantic search prototype that chunks documentation, creates embeddings, stores searchable vectors, and returns top-k source matches for user queries.',
        bullets: [
            'Modeled documents, chunks, and vector embeddings with checksum-based deduplication.',
            'Refactored ingestion, storage, and query flows into a modular QueryAPI with dataclasses, typed serialization, and structured logging.',
            'Added Pydantic-powered environment and CLI configuration for containerized local workflows.'
        ]
    },
    {
        title: 'MPX Operating System',
        subtitle: 'Bare-metal x86 kernel',
        meta: 'C, x86 Assembly',
        description:
            'Developed core OS functionality in a freestanding environment, including interrupt setup, paging, scheduling, memory allocation, and serial I/O.',
        bullets: [
            'Bootstrapped the GDT, IDT, PIC, and virtual memory paging with modeled RAM.',
            'Implemented cooperative multitasking with a custom assembly ISR that saves and restores register state.',
            'Built a first-fit heap allocator with block splitting and adjacent-block merging.'
        ]
    },
    {
        title: 'Momentum',
        subtitle: 'Fitness tracker and team software project',
        meta: 'React, TypeScript, Express, MySQL',
        description:
            'Led an eight-person team building a workout tracker with authenticated sessions, a REST API, and streak tracking backed by a MySQL database over SSL.',
        bullets: [
            'Implemented short-lived access tokens, 90-day refresh tokens, and server-side session revocation.',
            'Wrote streak logic that normalizes workout timestamps into unique calendar dates.',
            'Broke requirements into scoped Agile tasks and helped coordinate delivery across the team.'
        ]
    },
    {
        title: 'ByteBistro',
        subtitle: 'AI-powered recipe assistant',
        meta: 'React, Express, PostgreSQL, Gemini, Hugging Face, Supabase',
        description:
            'Built a full-stack recipe assistant that turns available ingredients into generated recipes, food illustrations, and saved user history.',
        bullets: [
            'Integrated Google Gemini for recipe generation and Hugging Face Stable Diffusion for food illustrations.',
            'Implemented JWT authentication, PostgreSQL persistence, and Supabase Storage caching for generated images.',
            'Built responsive React UI states with theme switching, Framer Motion interactions, and accessibility-minded controls.'
        ]
    }
]

export default function FeaturedWork()
{
    return(
<div id='byte-bistro-div'>
    <div className='projects-header'>
    <h1>Featured Work</h1>
    <p>Internship work, systems projects, and full-stack products from my updated resume.</p>
    </div>

    <section className="featured-grid" aria-label="Featured resume work">
        {featuredWork.map((work) => (
            <article className="featured-card" key={work.title}>
                <p className="featured-eyebrow">{work.subtitle}</p>
                <h2>{work.title}</h2>
                <p className="featured-meta">{work.meta}</p>
                <p className="featured-description">{work.description}</p>
                <ul>
                    {work.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                    ))}
                </ul>
            </article>
        ))}
    </section>
</div>
    )
}
