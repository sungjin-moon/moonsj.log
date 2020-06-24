import React from "react"
// import PropTypes from 'prop-types'
import styled from "styled-components"

function Resume() {
  return <View className="resume">Resume</View>
}

Resume.defaultProps = {}

Resume.propTypes = {}

const View = styled.div`
  max-width: 1000px;
  background-color: #ffffff;
  min-height: 1500px;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);
`

export default Resume
