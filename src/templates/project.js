import React from "react"
// import PropTypes from 'prop-types'
import styled from "styled-components"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/Layout"
import Headline from "../components/Headline"
import SkillBox from "../components/SkillBox"
import Desktop from "../components/Desktop"
import Mobile from "../components/Mobile"
import LaySplashImg from "../../data/images/Lay/lay-cover-1.jpg"

export const query = graphql`
  query($title: String!) {
    projectsJson(title: { eq: $title }) {
      title
      type
      position
      projectType
      developPeriod
      company
      description {
        title
        text
      }
      coverImage {
        main {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
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
        achievements
        architecture {
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        performance {
          desktopUrl
          mobileUrl
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
    position,
    projectType,
    developPeriod,
    description,
    company,
    coverImage: { main, desktop, mobile },
    detail: {
      technologiesUsed: { backend, frontend, others },
      achievements,
      architecture,
      performance: { desktopUrl, mobileUrl },
    },
  } = project

  const mainCoverImage = main ? main.childImageSharp.fluid.src : ""
  const desktopCoverImage = desktop ? desktop.childImageSharp.fluid.src : ""
  const mobileCoverImage = mobile ? mobile.childImageSharp.fluid.src : ""

  const logoImage = project.logoImage
    ? project.logoImage.childImageSharp.fluid.src
    : ""

  const architectureImage = architecture.image.childImageSharp.fluid.src

  return (
    <Layout currentPath="projects">
      <SEO title="Projects" />
      <View type={type} title={title}>
        <Headline>
          <div className="headline-left">
            <h1>{title}</h1>
            <h3>{type}</h3>
            <h3>{position}</h3>
            <h3>{projectType}</h3>
            <h3>{developPeriod}</h3>
          </div>
          {title !== "Lay" && (
            <div className="headline-right">
              <div className="headline-right-logo">
                <img src={logoImage} alt="" />
                <h2>{company}</h2>
              </div>
            </div>
          )}
        </Headline>
        <section className="section-1">
          <div className="section-1-container inner">
            <div className="section-1-container-info">
              <h3>{description.title}</h3>
              <p>{description.text}</p>
              {title === "Budy" && (
                <Button href="https://thebudy.com" target="_sub">
                  View Live Site
                </Button>
              )}
            </div>
            <img src={mainCoverImage} alt="" />
          </div>
        </section>
        <section className="section-2">
          <div className="section-2-container inner">
            <h2>Technologies Used</h2>
            <div className="section-2-container-skills">
              <SkillBox type="frontend" skills={frontend} />
              {title === "Lay" ? null : (
                <SkillBox type="backend" skills={backend} />
              )}
              <SkillBox type="tools" skills={others} />
            </div>
          </div>
        </section>
        <section className="section-3">
          <div className="section-3-container inner">
            <h2>Achievements</h2>
            <ul className="section-3-container-achievements">
              {achievements.map((item, id) => (
                <li key={id}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
        {title === "Lay" ? null : (
          <section className="section-4">
            <div className="section-4-container inner">
              <h2>Architecture</h2>
              <div className="section-4-container-architecture">
                <img src={architectureImage} alt="" />
              </div>
            </div>
          </section>
        )}
        <section className="section-5">
          <div className="section-5-container inner">
            <h2>Performance</h2>
            <div className="section-5-container-performance">
              {type === "Web app Development" && (
                <Desktop innerImg={desktopCoverImage} url={desktopUrl} />
              )}
              {title === "Lay" && (
                <Mobile innerImg={LaySplashImg} url={mobileUrl} />
              )}
              <Mobile innerImg={mobileCoverImage} url={mobileUrl} />
            </div>
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
    @media (max-width: 774px) {
      margin-bottom: 20px;
      text-align: center;
    }
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
      @media (max-width: 774px) {
        width: 100%;
        justify-content: center;
        img {
          width: 50px;
          height: 40px;
        }
      }
    }
  }
  .headline-container {
    display: flex;
    justify-content: space-between;
    @media (max-width: 774px) {
      flex-direction: column;
    }
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
        min-width: 500px;
        max-width: 500px;
        height: 300px;
        border: solid 1px;
      }
    }
  }
  .section-2 {
    .section-2-container {
      .section-2-container-skills {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 80px;
      }
    }
  }
  .section-3 {
    background-color: #ffffff;
    .section-3-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      .section-3-container-achievements {
        line-height: 2;
        margin: 0px;
      }
    }
  }
  .section-4 {
    .section-4-container {
      .section-4-container-architecture {
        text-align: center;
        img {
          box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
        }
      }
    }
  }
  .section-5 {
    background-color: ${({ title }) =>
      title === "Lay" ? "#F7F8FA" : "#ffffff"};
    .section-5-container {
      .section-5-container-performance {
        display: flex;
        justify-content: ${({ type }) =>
          type === "Web app Development" ? "space-between" : "center"};
      }
    }
  }
`

const Button = styled.a`
  color: #ffffff;
  background-color: #41a4f5;
  font-size: 14px;
  font-weight: 500;
  padding: 6px 12px;
  border-radius: 4px;
  outline: none;
  text-decoration: none;
`

export default project
