import React from 'react'
import Link from 'next/link'
import Slider from "react-slick";
import { PortableText } from '@portabletext/react';
import imageUrlFor from '@/lib/imageUrlFor';
import SingleCaseStudyCard from './SingleCaseStudyCard';

export default function CaseStudySlider({caseStudy}) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className='sliderCaseStudy'>
        <div className='container'>
            <h1>An experience of <br/> and for a lifetime</h1>
            <p>The number of applicants to the Top 50 American Colleges range from 20,000 to 50,000 in each institution, and only 1 to 2% international.</p>
            <Slider {...settings}>
                {caseStudy?.map((casestudy,index)=>(
                    <SingleCaseStudyCard casestudy={casestudy} key={index} />
                ))}
            </Slider>
        </div>
    </div>
  )
}
