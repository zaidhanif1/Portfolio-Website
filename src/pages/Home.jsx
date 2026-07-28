import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navigation from '../components/Navigation/Navigation.jsx'
import Footer from '../components/Footer/Footer.jsx'
import Body from '../components/Hero/Hero.jsx'
import FeaturedWork from '../components/Projects/Projects.jsx'

export default function Home()
{
    const { hash } = useLocation()

    useEffect(() => {
        if (!hash) return

        const id = hash.replace('#', '')
        const target = document.getElementById(id)
        if (!target) return

        target.scrollIntoView({ behavior: 'smooth' })
    }, [hash])

    return (
        <>
            <Navigation />
            <Body />
            <FeaturedWork />
            <Footer />
        </>
    )
}
