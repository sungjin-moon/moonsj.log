import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

function Header({ currentPath }) {
  return (
    <View>
      <div className="nav-bars">
        <FontAwesomeIcon icon={faBars} size="2x" />
      </div>
      <Navigation className="nav-list" currentPath={currentPath}>
        <Link className="nav-home" to="/">
          HOME
        </Link>
        <Link className="nav-resume" to="/resume">
          RESUME
        </Link>
        <Link className="nav-projects" to="/projects">
          PROJECTS
        </Link>
        <Link className="nav-blog" to="/blog">
          BLOG
        </Link>
        <Link className="nav-contact" to="/contact">
          CONTACT
        </Link>
      </Navigation>
    </View>
  )
}

Header.defaultProps = {
  currentPath: "home",
}

Header.propTypes = {
  currentPath: PropTypes.string,
}

const View = styled.header`
  background-color: #0a71c6;
  min-height: 56px;
  display: flex;
  justify-content: flex-end;
  padding: 0px 20px;
  .nav-bars {
    color: #ffffff;
    display: none;
    align-items: center;
    justify-content: center;
    svg {
      cursor: pointer;
    }
  }
  .nav-list {
  }
  @media (max-width: 774px) {
    .nav-bars {
      display: flex;
    }
    .nav-list {
      display: none;
    }
  }
`

const Navigation = styled.nav`
  display: flex;
  a {
    display: flex;
    align-items: center;
    color: rgba(255, 255, 255, 0.5);
    font-weight: 500;
    text-decoration: none;
    outline: none;
    margin-right: 30px;
    padding: 0px 8px;
    border-bottom: solid 3px #0a71c6;
  }
  .nav-${({ currentPath }) => currentPath} {
    color: #ffffff;
    border-bottom: solid 3px rgba(255, 255, 255, 0.8);
  }
`

export default Header
