import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
// import PropTypes from "prop-types"

const Header = () => (
  <View>
    <Link to="/">Home</Link>
    <Link to="/project/">Project</Link>
    <Link to="/blog/">Blog</Link>
  </View>
)

const View = styled.header`
  background-color: blue;
`

export default Header
