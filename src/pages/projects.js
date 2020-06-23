import React from "react"
// import PropTypes from 'prop-types'
import styled from "styled-components"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import Headline from "../components/Headline"

function ProjectsPage() {
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
      <Headline>
        <h1>Projects</h1>
      </Headline>
      <View>
        {projects.map((project, id) => {
          const { title, image } = project.node
          const imageSrc = image.childImageSharp.fluid.src
          return (
            <ProjectsView key={id}>
              <Link to={`/projects/${title}`}>
                <div>{title}</div>
              </Link>
              <img src={imageSrc} alt="" />
            </ProjectsView>
          )
        })}
      </View>
    </Layout>
  )
}

ProjectsPage.defaultProps = {}

ProjectsPage.propTypes = {}

const View = styled.div`
  display: flex;
`

const ProjectsView = styled.div`
  border: solid 1px;
  width: 300px;
  height: 200px;
  img {
    width: 100%;
    height: 150px;
  }
`

export default ProjectsPage
