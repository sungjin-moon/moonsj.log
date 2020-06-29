import React from "react"
import Layout from "../components/Layout"
import Headline from "../components/Headline"

function BlogPage() {
  return (
    <Layout currentPath="blog">
      <Headline>
        <h1>Blog</h1>
      </Headline>
    </Layout>
  )
}

export default BlogPage
