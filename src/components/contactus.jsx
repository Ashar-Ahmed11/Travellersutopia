import React from 'react'
import ContactUsCarousal from './contactuscarousal'
import carousalImage from './images/contactus.png'
import Footer from './footer'
const ContactUs = () => {
    return (
       <div>
       <ContactUsCarousal upackage={"Contact Us"} image={carousalImage}/>
        <div className="container my-5">
            {/* <h2 style={{ fontFamily: 'Montserrat', fontWeight: "bold" }}>Contact Us</h2> */}
            <p style={{opacity:0.8}}><b style={{color:"#BB332F"}}>e-Safar Travel & Tours</b> are one of the leading Tour Operators in Pakistan, providing comprehensive services for groups and individuals from and to the country. We provide you with the flexibility of purchasing a customized independent tour or a packaged group of departure, and service all of your travel & booking questions through our expert consultant staff at all international & domestic tourist attraction locations, all major cities including Northern Areas of Pakistan. Travel includes activities like international & domestic holiday tour programs for honeymoon couples, families, students, large groups, national & multinational companies, foreigners and Pakistan’s living abroad.</p>
            <h2 className='my-4' style={{ fontFamily: 'Montserrat', fontWeight: "bold",color:"#BB332F" }}>Contact Details</h2>

            <p><b>Phone Number:</b><a style={{ textDecoration: 'none' }} href="tel:+923355100991">+92-335-5100991</a></p>
            <p><b>PTCL Number:</b> <a style={{ textDecoration: 'none' }} href="tel:+922134992200">021-34992200</a></p>
            <p><b>Individual Email:</b><a style={{ textDecoration: 'none' }} href="mailto:mohamid@esafar.net"> mohamid@Esafar.net</a></p>
            <p><b>Business Email:</b><a style={{ textDecoration: 'none' }} href="mailto:mohamid@Esafar.net"> umrah@esafar.net</a></p>


        </div>
      <Footer />

        </div>
    )
}

export default ContactUs