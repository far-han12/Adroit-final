'use client'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import { useState,useEffect } from 'react'
import sanity from '@/lib/sanity'
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const [data, setdata] = useState([])
    const getData = async () =>{
        const service = await sanity.fetch('*[_type == "service"]').then((res)=>{
            setdata(res)
        })
    }
    useEffect(() => {
        getData()
    }, [])

  const [isMenuOpen, setisMenuOpen] = useState(false)
  const pathname = usePathname ()

    useEffect(() => {
        setisMenuOpen(false)
    }, [pathname])
  return (
    <div className='header'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-2 col-md-2 col-sm-4 col-4'>
                    <Link href="/" className='logo'>
                        <img src='/logo.svg' alt='logo' />
                    </Link>
                </div>
                <div className={isMenuOpen? 'col-lg-8 col-md-8 col-sm-12 col-12 resmenu resmenuoverlap' : 'col-lg-8 col-md-8 col-sm-12 col-12 resmenu'}>
                    <ul className='menu '>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <a>Services</a>
                            <FontAwesomeIcon icon={faAngleDown} />
                            <div className='submenu'>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-lg-4'>
                                            <h2>Personalised Mentorship</h2>
                                        </div>
                                        {data?.map((item,index)=>(
                                            <div className='col-lg-4' key={index}>
                                                <Link href={`/services/${item?.slug.current}`} className='submenu-item-box'>
                                                    <h4>{item?.serviceName}</h4>
                                                    <img src='/right-arrow.svg' />
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link href="/scholars/Scholars">Scholars</Link>
                        </li>
                        <li>
                            <Link href="/reviews/Reviews">Reviews</Link>
                        </li>
                        <li>
                            <Link href="/blog">Resources</Link>
                        </li>
                    </ul>
                </div>
                <div className='col-lg-2 col-md-2 col-sm-8 col-8 d-flex justify-content-end align-items-center'>
                    <Link href="/" className='btn theme-btn'>
                        Apply Now
                    </Link>
                    <img src='/bars.svg' onClick={()=>setisMenuOpen(!isMenuOpen)} className='hamburger-icon'/>
                </div>
            </div>
        </div>
    </div>
  )
}
