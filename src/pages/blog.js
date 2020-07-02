import React from "react"
// import PropTypes from 'prop-types'
import styled from "styled-components"
import SEO from "../components/seo"
import Layout from "../components/Layout"
import Headline from "../components/Headline"

function BlogPage() {
  return (
    <Layout currentPath="blog">
      <SEO title="Blog" />
      <View>
        <Headline>
          <h1>Blog</h1>
          <h3>페이지 준비중입니다.</h3>
        </Headline>
      </View>
    </Layout>
  )
}

BlogPage.defaultProps = {}

BlogPage.propTypes = {}

const View = styled.div`
  min-height: calc((100vh - 56px) - 40px);
`

export default BlogPage
