import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import MobileImg from "../images/mobile.png"

function Mobile({ innerImg }) {
  return (
    <View>
      <img className="mobile-img" src={MobileImg} alt="" />
      <div className="mobile-inner">
        <img className="mobile-inner-img" src={innerImg} alt="" />
      </div>
    </View>
  )
}

Mobile.defaultProps = {
  innerImg: "",
}

Mobile.propTypes = {
  innerImg: PropTypes.string,
}

const View = styled.div`
  width: 500px;
  height: 400px;
  position: relative;
  .mobile-img {
    width: 100%;
    height: 100%;
  }
  .mobile-inner {
    position: absolute;
    top: 11.6%;
    left: 28.2%;
    width: 43.5%;
    height: 74.8%;
    background: red;
    border-radius: 4px;
    .mobile-inner-img {
      width: 100%;
      height: 100%;
      border-radius: inherit;
    }
  }
`

export default Mobile
