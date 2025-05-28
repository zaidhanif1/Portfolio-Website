import Navigation from "./components/Navigation/Navigation.jsx"
import Footer from './components/Footer/Footer.jsx'
import Body from './components/Hero/Hero.jsx'
import ByteBistro from './components/Projects/ByteBistro.jsx'
import BarberBooking from './components/Projects/BarberBooking.jsx'

export default function App()
{
  return(
    <>
    <Navigation />
    <Body />
    <ByteBistro />
    <BarberBooking />
    <Footer />
    </>
  )
}