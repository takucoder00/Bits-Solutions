import React from 'react'
import BlogCard from '../../components/blog/blogCard'
import Layout from '../../components/Layout'

export default function Blog() {
  return (
    <Layout>
      <div className="text-gray-600 body-font">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <h2 className="pl-4 mb-4 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            Blog
          </h2>

          <p className="pl-4 text-base text-gray-700 md:text-lg">
            Soak yourself in our amazing stories.
          </p>
          <div className="flex flex-wrap mt-4">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </div>
    </Layout>
  )
}
