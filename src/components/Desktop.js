import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import desktopImg from "../images/desktop.png"

function Desktop({ innerImg }) {
  return (
    <View>
      <img className="desktop-img" src={desktopImg} alt="" />
      <div className="desktop-inner">
        <img className="desktop-inner-img" src={innerImg} alt="" />
      </div>
    </View>
  )
}

Desktop.defaultProps = {
  innerImg: "",
}

Desktop.propTypes = {
  innerImg: PropTypes.string,
}

const View = styled.div`
  width: 500px;
  height: 400px;
  position: relative;
  .desktop-img {
    width: 100%;
    height: 100%;
  }
  .desktop-inner {
    position: absolute;
    top: 12.8%;
    left: 6.2%;
    width: 87.5%;
    height: 53%;
    background: red;
    .desktop-inner-img {
      width: 100%;
      height: 100%;
    }
  }
`

export default Desktop
