import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { globalHistory } from "@reach/router"
// import PropTypes from "prop-types"

function Header() {
  let currentPath = null
  const pathname = globalHistory.location.pathname
  switch (pathname) {
    case "/":
      currentPath = "home"
      break
    case "/resume":
      currentPath = "resume"
      break
    case "/projects":
      currentPath = "projects"
      break
    case "/blog":
      currentPath = "blog"
      break
    case "/contact":
      currentPath = "contact"
      break
    default:
      currentPath = null
  }
  return (
    <View>
      <Navigation currentPath={currentPath}>
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

const View = styled.header`
  background-color: #0a71c6;
  min-height: 56px;
  display: flex;
  justify-content: flex-end;
  padding: 0px 20px;
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
