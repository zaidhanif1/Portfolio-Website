import "./BarberBooking.css"
import barberImgOne from '../../assets/barberwebsite/barber-one.png'
import barberImgTwo from '../../assets/barberwebsite/barber-two.png'

export default function BarberBooking()

{
    return(
            <div className="barber-website-div">
                <div className="barber-images">
                    <img className="barber-img-one" src={barberImgOne} alt="Appointment Booking Site Project ScreenShot One" />
                    <img className="barber-img-two" src={barberImgTwo} alt="Appointment Booking Site Project ScreenShot Two" />

                </div>
                <div className="barber-p">
                    <p className="barber-desc"> 
                    ZCutz was a foundational project built while I was learning the
                    basics of HTML, CSS, and JavaScript. 
                    It includes a contact form that initially used
                    various &lt;input&gt; types and integrated EmailJS to handle 
                    submissions via a button click. However, to improve functionality and user experience,
                    I ultimately embedded a prebuilt form application into the page.  
                     </p>
                </div>



            </div>

    )
}