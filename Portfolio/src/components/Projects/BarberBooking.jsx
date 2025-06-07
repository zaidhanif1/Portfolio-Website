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
                    ZCutz was a project I built
                    while learning the fundamentals
                    of web developement. Embedding cal.com, I 
                    created an appointment booking site.  
                    It taught me the value of clean, 
                    well-documented code and introduced
                    me to the power of leveraging open-source tools.</p>
            </div>

    )
}