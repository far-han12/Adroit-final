import Link from 'next/link';
import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function Servicesection() {
  return (
    <div className='service'>
      <div className='container'>
        <div className='service-inner'>
          <h2>Guiding students from the ground up</h2>
          <p>The number of applicants to the Top 50 American Colleges range from 20,000 to 50,000 in each institution, and only 1 to 2% international.</p>

          <div className='service-tabs'>
            <Tabs
                defaultActiveKey="application"
                id="uncontrolled-tab-example"
                className="mb-3"
                >
                <Tab eventKey="application" title="Application">
                    <div className='tab-inner'>
                      <div className='row'>
                        <div className='col-lg-6'>
                          <div className='tab-inner-left'>
                            <div className='tab-inner-left-top'>
                              <h2>Personalised Application Mentorship</h2>
                              <p>Guiding students from the ground up The number of applicants to the Top 50 American Colleges range from 20,000 to 50,000 in each institution, and only 1 to 2% international.</p>
                            </div>
                            <div className='tab-inner-left-bottom'>
                              <div className='service-tags'>
                                <Link href='/'>Essay Brainstorming Sessions</Link>
                                <Link href='/'>Essay Reviews</Link>
                                <Link href='/'>College Fit Assessment</Link>
                                <Link href='/'>Writing Skills Improvement</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='col-lg-6'>
                          <div className='tab-inner-right'>
                            <img src='/service.svg' alt='service' className='w-100' />
                          </div>
                        </div>
                      </div>
                    </div>
                </Tab>
                <Tab eventKey="Testing" title="Testing">
                    
                </Tab>
                <Tab eventKey="Extra-Curricular" title="Extra-Curricular">
                    Tab content for Contact
                </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
