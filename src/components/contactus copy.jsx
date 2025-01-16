import React from 'react'
import ContactUsCarousal from './contactuscarousal'
import carousalImage from './images/aboutus.png'
import Footer from './footer'
const AboutUs = () => {
    return (
        <div>
            <ContactUsCarousal upackage={"About Us"} image={carousalImage} />
            <div className="container my-5">
                <h2 style={{ fontFamily: 'Montserrat', fontWeight: "bold", color: "#BB332F" }}>Welcome to e-Safar Travels and Tours</h2>
                <p style={{ opacity: 0.8 }}><b style={{ color: "#BB332F" }}>e-Safar Travel & Tours</b> are one of the leading Tour Operators in Pakistan, providing comprehensive services for groups and individuals from and to the country. We provide you with the flexibility of purchasing a customized independent tour or a packaged group of departure, and service all of your travel & booking questions through our expert consultant staff at all international & domestic tourist attraction locations, all major cities including Northern Areas of Pakistan. Travel includes activities like international & domestic holiday tour programs for honeymoon couples, families, students, large groups, national & multinational companies, foreigners and Pakistan’s living abroad.</p>
                <h2 className='my-4' style={{ fontFamily: 'Montserrat', fontWeight: "bold" }}>Contact Details</h2>

                <div class="accordion" id="accordionPanelsStayOpenExample">
                    <div class="accordion-item my-3">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Director Message
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show">
                            <div class="accordion-body">
                                <strong>Dear Travel Partners,</strong>
                                <br />
                                <p>I cordially welcome you to the family of e-Safar Travel & Tours. The aim of this welcome note is to introduce our company and services to your kind self-hoping for future cooperation. Our services are based on strict standards to guarantee product quality that accepts no compromises; it is the key to our success. We here below attach a brief summary of what our agency provides and what it is capable of doing. Nevertheless, we are aware that putting words on paper might not give enough appreciation but a simple idea. Therefore, we would take pride to serve you, and you will see how different our services are.</p>
                                <p>Keeping our vision, “value for money & client satisfaction” as a compass. The number of passengers serviced annually today is more than ten times higher than that we serviced on an annual basis when we first started up. Through continuous investments in contemporary travel-related technology and quality assurance, e-Safar Travel & Tours have positioned itself today as one of the leading Travel agency, capable of meeting any Tour Operator’s requirement.</p>
                                <p>We invite you to share our vision and benefit from our expertise, professionalism, flexibility, personalized approach, strong purchasing power, and comprehensive product portfolio. In the following pages, we hope that we will give you an overview of our organization, history, services, and key persons, and you will give us the opportunity to examine together the areas where we could work on a fruitful and mutually beneficial basis in the future.</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item my-3">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Mission
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse">
                            <div class="accordion-body">
                                <p>e-Safar Travel & Tours endeavor to be the leading travel and related services company of choice by providing premier services and innovative options to its customers.</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item my-3">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Vision
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse">
                            <div class="accordion-body">
                                <p>e-Safar Travel & Tours is a reputable and highly regarded market leader, but we keep aiming for continued success in the travel and tourism industry. Our vision is to be the leader in the Travel & Tourism industry locally and eventually worldwide.</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item my-3">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                Accommodation
                            </button>
                        </h2>
                        <div id="collapseFour" class="accordion-collapse collapse">
                            <div class="accordion-body">
                                <p>e-Safar Travel & Tours provide you with a worldwide selection of accommodation of all categories (from low-budget self-catering units to exclusive deluxe hotels) at the most competitive conditions.</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item my-3">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                Pilgrim Services
                            </button>
                        </h2>
                        <div id="collapseFive" class="accordion-collapse collapse">
                            <div class="accordion-body">
                                <p>“In it are clear signs [such as] the standing place of Ibraheem. And whoever enters it shall be safe. And [due] to Allah from the people is a pilgrimage to the House – for whoever is able to find thereto a way. But whoever disbelieves – then indeed, Allah is free from need of the worlds.” (Al-Quran: Verse 97, Surah Al-Imran)</p>
                                <p>One of the greatest achievements in the life of a devout Muslim is visiting the Holy Mosque at Makkah for the performance of Hajj or Umrah. Systematic, orderly, and comfort-conscious people always look forward to specialized services wherever they go. e-Safar offers a number of travel packages for pilgrims wishing to perform Hajj and Umrah. Our experienced and courteous team takes care of all matters concerning traveling accommodations and meals in order to allow pilgrims to focus completely on performing Hajj and Umrah. Our various Umrah packages are designed keeping in mind all your requirements for this spiritual trip. Our group is guided by religious scholars who provide guidance to the pilgrims before and during the performance of Umrah and Hajj. When you choose e-Safar, you will experience our unparalleled care and hospitality, making you feel that everyone is solely dedicated to serving you and is at your disposal to make your stay calm, peaceful, organized, and comfortable through perfection and expertise.</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item my-3">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                Visa Assistance
                            </button>
                        </h2>
                        <div id="collapseSix" class="accordion-collapse collapse">
                            <div class="accordion-body">
                                <p>e-Safar Travel and Tours understand that the process of acquiring a visa for any country is quite time-consuming and tiresome. We are truly a service entity engaged in the business of providing a full range of visa assistance services. Visa services of e-Safar is a dedicated operation for our valued corporate and leisure travelers. Our services include guiding an applicant through the entire application process by providing relevant visa information, timely dispatch and collection of passports from the concerned embassies, and keeping an applicant informed throughout the whole procedure. At e-Safar Travel and Tours, we have agents who specialize in international travel, so we know what’s required for travel between various countries even when those requirements rapidly change.</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item my-3">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                Why e-Safar?
                            </button>
                        </h2>
                        <div id="collapseSeven" class="accordion-collapse collapse">
                            <div class="accordion-body">
                                <p>We love what we do, we care, and we strive to create excellence in travel for you, every time. This is our philosophy and commitment. We know people, and we know places. Travel is all about putting knowledge to work, to make your favorite destination available for truly memorable experiences from start to finish.</p>
                            </div>
                        </div>
                    </div>
                </div>




            </div >
            <Footer />

        </div >
    )
}

export default AboutUs