import imageUrlFor from '@/lib/imageUrlFor';
import React from 'react'
import Marquee from "react-fast-marquee";

export default function Acceptence({institute}) {
  return (
    <div className='acceptence'>
      <div className='container'>
          <div className='section-header'>
            <h1>Acceptances since 2017</h1>
            <p>The number of applicants to the Top 50 American Colleges range from 20,000 to 50,000 in each institution, and only 1 to 2% international.</p>
          </div>
      </div>
      <div className='acceptence-slider'>
        <Marquee pauseOnHover="true" >
          <div className='acceptence-slider-inner'>
            {institute?.map((item, index)=>(
              <div className='acceptence-card' key={index}>
                <div className='acceptence-card-img'>
                <img src={imageUrlFor(item?.cardimage)}/>
                  <div className='acceptence-card-img-info'>
                    <h3>{item?.acceptance}</h3>
                    <p>Acceptances</p>
                  </div>
                </div>
                <div className='acceptence-card-info'>
                  <img src={imageUrlFor(item?.logo)}/>
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  )
}
