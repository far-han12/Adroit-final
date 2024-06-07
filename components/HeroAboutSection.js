import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function HeroAboutSection() {
  useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, [])
  return (
    <div className='hero-section' data-aos="fade-down">
        <div className='container'>
            <h1>We help prodigies to<br/> <b>shoot for the stars</b> </h1>
            <p>Our vision is to empower Prodigies to succeed in their endeavors by providing them with the resources, guidance and personalized support required.</p>
        </div>
    </div>
  )
}
