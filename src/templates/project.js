import React from "react"
// import PropTypes from 'prop-types'
import styled from "styled-components"
import { graphql } from "gatsby"

export const query = graphql`
  query($title: String!) {
    projectsJson(title: { eq: $title }) {
      title
      description
      url
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

function project({ data }) {
  const project = data.projectsJson
  console.log(project)
  return <View>{project.title}</View>
}

const View = styled.div``

export default project
