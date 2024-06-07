import Link from 'next/link'
import React from 'react'
import sanity from '@/lib/sanity';
import Singleblog from '@/components/Singleblog';
import imageUrlFor from '@/lib/imageUrlFor';

export default function Index({blogs}) {
  return (
    <div className='bloglist'>
        <div className='container'>
            <div className='bloglistinner'>
                {blogs?.map((blog, index)=>{
                    if (blog.highlight === false) {
                        let date = new Date(blog?._createdAt)
                        return (
                            <Link className='featured-blog mb-4' href={`/blog/${blog?.slug?.current}`} key={index}>
                                <div className='row'>
                                    <div className='col-lg-7'>
                                        <div className='image-wrapper'>
                                            <img src={imageUrlFor(blog?.mainImage)} className='h-100 w-100' />
                                        </div>
                                    </div>
                                    <div className='col-lg-5'>
                                        <div className='content'>
                                            <p>{date.toDateString()}</p>
                                            <h1>{blog?.title?.substring(0, 50)}</h1>
                                            <p>{blog?.subTitle?.substring(0, 100)}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    } else {
                        
                    }
                })}
                <div className='row'>
                    {blogs.map((blog, index)=>(
                        <Singleblog key={index} blog={blog} />
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export const getStaticProps = async () => {
	const bloginfo = await sanity.fetch('*[_type == "blog"]')
	return {
		props: { blogs:bloginfo },
		revalidate: 21600, // In seconds
	};
};
