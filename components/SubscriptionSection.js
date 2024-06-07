import React from 'react'

export default function SubscriptionSection() {
  return (
    <div className='subscription' style={{background:"url(/subscription-banner.svg), linear-gradient(90deg, rgba(0, 0, 0, 0.60) 33.33%, rgba(0, 0, 0, 0.00) 100%)",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundBlendMode:"overlay"}}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='subscription-left'>
              <h2>Let’s work towards achieving your college endeavours!</h2>
              <form className='subscription-form'>
                <input placeholder='Your Email' />
                <button className='btn theme-btn'>Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
