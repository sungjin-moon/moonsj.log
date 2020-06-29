import React from "react"
// import PropTypes from 'prop-types'
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import Headline from "../components/Headline"
import ProjectCard from "../components/ProjectCard"

function ProjectsPage() {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            title
            path
            url
            type
            skills
          }
        }
      }
    }
  `)

  const projects = data.allProjectsJson.edges
  console.log(projects)
  return (
    <Layout currentPath="projects">
      <View>
        <Headline>
          <h1>Projects</h1>
          <p>
            In-depth Case Studies to show you what I can offer and how I work
          </p>
        </Headline>
        <div className="projectList">
          <section>
            {projects.map((project, id) => {
              const { title, type, skills } = project.node
              return (
                <ProjectCard
                  key={id}
                  title={title}
                  type={type}
                  skills={skills}
                />
              )
            })}
          </section>
        </div>
      </View>
    </Layout>
  )
}

ProjectsPage.defaultProps = {}

ProjectsPage.propTypes = {}

const View = styled.div`
  min-height: calc((100vh - 56px) - 40px);
  .headline {
    p {
      margin-top: 12px;
      font-size: 20px;
    }
  }
  .projectList {
    padding: 54px 0px;
    section {
      max-width: 1140px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
    }
  }
`

export default ProjectsPage
