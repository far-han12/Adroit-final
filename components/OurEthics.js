import React from 'react'

export default function OurEthics({banner}) {
  return (
    <div className='our-ethics' style={{background:"url(/about4.svg), linear-gradient(180deg, rgba(0, 0, 0, 0.60) 14.58%, rgba(0, 0, 0, 0.40) 52.60%, rgba(0, 0, 0, 0.71) 92.71%)",backgroundBlendMode:"overlay",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
        <div className='container'>
            <div className='top'>
                <h4>Our ethics</h4>
                <h1>{banner?.herotitle}</h1>
            </div>
            <div className='bottom'>
                <h5>{banner?.heroheading}</h5>
                <p>{banner?.herobody}</p>
            </div>
        </div>
    </div>
  )
}
