import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Footer = () => (
  <View>
    © {new Date().getFullYear()}, Built with
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </View>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

const View = styled.footer`
  background-color: red;
  div {
    border: solid 1px;
    max-width: 1024px;
    margin: 0 auto;
  }
`

export default Footer
