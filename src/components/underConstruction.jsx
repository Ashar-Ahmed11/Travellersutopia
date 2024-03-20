import React from 'react'

import { TypeAnimation } from 'react-type-animation'
const UnderConstruction = () => {
    return (
        <div>
            <div className=' hero-image'>

            </div>
            <div className='position-absolute h-100 d-flex justify-content-center align-items-center' style={{ top: '0', right: "0", left: "0" }}>
                <div className='d-flex justify-content-center align-items-center'>
                    <div style={{ height: "max-content", backgroundColor: "rgba(0,0,0,0.5)" }} className='card rounded-5 p-3 shadow-none text-light d-flex justify-content-center flex-column align-items-center'>
                        <div className='text-center'>
                            {/* <span>     WELCOME TO</span> */}
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed once, initially
                                    'VISIT',
                                    1000,
                                    'ENJOY',
                                    1000,
                                    'TRAVEL',
                                    1000,
                                    'EXPLORE',
                                    1000,
                                    'ADVENTURE',
                                    1000,
                                    'HOLIDAY',
                                    1000,
                                    'CULTURAL',
                                    1000,
                                    'INSPIRING',
                                    1000,
                                ]}
                                speed={50}
                                className='text-center  display-4'
                                // style={{ fontSize: '2em' }}
                                repeat={Infinity}
                            />
                        </div>
                        <div className='text-center h1 display-1' style={{ fontFamily: "lobster" }}>
                            <span>  Travellers Utopia</span>
                        </div>
                        <div className='text-center h1 display-4' style={{fontFamily:"'Montserrat'"}}>
                            <span>UNDER</span>
                        </div>
                        <div className='text-center h1 display-4' style={{fontFamily:"'Montserrat'"}}>
                            <span> CONSTRUCTION</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UnderConstruction