import React from 'react'
import Link from 'next/link'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Herosection() {
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, [])
  return (
    <div className='hero-section' data-aos="fade-up">
        <div className='container'>
            <h1>Full fill Your Dream to <br/> <b>Study Abroad</b> </h1>
            <p>Studying abroad is a valuable experience that enhances ones global perspective and personal development, but it requires careful planning and financial resources.</p>
            <div className='hero-btns'>
                <Link href="/" className="btn theme-btn">
                    Apply Now
                </Link>
                <Link href="/" className="btn theme-btn-alt">
                    Contact Us
                </Link>
            </div>
        </div>
    </div>
  )
}
