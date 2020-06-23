import React from "react"
// import PropTypes from 'prop-types'
import styled from "styled-components"
import Layout from "../components/Layout"
import { Link, graphql, useStaticQuery } from "gatsby"

function ProjectPage() {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            title
            slug
            url
            description
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const projects = data.allProjectsJson.edges
  console.log(projects)
  return (
    <Layout>
      <h1>Projects</h1>
      <View>
        {projects.map((project, id) => {
          const { title, image } = project.node
          const imageSrc = image.childImageSharp.fluid.src
          return (
            <ProjectView key={id}>
              <Link to={`/project/${title}`}>
                <div>{title}</div>
              </Link>
              <img src={imageSrc} alt="" />
            </ProjectView>
          )
        })}
      </View>
    </Layout>
  )
}

ProjectPage.defaultProps = {}

ProjectPage.propTypes = {}

const View = styled.div`
  display: flex;
`

const ProjectView = styled.div`
  border: solid 1px;
  width: 300px;
  height: 200px;
  img {
    width: 100%;
    height: 150px;
  }
`

export default ProjectPage
