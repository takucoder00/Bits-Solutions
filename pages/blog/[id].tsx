import React from 'react'
import BlogCard2 from '../../components/blog/blogCard2'
import Layout from '../../components/Layout'

export default function BlogDetail() {
    return (
        <Layout>
            <div className="text-gray-600 body-font overflow-hidden mx-auto w-2/3 py-12 mb-12">
                <div className="container">
                    <div className=" border-b-2 pb-10">
                        <img alt="ecommerce" style={{ height: "35rem" }} className="w-full object-cover object-center rounded" src="https://dummyimage.com/400x400" />
                        <div className="w-full pt-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">CATEGORY</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">The Catcher in the Rye</h1>
                            <div className="flex mb-4">

                                <span className="flex py-2">
                                    <a className="text-gray-500">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a className="text-gray-500 ml-3">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </a>
                                    <a className="text-gray-500 ml-3">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                    </a>
                                </span>
                            </div>
                            <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>


                        </div>
                    </div>
                    <div className="mt-6">
                        <h2 className="w-full mb-4 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                            Other Stories
                        </h2>

                        <div className=" mt-4 md:flex">
                            <BlogCard2 />
                            <BlogCard2 />
                            <BlogCard2 />
                            <BlogCard2 />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
