import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import MobileImg from "../images/mobile.png"
import { faPlay } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Mobile({ innerImg, url }) {
  return (
    <View>
      <img className="mobile-img" src={MobileImg} alt="" />
      <div className="mobile-inner">
        <img src={innerImg} alt="" />
      </div>
      {url && (
        <a href={url} target="_sub">
          <FontAwesomeIcon icon={faPlay} size="3x" />
        </a>
      )}
    </View>
  )
}

Mobile.defaultProps = {
  innerImg: "",
  url: "",
}

Mobile.propTypes = {
  innerImg: PropTypes.string,
  url: PropTypes.string,
}

const View = styled.div`
  width: 500px;
  height: 400px;
  position: relative;
  @media (max-width: 774px) {
    width: 100%;
  }
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
    img {
      width: 100%;
      height: 100%;
      border-radius: inherit;
    }
  }
  a {
    opacity: 0;
    display: flex;
    position: absolute;
    top: 11.6%;
    left: 28.2%;
    width: 43.5%;
    height: 74.8%;
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

export default Mobile
