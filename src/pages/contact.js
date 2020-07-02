import React from "react"
// import PropTypes from 'prop-types'
import styled from "styled-components"
import SEO from "../components/seo"
import Layout from "../components/Layout"
import Headline from "../components/Headline"

function ContactPage() {
  return (
    <Layout currentPath="contact">
      <SEO title="Contact" />
      <View>
        <Headline>
          <h1>Contact</h1>
          <h3>페이지 준비중입니다.</h3>
        </Headline>
      </View>
    </Layout>
  )
}

ContactPage.defaultProps = {}

ContactPage.propTypes = {}

const View = styled.div`
  min-height: calc((100vh - 56px) - 40px);
`

export default ContactPage
