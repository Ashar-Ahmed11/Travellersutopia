import React from 'react'

const Destionations = () => {

    const destinationList= [
        {title:"United States",image:"https://images.unsplash.com/photo-1508433957232-3107f5fd5995?q=80&w=1486&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        {title:"Turkey",image:"https://images.unsplash.com/photo-1605581810011-c6d684e7ca22?q=80&w=1438&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        {title:"United Arab Emirates",image:"https://images.unsplash.com/photo-1620767996534-ba882b75e971?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        {title:"Estonia",image:"https://images.unsplash.com/photo-1564951537954-29dd59397b90?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        {title:"Kyrgyzstan",image:"https://images.unsplash.com/photo-1629339569419-4af602a862ca?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        {title:"Bulgaria",image:"https://images.unsplash.com/photo-1601152888642-f2f1b5ee0ca2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        {title:"Greece",image:"https://images.unsplash.com/photo-1598395927056-8d895e701c3b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        {title:"Italy",image:"https://images.unsplash.com/photo-1515859005217-8a1f08870f59?q=80&w=1410&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        {title:"Czech Republic",image:"https://images.unsplash.com/photo-1556715371-6264bf5f03ba?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    ]
  return (
    <div className='container p-4 py-5'>
        <div className='pb-3'>
        <h2 style={{fontFamily:'Montserrat',fontWeight:"bold"}}>Top Destinations</h2>
        <h3 style={{opacity: 0.9}}>It is a long established fact that a reader</h3>
        </div>
        <div className="row">
           { destinationList.map((e)=>{
            return<div className="col-12 col-md-4 p-2 ">
            <div style={{height:"300px"}}  className="card shadow-none border-0 rounded-3">
 
                <img  className='position-relative w-100 h-100 rounded-3' style={{objectFit:'cover'}} src={e.image} alt="" />
             
                <div style={{backgroundColor:"rgba(0,0,0,0.3)"}} className="rounded-3 position-absolute top-0 h-100 w-100">
                <div className="position-absolute top-0 d-flex align-items-center justify-content-center h-100 w-100">

                    <h1 className="text-center text-light">{e.title}</h1>
                </div>
                </div>
            </div>

        </div>
           })}

        </div>
    </div>
  )
}

export default Destionations