import React from "react"
// import PropTypes from 'prop-types'
import styled from "styled-components"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import Headline from "../components/Headline"
import Profile from "../images/profile1.jpg"
import ProjectCard from "../components/ProjectCard"

function IndexPage() {
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
            coverImage {
              main {
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
    }
  `)
  const projects = data.allProjectsJson.edges
  console.log(projects)
  return (
    <Layout currentPath="home">
      <View>
        <Headline>
          <img className="home-profile" src={Profile} alt="" />
          <div className="home-description">
            <p>Hello, my name is</p>
            <h1>SungJin Moon</h1>
            <p className="home-description-text">
              I'm a full-stack developer specialised in frontend and backend
              development for complex scalable web apps. I write about web
              development on my blog and regularly speak at various web
              conferences and meetups.
            </p>
            <div>
              <Link className="home-description-aboutMeBtn" to="/resume">
                About Me
              </Link>
            </div>
          </div>
        </Headline>
        <section>
          <div className="section-inner">
            <h1>Featured Projects</h1>
            <div className="section-inner-projects">
              {projects.slice(0, 3).map((project, id) => {
                const { title, type, skills, coverImage } = project.node
                const image = coverImage.main.childImageSharp.fluid.src
                return (
                  <ProjectCard
                    key={id}
                    title={title}
                    type={type}
                    skills={skills}
                    image={image}
                  />
                )
              })}
            </div>
            <Link className="section-inner-viewAllprojects" to="/projects">
              View all projects
            </Link>
          </div>
        </section>
        {/* <section>b</section> */}
      </View>
    </Layout>
  )
}

IndexPage.defaultProps = {}

IndexPage.propTypes = {}

const View = styled.main`
  min-height: calc((100vh - 56px) - 40px);
  .headline-container {
    display: flex;
    .home-profile {
      width: 240px;
      height: 280px;
      object-fit: cover;
      margin-right: 40px;
    }
    .home-description {
      display: flex;
      flex-direction: column;
      justify-content: center;
      h3 {
        font-weight: 400;
      }
      h1 {
        font-size: 40px;
      }
      p {
        font-size: 20px;
      }
      .home-description-text {
        margin: 10px 0px 20px 0px;
      }
      .home-description-aboutMeBtn {
        display: inline-block;
        background-color: rgba(0, 0, 0, 0.2);
        color: #ffffff;
        font-weight: 500;
        outline: none;
        text-decoration: none;
        padding: 0.6rem 1.5rem;
        border-radius: 4px;
      }
    }
  }
  section {
    padding: 40px 0px;
    text-align: center;
    .section-inner {
      max-width: 1140px;
      margin: 0 auto;
      h1 {
        font-size: 28px;
      }
      .section-inner-projects {
        display: flex;
        flex-wrap: wrap;
        margin-top: 40px;
      }
      .section-inner-viewAllprojects {
        display: inline-block;
        padding: 0.375rem 1rem;
        background-color: #41a4f5;
        color: #ffffff;
        outline: none;
        text-decoration: none;
        border-radius: 4px;
        font-weight: 500;
      }
    }
  }
`

export default IndexPage
