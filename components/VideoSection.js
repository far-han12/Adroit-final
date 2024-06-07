import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function VideoSection() {
  useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, [])
  return (
    <div className='videosection'>
      <div className='container'>
        <div className='videosection-inner'>
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/UXL6knVsaBU?si=hyvDvuuTOOUAoawr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <div className='videonotes' data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="100">
            <h3>Stand out with Adroit</h3>
            <p>The Top 50 American Colleges receive 20,000 to 50,000 applicants per institution, with a low acceptance rate of 1 to 2% for international students, and even lower for those requiring financial aid. To stand out, applicants must excel in extracurricular activities and standardized tests to increase their chances of being in the top 1 percent of applicants.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
