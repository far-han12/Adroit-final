import React from 'react'

export default function AboutInfo2() {
  return (
    <div className='about-info'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-6'>
                    <div className='about-info-right'  data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" data-aos-easing="ease-in-out" style={{marginRight:"auto",marginLeft:"0"}}>
                        <h5>WHO we are</h5>
                        <h1>Adroit was born out of a desire to make admissions simpler. </h1>
                        <p>Adroit Education is a US College Consulting service that specializes in one-on-one college advising and aids in standout application preparation. We have been working with the most promising high-school students of Bangladesh and mentoring them to obtain admission into the best American Universities for 6+ years.</p>
                    </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-6'>
                    <img src='/about2.svg'/>
                </div>
            </div>
        </div>
    </div>
  )
}
