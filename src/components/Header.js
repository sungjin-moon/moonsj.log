import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

function Header({ currentPath }) {
  const [isOpen, setOpen] = useState(false)
  return (
    <View isOpen={isOpen}>
      <div className="nav-bars">
        <FontAwesomeIcon
          icon={faBars}
          size="2x"
          onClick={() => setOpen(!isOpen)}
        />
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
    a {
      padding: 0px;
    }
  }
  @media (max-width: 774px) {
    flex-direction: column;
    .nav-bars {
      display: flex;
      justify-content: flex-end;
      padding: 12px 0px;
      width: 100%;
    }
    .nav-list {
      display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
      flex-direction: column;
      padding: 20px 0px;
      a {
        border-bottom: 0px;
        margin: 0px 0px 20px 0px;
        :last-child {
          margin: 0px;
        }
      }
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
