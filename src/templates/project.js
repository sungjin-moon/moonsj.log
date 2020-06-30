import React from "react"
// import PropTypes from 'prop-types'
import styled from "styled-components"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Headline from "../components/Headline"
import SkillBox from "../components/SkillBox"

export const query = graphql`
  query($title: String!) {
    projectsJson(title: { eq: $title }) {
      title
      type
      description {
        title
        text
      }
      coverImage {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logoImage {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      detail {
        technologiesUsed {
          frontend
          backend
          others
        }
        architecture {
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        achievements
        performance {
          desktop {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          mobile {
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
`

function project({ data }) {
  const project = data.projectsJson
  console.log(project)
  const {
    title,
    type,
    description,
    detail: {
      technologiesUsed: { backend, frontend, others },
      // architecture,
      achievements,
      // performance,
    },
  } = project
  const coverImage = project.coverImage
    ? project.coverImage.childImageSharp.fluid.src
    : ""
  const logoImage = project.logoImage
    ? project.logoImage.childImageSharp.fluid.src
    : ""

  return (
    <Layout currentPath="projects">
      <View>
        <Headline>
          <div className="headline-left">
            <h1>{title}</h1>
            <h3>{type}</h3>
            <h3>Frontend Developer</h3>
            <h3>2019.12 - 2020.03</h3>
          </div>
          <div className="headline-right">
            <div className="headline-right-logo">
              <img src={logoImage} alt="" />
              <h2>Gana Networks</h2>
            </div>
          </div>
        </Headline>
        <section className="section-1">
          <div className="section-1-container inner">
            <div className="section-1-container-info">
              <h3>{description.title}</h3>
              <p>{description.text}</p>
              <Button>View Live Site</Button>
            </div>
            <img src={coverImage} alt="" />
          </div>
        </section>
        <section className="section-2">
          <div className="section-2-container inner">
            <h2>Technologies Used</h2>
            <div className="section-2-container-skills">
              <SkillBox type="frontend" skills={frontend} />
              <SkillBox type="backend" skills={backend} />
              <SkillBox type="tools" skills={others} />
            </div>
          </div>
        </section>
        <section className="section-3">
          <div className="section-3-container inner">
            <h2>Architecture</h2>
            <div className="section-3-container-architecture"></div>
          </div>
        </section>
        <section className="section-4">
          <div className="section-4-container inner">
            <h2>Achievements</h2>
            <ul className="section-4-container-achievements">
              {achievements.map((item, id) => (
                <li key={id}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
        <section className="section-5">
          <div className="section-5-container inner">
            <h2>Performance</h2>
          </div>
        </section>
      </View>
    </Layout>
  )
}

const View = styled.div`
  color: #434e5e;
  .headline-left {
    line-height: 2;
  }
  .headline-right {
    display: flex;
    align-items: center;
    .headline-right-logo {
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 6px;
      padding: 20px;
      display: flex;
      align-items: center;
      img {
        width: 80px;
        height: 70px;
        margin-right: 20px;
      }
    }
  }
  .headline-container {
    display: flex;
    justify-content: space-between;
  }
  .inner {
    margin: 0 auto;
    max-width: 1140px;
  }
  section {
    padding: 60px 0px;
    h2 {
      text-align: center;
      margin-bottom: 20px;
    }
  }
  .section-1 {
    background-color: #ffffff;
    .section-1-container {
      display: flex;
      justify-content: space-between;
      .section-1-container-info {
        margin-right: 30px;
        p {
          margin: 20px 0px;
          line-height: 2;
        }
      }
      img {
        width: 500px;
        height: 300px;
      }
    }
  }
  .section-2 {
    .section-2-container {
      .section-2-container-skills {
        display: flex;
        flex-wrap: wrap;
        margin-top: 80px;
      }
    }
  }
  .section-3 {
    background-color: #ffffff;
    .section-3-container {
      .section-3-container-architecture {
        border: solid 1px;
        height: 400px;
      }
    }
  }
  .section-4 {
    .section-4-container {
      .section-4-container-achievements {
        line-height: 2;
        margin: 0px;
      }
    }
  }
  .section-5 {
    background-color: #ffffff;
  }
`

const Button = styled.a`
  color: #ffffff;
  background-color: #41a4f5;
  font-size: 14px;
  font-weight: 500;
  padding: 6px 12px;
  border-radius: 4px;
`

export default project
