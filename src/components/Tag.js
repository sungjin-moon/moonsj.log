import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

function Tag({ name }) {
  return <View>{name}</View>
}

Tag.defaultProps = {
  name: "TagName",
}

Tag.propTypes = {
  name: PropTypes.string,
}

const View = styled.span`
  background-color: #58677c;
  color: #ffffff;
  line-height: 1;
  padding: 2px 10px 4px 10px;
  font-weight: 500;
  font-size: 12px;
  border-radius: 10px;
    margin-right: 8px;
`

export default Tag
