import React, { useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Link from 'next/link';
import sanity from '@/lib/sanity'
import { PortableText } from '@portabletext/react';
import imageUrlFor from '@/lib/imageUrlFor';
import Head from 'next/head';


export default function Stories({institute, casestudy}) {
  const [searchQuery, setsearchQuery] = useState("")
  return (
    <>
    <Head>
        <title>Adroit - Success of our students</title>
        <meta name="keywords" content="Adroit, success" />
        <meta name="description" content="Cornell College is a private liberal arts college located in Mount Vernon, Iowa. It was founded in 1853 and has a total undergraduate enrollment of 1,045 students. Cornell College is known for its One Course At A Time (OCAAT) curriculum, which allows students to focus on one course for 18 days at a time."/>
        <meta name="author" content="Adroit"/>
        
        <meta property="og:image"  content="/stories-banner.svg" />
        <meta property="og:image:width"  content="1200" />
        <meta property="og:image:height"  content="1200" />
        <meta property="og:title" content="Adroit" />
        <meta property="og:description" content="Cornell College is a private liberal arts college located in Mount Vernon, Iowa. It was founded in 1853 and has a total undergraduate enrollment of 1,045 students. Cornell College is known for its One Course At A Time (OCAAT) curriculum, which allows students to focus on one course for 18 days at a time." />
        <meta property="og:url" content="https://adroit.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Adroit" />
        <meta property="og:updated_time" content="" />
        
        <meta property="article:publisher" content="" />
        <meta property="article:author" content="" />
        <meta property="article:published_time" content="" />
        <meta property="article:modified_time" content="" />
        
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://adroit.com" />
        <meta property="twitter:site" content="Adroit" />
        <meta property="twitter:title" content="Adroit" />
        <meta property="twitter:description" content="Cornell College is a private liberal arts college located in Mount Vernon, Iowa. It was founded in 1853 and has a total undergraduate enrollment of 1,045 students. Cornell College is known for its One Course At A Time (OCAAT) curriculum, which allows students to focus on one course for 18 days at a time." />
        <meta property="twitter:image" content="/stories-banner.svg" />
        <meta property="twitter:image:width" content="1200" />
        <meta property="twitter:image:height" content="1200" />
        <link rel="canonical" href="https://adroit.com" />
        <link rel="alternate" href="https://adroit.com" hrefLang="bn-BD" />
        <meta property="al:ios:url" content="" />

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet"/>
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
        <link rel="icon" type="image/png" sizes="192x192"  href="/favicon.png"/>
        <link rel="preload" href="https://firebasestorage.googleapis.com/v0/b/dimsumtown-e9c0f.appspot.com/o/Dimsum.webm?alt=media&token=4be50470-0c07-4ed6-a691-6624b2815329" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
    <div className='stories'>
        <div className='stories-banner' style={{background:"url(/stories-banner.svg), linear-gradient(180deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.80) 100%)",backgroundBlendMode:"overlay",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
            <div className='container'>
                <h2>Cornell College</h2>
                <p>Cornell College is a private liberal arts college located in Mount Vernon, Iowa. It was founded in 1853 and has a total undergraduate enrollment of 1,045 students. Cornell College is known for its One Course At A Time (OCAAT) curriculum, which allows students to focus on one course for 18 days at a time.</p>
            </div>
        </div>
        <div className='top-search'>
            <div className='container'>
                <div className='form-group'>
                    <input type='text' onChange={(e)=>setsearchQuery(e.target.value)} className='form-control' placeholder='Search College Acceptances' />
                    <button type='submit' className='btn'><img src='/search.svg' /></button>
                </div>
            </div>
        </div>
        <div className='service-tabs'>
            <div className='container'>
                <Tabs
                    defaultActiveKey="allcollege"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="allcollege" title="All College">
                        {casestudy?.map((casestudy,index)=>(
                            <div key={index} className='caseStudyCard'>
                                <div className='row'>
                                    <div className='col-lg-9'>
                                        <div className='caseStudyCartContent d-flex justify-content-between align-items-start h-100' style={{flexDirection:"column"}}>
                                            <div>
                                                <h2><PortableText value={casestudy?.bodyTitle}  /></h2>
                                                <PortableText value={casestudy?.body} />
                                            </div>
                                            <Link href={`/story/${casestudy?.slug.current}`} className='btn theme-btn' >Read Case Study</Link>
                                        </div>
                                    </div>
                                    <div className='col-lg-3'>
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
                        ))}
                    </Tab>
                    {institute?.filter(college=>{
                        if (searchQuery === "") {
                            return college;
                        } else if(college.title.toLowerCase().includes(searchQuery.toLowerCase())) {
                            return college
                        }
                    }).map((college, index)=>(
                        <Tab key={index} eventKey={college?._id} title={college?.title}>
                            {college?.caseStudy?.map((casestudy,index)=>{
                                if (searchQuery === "") {
                                    return(
                                        <div key={index} className='caseStudyCard'>
                                            <div className='row'>
                                                <div className='col-lg-9'>
                                                    <div className='caseStudyCartContent d-flex justify-content-between align-items-start h-100' style={{flexDirection:"column"}}>
                                                        <div>
                                                            <h2><PortableText value={casestudy?.bodyTitle}  /></h2>
                                                            <PortableText value={casestudy?.body} />
                                                        </div>
                                                        <Link href={`/story/${casestudy?.slug.current}`} className='btn theme-btn' >Read Case Study</Link>
                                                    </div>
                                                </div>
                                                <div className='col-lg-3'>
                                                    <div className='caseStudyImage'>
                                                        <div className='image-top'>
                                                            <img src={imageUrlFor(casestudy?.mainImage)} />
                                                        </div>
                                                        <div className='casestudyinfo'>
                                                            <div>
                                                                <h4>{casestudy?.studentName}</h4>
                                                                <p>Class of {casestudy?.acceptYear}</p>
                                                            </div>
                                                            <img src={imageUrlFor(college?.logo)} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                } else if(casestudy?.bodyTitle.includes(searchQuery.toLowerCase())) {
                                    return (
                                        <div key={index} className='caseStudyCard'>
                                            <div className='row'>
                                                <div className='col-lg-9'>
                                                    <div className='caseStudyCartContent d-flex justify-content-between align-items-start h-100' style={{flexDirection:"column"}}>
                                                        <div>
                                                            <h2><PortableText value={casestudy?.bodyTitle}  /></h2>
                                                            <PortableText value={casestudy?.body} />
                                                        </div>
                                                        <Link href={`/story/${casestudy?.slug.current}`} className='btn theme-btn' >Read Case Study</Link>
                                                    </div>
                                                </div>
                                                <div className='col-lg-3'>
                                                    <div className='caseStudyImage'>
                                                        <div className='image-top'>
                                                            <img src={imageUrlFor(casestudy?.mainImage)} />
                                                        </div>
                                                        <div className='casestudyinfo'>
                                                            <div>
                                                                <h4>{casestudy?.studentName}</h4>
                                                                <p>Class of {casestudy?.acceptYear}</p>
                                                            </div>
                                                            <img src={imageUrlFor(college?.logo)} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })}
                        </Tab>
                    ))}
                </Tabs>
            </div>
        </div>
    </div>
    </>
  )
}

export const getStaticProps = async () => {
	const instituteInfo = await sanity.fetch('*[_type == "institute"]{...,caseStudy[]->}')
    const caseStudyInfo = await sanity.fetch('*[_type == "caseStudy"]{...,institute->,institutes[]->}')
	return {
		props: { institute: instituteInfo, casestudy: caseStudyInfo },
		revalidate: 21600, // In seconds
	};
};