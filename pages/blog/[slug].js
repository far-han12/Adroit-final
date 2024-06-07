import React from 'react'
import sanity from '@/lib/sanity';
import imageUrlFor from '@/lib/imageUrlFor';
import { PortableText } from '@portabletext/react';

export default function Blog({data}) {
  return (
    <div className='blog-details'>
        <div>
            <div className='blog-details-image'>
                <img src={imageUrlFor(data?.mainImage)} className='w-100' />
            </div>
        </div>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-7'>
                    <div className='blog-details-left'>
                        <p><span>Author:</span> World of Gizzy Team</p>
                        <h1>
                            {data?.title}
                            <p>{data?.subTitle}</p>
                        </h1>
                        <div className='single-block-blog'>
                            <PortableText value={data?.body} />
                        </div>
                    </div>
                </div>
                <div className='col-lg-5'>
                    <div className='blog-details-right'>
                        <h3>Join the World of Gizzy Breeders Club</h3>
                        <p>Get access to the weekly newsletter all the dogs are purring about. Be the first to know about contests, events, and other tasty treats.</p>
                        <form>
                            <input type="text" className='form-control' placeholder='Email' />
                            <button className='btn'>Join now</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export async function getStaticProps(context) {
	const slug = context.params.slug;
	const karma = `*[_type == 'blog'&& slug.current=="${slug}"]`;
	const blogs = await sanity.fetch(karma);
	return {
		props: { data: blogs[0] },
		revalidate: 100, // In seconds
	};
}
export async function getStaticPaths() {
	const blogs = await sanity.fetch('*[_type == "blog"]');
	const paths = blogs.map((event) => ({
		params: { slug: event.slug.current },
	}));
	return { paths, fallback: "blocking" };
}
