import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

function Headline({ children }) {
  return (
    <View>
      <div className="headline-container">{children}</div>
    </View>
  )
}

Headline.defaultProps = {}

Headline.propTypes = {}

const View = styled.div`
  background-color: #41a4f5;
  padding: 60px 0px;
  color: #ffffff;
  .headline-container {
    border: solid 1px;
    max-width: 1140px;
    margin: 0 auto;
  }
`

export default Headline
