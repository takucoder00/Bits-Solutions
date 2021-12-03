import React from 'react'
import BlogCard from '../../components/blog/blogCard'
import Layout from '../../components/Layout'

export default function Blog() {
    return (
        <Layout>
            <div className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
  <h2 className="w-full mb-4 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            Blog
          </h2>

          <p className="text-base text-gray-700 md:text-lg">
            Soak yourself in our amazing stories.
          </p>
    <div className="flex flex-wrap -m-4 mt-4">
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
    </div>
  </div>
</div>
        </Layout>
    )
}
