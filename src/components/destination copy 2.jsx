import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Button } from '@material-ui/core'
import { useState } from 'react';
const DestinationList = ({ theArr, anotherArr }) => {
  const [packageType, setPackageType] = useState("normal")
  const [date, setDate] = useState("10")

  console.log(theArr);

  return (
    <div className='container p-4 py-5'>
      <div className='pb-3'>
        <h2 className='pb-3' style={{ fontFamily: 'Montserrat', fontWeight: "bold",color:'#BB332F' }}>Select Package Type</h2>
        {/* <div className="d-flex justify-content-center">
          <div>

            <Button onClick={() => packageType !== "normal" && setPackageType("normal")} style={{ color: packageType == "normal" ? "white" : "#BB332F", backgroundColor: packageType == "normal" ? "#BB332F" : "white", border: `1px solid #BB332F` }} className="btn my-2 mx-2">Umrah Packages</Button>

          </div>
          <div>

            <Button onClick={() => packageType == "normal" && setPackageType("fixed")} style={{ color: packageType !== "normal" ? "white" : "#BB332F", backgroundColor: packageType !== "normal" ? "#BB332F" : "white", border: `1px solid #BB332F` }} className="btn my-2">Group Packages</Button>

          </div>
        </div> */}

        <div className="row">

          <Link onClick={() => window.scrollTo({ behavior: 'smooth', top: 0, left: 0 })} className="col-12 col-md-6 p-2 " to={`/regular-umrah`}>
            <div style={{ height: "300px" }} className="card shadow-none border-0 rounded-3">

              <img className='position-relative w-100 h-100 rounded-3' style={{ objectFit: 'cover' }} src={`https://res.cloudinary.com/dextrzp2q/image/fetch/f_webp/q_60/https://e-safarnet.web.app${theArr[3].image}`} alt="" />

              <div style={{ backgroundColor: "rgba(0,0,0,0.3)" }} className="rounded-3 position-absolute top-0 h-100 w-100">
                <div className="position-absolute top-0 d-flex align-items-center justify-content-center h-100 w-100">

                  <h1 className="text-center text-light"><b>Regular Umrah</b></h1>
                </div>
              </div>
            </div>

          </Link>

          <Link onClick={() => window.scrollTo({ behavior: 'smooth', top: 0, left: 0 })} className="col-12 col-md-6 p-2 " to={`/group-umrah`}>
            <div style={{ height: "300px" }} className="card shadow-none border-0 rounded-3">

              <img className='position-relative w-100 h-100 rounded-3' style={{ objectFit: 'cover' }} src={`https://res.cloudinary.com/dextrzp2q/image/fetch/f_webp/q_60/https://e-safarnet.web.app${theArr[1].image}`} alt="" />

              <div style={{ backgroundColor: "rgba(0,0,0,0.3)" }} className="rounded-3 position-absolute top-0 h-100 w-100">
                <div className="position-absolute top-0 d-flex align-items-center justify-content-center h-100 w-100">

                  <h1 className="text-center text-light"><b>Fixed Departure</b></h1>
                </div>
              </div>
            </div>

          </Link>

          <div></div>
        </div>

      </div>


      <div className='py-3'>
        <h2 className='pb-2' style={{ fontFamily: 'Montserrat', fontWeight: "bold",color:"#BB332F" }}>Who Are We?</h2>

    <p>e-Safar Travel & Tours is one of the leading Tour Operators in Pakistan, providing comprehensive services for groups and individuals from and to the country.</p>
     <p>We provide you with flexibility of purchasing a customized independent tour or a packaged group of departure, and service all of your travel & booking questions through our expert consultant staff at all international & domestic tourist attraction locations, all major cities including Northern Areas of Pakistan. Travel includes activities like international & domestic holiday tour programs for honeymoon couples, families, students, large groups, national & multi – national companies, foreigners and Pakistan’s living abroad.
     </p>
     <p style={{color:"#BB332F"}}><strong>Following are the projects of e-Safar i.e </strong>
     </p>

      <ul>
        <li>
      e-Safar Travel and Tours
        </li>
        <li>
        e-Journey Travel and Tours
        </li>
        <li>
        Booking Agora
        </li>
      </ul>
      
       
          <p className='text-center'><strong style={{color:"#BB332F"}}>Our motive is</strong> <br /> <strong>"Satisfy your Journey".</strong></p>
      </div>

    </div>
  )
}

export default DestinationList