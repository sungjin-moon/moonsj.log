import React from "react"
// import PropTypes from "prop-types"
import styled from "styled-components"

function Headline({ children }) {
  return (
    <View className="headline">
      <div className="headline-container">{children}</div>
    </View>
  )
}

Headline.defaultProps = {}

Headline.propTypes = {}

const View = styled.div`
  background-color: #41a4f5;
  color: #ffffff;
  padding: 40px 20px;
  .headline-container {
    max-width: 1140px;
    margin: 0 auto;
  }
`

export default Headline
