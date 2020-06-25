import React from "react"
// import PropTypes from "prop-types"
import styled from "styled-components"
import Layout from "../components/Layout"
import Headline from "../components/Headline"
import DownloadBtn from "../components/DownloadBtn"
import Resume from "../components/Resume"

function ResumePage() {
  return (
    <Layout>
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
    padding: 40px 0px;
    top: -130px;
    left: 0px;
    width: 100%;
    z-index: 1;
    .headline-container {
      padding: 0px 20px;
      max-width: 960px;
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
