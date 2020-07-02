import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import desktopImg from "../images/desktop.png"
import { faPlay } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Desktop({ innerImg, url }) {
  return (
    <View>
      <img className="desktop-img" src={desktopImg} alt="" />
      <div className="desktop-inner">
        <img src={innerImg} alt="" />
      </div>
      <a href={url} target="_sub">
        <FontAwesomeIcon icon={faPlay} size="3x" />
      </a>
    </View>
  )
}

Desktop.defaultProps = {
  innerImg: "",
  url: "",
}

Desktop.propTypes = {
  innerImg: PropTypes.string,
  url: PropTypes.string,
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
    img {
      width: 100%;
      height: 100%;
    }
  }
  a {
    opacity: 0;
    display: flex;
    position: absolute;
    top: 12.8%;
    left: 6.2%;
    width: 87.5%;
    height: 53%;
    background-color: rgba(0, 0, 0, 0.6);
    justify-content: center;
    align-items: center;
    color: #ffffff;
    text-decoration: none;
    :hover {
      opacity: 1;
    }
  }
`

export default Desktop
