import React from "react"
// import PropTypes from "prop-types"
import styled from "styled-components"
import SEO from "../components/seo"
import Layout from "../components/Layout"
import Headline from "../components/Headline"
import DownloadBtn from "../components/DownloadBtn"
import Resume from "../components/Resume"

function ResumePage() {
  return (
    <Layout currentPath="resume">
      <SEO title="Resume" />
      <View className="resumePage">
        <Headline>
          <h1>Resume</h1>
          <DownloadBtn />
        </Headline>
        <article>
          <Resume />
        </article>
      </View>
    </Layout>
  )
}

const View = styled.main`
  position: relative;
  min-height: calc((100vh - 56px) - 40px);
  .headline {
    position: absolute;
    top: -130px;
    left: 0px;
    width: 100%;
    z-index: 1;
    height: 240px;
    .headline-container {
      max-width: 1000px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  article {
    position: relative;
    z-index: 2;
    margin-top: 130px;
    margin-bottom: 100px;
    .resume {
      margin: 0 auto;
    }
  }
`

export default ResumePage
