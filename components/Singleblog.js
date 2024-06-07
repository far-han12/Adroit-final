import React from 'react'
import Link from 'next/link';
import imageUrlFor from '@/lib/imageUrlFor';

export default function Singleblog({blog}) {
  let date = new Date(blog?._createdAt)
  return (
    <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
        <Link className='single-blog' href={`/blog/${blog?.slug?.current}`}>
            <div className='singleblogimg'>
                <img src={imageUrlFor(blog?.mainImage)} />
            </div>
            <div className='single-blog-content'>
                <p>{date.toDateString()}</p>
                <h1>{blog?.title?.substring(0, 50)}</h1>
                <p>{blog?.subTitle?.substring(0, 100)}</p>
            </div>
        </Link>
    </div>
  )
}
