import "./BarberBooking.css"
import barberImgOne from '../../assets/barberwebsite/barber-one.png'
import barberImgTwo from '../../assets/barberwebsite/barber-two.png'

export default function BarberBooking()

{
    return(
            <div className="barber-website-div">
                <h1 className = 'barber-header'>ZCutz</h1>
                    <a target = '_blank' href="https://zcutz.netlify.app/">
                    <img className="barber-img-one" src={barberImgOne} 
                    alt="Appointment Booking Site Project ScreenShot One" />
                    </a>
                    <a target = '_blank' href="https://zcutz.netlify.app/">
                    <img className="barber-img-two" src={barberImgTwo} 
                    alt="Appointment Booking Site Project ScreenShot Two" />
                     </a>
                    
                    <p className="barber-desc"> 
                    ZCutz is a static HTML/CSS/JS booking site that embeds Cal.com’s 
                    widget so users pick a slot and get email confirmations. 
                    I used semantic markup, BEM-style class names, and ES6 modules 
                    for modular, readable code—learning how consistent naming, clear comments, 
                    and open-source embeds turn a simple site into a responsive and functional project.</p>
            </div>

    )
}