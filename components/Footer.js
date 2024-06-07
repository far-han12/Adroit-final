import Link from 'next/link'
import React from 'react'
import { useState,useEffect } from 'react'
import sanity from '@/lib/sanity'

export default function Footer() {
    const [data, setdata] = useState([])
    const getData = async () =>{
        const service = await sanity.fetch('*[_type == "service"]').then((res)=>{
            setdata(res)
        })
    }
    useEffect(() => {
        getData()
    }, [])
  return (
    <footer>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12'>
                    <Link href="/" className='footerlogo'>
                        <img src='/footerlogo.svg' alt='footerlogo' />
                    </Link>
                </div>
                <div className='col-lg-6'>
                    <p>The number of applicants to the Top 50 American Colleges range from 20,000 to 50,000 in each institution, and only 1 to 2% international.</p>
                </div>
                <div className='col-lg-6'>
                    <div className='row'>
                        <div className='col-lg-4 col-sm-4'>
                            <div className='footer-menu'>
                                <h5>Services</h5>
                                {data?.map((service,index)=>(
                                    <Link href={`/services/${service?.slug?.current}`} key={index}>{service?.name}</Link>
                                ))}
                            </div>
                        </div>
                        <div className='col-lg-4 col-sm-4'>
                            <div className='footer-menu'>
                                <h5>Explore</h5>
                                <Link href="/">About</Link>
                                <Link href="/">Success</Link>
                            </div>
                        </div>
                        <div className='col-lg-4 col-sm-4'>
                            <div className='footer-menu'>
                                <h5>Resources</h5>
                                <Link href="/">Privacy policy</Link>
                                <Link href="/">Terms of Serice</Link>
                                <Link href="/">Contact us</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-12 copyright'>
                    <div className='row'>
                        <div className='col-lg-6 col-sm-8'>
                            <p>Copyright © 2023 Adroit LTD. All rights reserved.</p>
                        </div>
                        <div className='col-lg-6 col-sm-4'>
                            <div className='social-media'>
                                <Link href="/">
                                    <img src='/instagram.svg' />
                                </Link>
                                <Link href="/">
                                    <img src='/facebook.svg' />
                                </Link>
                                <Link href="/">
                                    <img src='/linkedin.svg' />
                                </Link>
                                <Link href="/">
                                    <img src='/twitter.svg' />
                                </Link>
                                <Link href="/">
                                    <img src='/youtube.svg' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}
