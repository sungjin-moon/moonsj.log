import React from "react"
// import PropTypes from 'prop-types'
import styled from "styled-components"
import { Link, graphql, useStaticQuery } from "gatsby"
import SEO from "../components/seo"
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
      <SEO title="Home" />
      <View>
        <Headline>
          <img className="home-profile" src={Profile} alt="" />
          <div className="home-description">
            <h2>Frontend Developer</h2>
            <h1>SungJin Moon</h1>
            <p>
              여행을 좋아하고 개발을 좋아하는 주니어 개발자 문성진입니다.
              대학교를 졸업하고, 코드스테이츠 부트캠프를 통해서 개발을 시작하게
              되었습니다. 목표를 향해 항상 배움의 자세로 새로운 것에 도전하고
              있으며, 부족한 부분을 개선하기 위해 계속 노력하고 있습니다. 좋은
              인연이 되어서 함께 할 수 있는 기회가 되었으면 좋겠습니다.
              방문해주셔서 감사합니다.
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
      h2 {
        font-weight: 500;
      }
      h1 {
        font-size: 40px;
      }
      p {
        margin: 10px 0px 20px 0px;
        line-height: 1.8;
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
