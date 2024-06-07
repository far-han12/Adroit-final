import imageUrlFor from '@/lib/imageUrlFor';
import React from 'react'
import Slider from "react-slick";

export default function Testimonial({testimonial}) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='testimonial'>
      <div className='container'>
          <div className='section-header'>
            <h1>The most outstanding<br/> acceptances in Bangladesh</h1>
            <p>The number of applicants to the Top 50 American Colleges range from 20,000 to 50,000 in each institution, and only 1 to 2% international.</p>
          </div>  
      </div>
      <div style={{overflow:"hidden"}}>
        <div className='testimonial-slider'>
          <Slider {...settings}>
              {testimonial?.map((t,index)=>(
                <div className='single-testimonial' key={index}>
                  <div className='testimonial-img'>
                    <img src={imageUrlFor(t.mainImage)} />
                  </div>
                  <div className='testimonial-info'>
                    <p>{t.Description}</p>
                    <div className='testimonial-reviewer'>
                      <h5>{t.Name}</h5>
                      <span>{t.ClassAndCollege}</span>
                    </div>
                  </div>
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}
