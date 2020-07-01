import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {
  faDesktop,
  faServer,
  faTools,
  faCheck,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function SkillBox({ type, skills }) {
  let selectedIcon = faDesktop
  let selectedTitle = "Frontend"
  switch (type) {
    case "frontend":
      selectedIcon = faDesktop
      selectedTitle = "Frontend"
      break
    case "backend":
      selectedIcon = faServer
      selectedTitle = "Backend"
      break
    case "tools":
      selectedIcon = faTools
      selectedTitle = "Others"
      break
    default:
      selectedIcon = faDesktop
  }

  return (
    <View>
      <div className="skillBox-icon">
        <FontAwesomeIcon icon={selectedIcon} size="2x" color="#ffffff" />
      </div>
      <div className="skillBox-skills">
        <h3>{selectedTitle}</h3>
        <ul>
          {skills.map((skill, id) => (
            <li key={id}>
              <FontAwesomeIcon icon={faCheck} size="1x" color="#41a4f5" />
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      </div>
    </View>
  )
}

SkillBox.defaultProps = {
  type: "frontend",
  skills: []
}

SkillBox.propTypes = {
  type: PropTypes.string,
  skills: PropTypes.array
}

const View = styled.div`
  padding: 0px 15px;
  position: relative;
  .skillBox-icon {
    position: absolute;
    left: 150px;
    top: -40px;
    background-color: #41a4f5;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .skillBox-skills {
    background-color: #ffffff;
    padding: 60px 20px 20px 20px;
    min-width: 310px;
    max-width: 310px;
    min-height: 180px;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
    h3 {
      text-align: center;
      font-weight: 500;
      margin-bottom: 12px;
    }
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      line-height: 2;
      font-size: 14px;
      li {
        svg {
          margin-right: 8px;
        }
      }
    }
  }
`

export default SkillBox
