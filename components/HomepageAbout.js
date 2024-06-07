import React from 'react'
import CountUp from 'react-countup';

export default function HomepageAbout() {

  return (
    <div className='homepageabout'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6'>
                  <div className='about-left'>
                    <h2>Accelerating Prodigies</h2>
                    <p>Studying abroad is a valuable experience that enhances ones global perspective and personal development, but it requires careful planning and financial resources requires careful planning.</p>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='about-right'>
                    <div className='single-info'>
                      <h3><CountUp end={1000} duration={20} />+</h3>
                      <p>Acceptances received</p>
                    </div>
                    <div className='single-info'>
                      <h3><CountUp end={5} duration={20} /> Million</h3>
                      <p>Total Financial aid</p>
                    </div>
                    <div className='single-info'>
                      <h3><CountUp end={20} duration={20} /></h3>
                      <p>ivy league acceptances</p>
                    </div>
                    <div className='single-info'>
                      <h3><CountUp end={500} duration={20} />+</h3>
                      <p>students served</p>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}
