import imageUrlFor from '@/lib/imageUrlFor';
import React from 'react'
import Marquee from "react-fast-marquee";

export default function HeroSlider({caseStudy}) {
  return (
    <div className='hero-slider'>
        <Marquee pauseOnHover="true" >
            <div className='hero-slider-inner'>
                {caseStudy?.map((c)=>(
                    <div className='single-hero-slider' key={c?._id}>
                        <img src={imageUrlFor(c.mainImage)} className='w-100' />
                    </div>
                ))}
            </div>
        </Marquee>
    </div>
  )
}
