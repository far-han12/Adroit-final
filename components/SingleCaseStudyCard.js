import imageUrlFor from '@/lib/imageUrlFor'
import React, { useState } from 'react'
import { PortableText } from '@portabletext/react'
import Link from 'next/link'

export default function SingleCaseStudyCard({casestudy}) {
   const [isOpen, setisOpen] = useState(false)
  return (
    <div className='caseStudyCard' onClick={()=>setisOpen(!isOpen)}>
        <div className='row'>
            <div className='col-lg-8'>
                <div className='caseStudyCartContent h-100 d-flex justify-content-between align-items-start' style={{flexDirection:"column"}}>
                    <div>
                        <h2><PortableText value={casestudy?.bodyTitle}  /></h2>
                        <PortableText value={casestudy?.body} />
                    </div>
                    <Link href={`/story/${casestudy?.slug.current}`} className='btn theme-btn' >Read Case Study</Link>
                </div>
            </div>
            <div className='col-lg-4'>
                <div className='caseStudyImage'>
                    <div className='image-top'>
                        <img src={imageUrlFor(casestudy?.mainImage)} />
                    </div>
                    <div className='casestudyinfo'>
                        <div>
                            <h4>{casestudy?.studentName}</h4>
                            <p>Class of {casestudy?.acceptYear}</p>
                        </div>
                        <img src={imageUrlFor(casestudy?.institute?.logo)} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
