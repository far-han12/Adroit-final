import AboutInfo from '@/components/AboutInfo'
import AboutInfo2 from '@/components/AboutInfo2'
import HeroAboutSection from '@/components/HeroAboutSection'
import OurEthics from '@/components/OurEthics'
import WhatWeDo from '@/components/WhatWeDo'
import React from 'react'
import Head from 'next/head'

export default function About() {
  return (
    <div>
        <Head>
          <title>Adroit - About</title>
          <meta name="keywords" content="Adroit, about" />
          <meta name="description" content="We help prodigies to shoot for the stars"/>
          <meta name="author" content="Adroit"/>
          
          <meta property="og:image"  content="/about-banner.svg" />
          <meta property="og:image:width"  content="1200" />
          <meta property="og:image:height"  content="1200" />
          <meta property="og:title" content="Adroit" />
          <meta property="og:description" content="We help prodigies to shoot for the stars" />
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
          <meta property="twitter:description" content="We help prodigies to shoot for the stars" />
          <meta property="twitter:image" content="/about-banner.svg" />
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
        <HeroAboutSection />
        <div className='about-hero-banner'>
            <img src='/about-banner.svg' className='w-100' />
        </div>
        <AboutInfo />
        <WhatWeDo />
        <AboutInfo2/>
        <OurEthics />
    </div>
  )
}
