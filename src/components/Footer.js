import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

function Footer() {
  return (
    <View>
      <Copyright>Copyright @ 2020 Portfolio.</Copyright>
    </View>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

const View = styled.footer`
  background-color: #434e5e;
  padding: 8px;
  text-align: center;
`

const Copyright = styled.small`
  color: #ffffff;
`

export default Footer
