import React from "react"
// import PropTypes from 'prop-types'
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/Layout"
import Headline from "../components/Headline"
import PostCard from "../components/PostCard"

function BlogPage() {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)

  const posts = data.allMarkdownRemark.edges
  console.log(posts)
  return (
    <Layout currentPath="blog">
      <SEO title="Blog" />
      <View>
        <Headline>
          <h1>Blog</h1>
        </Headline>
        <div className="postList">
          <section>
            {posts.slice(0, 4).map((post, id) => {
              const { title } = post.node.frontmatter
              return <PostCard key={id} title={title} />
            })}
          </section>
        </div>
      </View>
    </Layout>
  )
}

BlogPage.defaultProps = {}

BlogPage.propTypes = {}

const View = styled.div`
  min-height: calc((100vh - 56px) - 40px);
  .postList {
    padding: 54px 0px;
    section {
      max-width: 1140px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
    }
  }
`

export default BlogPage
