import imageUrlFor from '@/lib/imageUrlFor'
import React from 'react'

export default function WhatWeDo({features}) {
  return (
    <div className='whatwedo'>
        <div className='container'>
            <div className='what-we-do-heading'>
                <h5 data-aos="fade-right" data-aos-delay="0" data-aos-easing="ease-in-out" >what we do</h5>
                <h1 data-aos="fade-right" data-aos-delay="500" data-aos-easing="ease-in-out" >We help students from ideation to execution</h1>
            </div>
            <div className='row'>
                {features?.feature?.map((item,index)=>(
                    <div className='col-lg-4' key={index}>
                        <div className='single-content'>
                            <img src={imageUrlFor(item?.mainImage)} />
                            <h4>{item?.title}</h4>
                            <p>
                                {item?.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
