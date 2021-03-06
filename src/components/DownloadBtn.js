import React from "react"
// import PropTypes from 'prop-types'
import styled from "styled-components"
import { faDownload } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function DownloadBtn() {
  return (
    <View href="https://drive.google.com/file/d/1OQ12YejxgfJUoWrYXxWr_Yi0U1ih0MAy/view?usp=sharing" target="_sub">
      <FontAwesomeIcon icon={faDownload} />
      <span>Download PDF Version</span>
    </View>
  )
}

DownloadBtn.defaultProps = {}

DownloadBtn.propTypes = {}

const View = styled.a`
  background: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  color: #ffffff;
  font-weight: 600;
  padding: 6px 16px;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  svg {
    margin-right: 8px;
  }
  :hover {
    background: rgba(0,0,0,0.4);
  }
`

export default DownloadBtn
