import React from "react"
// import PropTypes from 'prop-types'
import styled from "styled-components"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Tag from "../components/Tag"
import Profile from "../images/profile1.jpg"

function Resume() {
  return (
    <View className="resume">
      <div className="resume-name">SUNGJIN MOON</div>
      <Head className="resume-head">
        <img className="head-profile" src={Profile} alt="" />
        <div className="head-title">
          <span>Frontend Developer</span>
        </div>
        <div className="head-wrapper">
          <a className="head-url" href="https://www.google.com" target="_sub">
            <FontAwesomeIcon icon={faEnvelope} size="1x" color="#434E5E" />
            <span>msj9121@gmail.com</span>
          </a>
        </div>
        <div className="head-wrapper">
          <a className="head-url" href="https://www.google.com" target="_sub">
            <FontAwesomeIcon icon={faGithubAlt} size="1x" color="#434E5E" />
            <span>github.com/moonsj</span>
          </a>
        </div>
        <div className="head-wrapper">
          <a className="head-url" href="https://www.google.com" target="_sub">
            <FontAwesomeIcon icon={faLinkedinIn} size="1x" color="#434E5E" />
            <span>linkedin.com/in/moonsj</span>
          </a>
        </div>
      </Head>
      <Body className="resume-body">
        <section className="aboutMe">
          <h2>ABOUT ME</h2>
          <div className="content">
            <p>
              Summarise your career here. You can make a PDF version of your
              resume using our free Sketch template here. Aenean commodo ligula
              eget dolor aenean massa. Cum sociis natoque penatibus et magnis
              dis parturient montes, nascetur ridiculus mus. Donec quam felis,
              ultricies nec, pellentesque eu. Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
              Aenean massa. Cum sociis natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Donec quam felis,
              ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat
              massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
              vulputate eget. Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit.
            </p>
          </div>
        </section>
        <section>
          <h2>SKILLS & TOOLS</h2>
          <div className="content">
            <div className="content-list">
              <div className="content-list-name">Strong</div>
              <div className="content-list-text">HTML5, CSS3, Javascript</div>
            </div>

            <div className="content-list">
              <div className="content-list-name">Love</div>
              <div className="content-list-text">
                React.js, Next.js, Gatsby.js, Styled Components
              </div>
            </div>

            <div className="content-list">
              <div className="content-list-name">Experienced</div>
              <div className="content-list-text">
                Node.js, Express, Sequelize, MySQL, Graphql, React Native,
                AWS(EC2, S3, Route53, Cloud Front), Firebase(Cloud Firestore)
              </div>
            </div>

            <div className="content-list">
              <div className="content-list-name">Tool</div>
              <div className="content-list-text">
                Visual Studio Code, Postman, Slack, Git, GitHub, Bitbucket,
                Trello, Zeplin
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2>EDUCATION</h2>
          <div className="content">
            <div>
              <span className="content-name">Code State | </span>
              <span>Advanced Software Engineering Immersive 9th</span>
            </div>
            <div>
              <span className="content-name">Korea Tourism College | </span>
              <span>AA, Tourism Management</span>
            </div>
          </div>
        </section>
        <section>
          <h2>WORK EXPERIENCE</h2>
          <div className="content">
            <article>
              <div className="timeline" />
              <div className="textWrapper">
                <header>
                  <div>
                    <h3 className="positionTitle">Frontend Developer</h3>
                    <div className="positionTime">2019.05 - 2020.03</div>
                  </div>
                  <div className="companyName">Gana Networks</div>
                </header>
                <p>
                  Role description goes here ipsum dolor sit amet, consectetuer
                  adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                  massa. Cum sociis natoque penatibus et magnis dis parturient
                  montes, nascetur ridiculus mus. Donec quam felis, ultricies
                  nec, pellentesque eu, pretium quis, sem. Donec pede justo,
                  fringilla vel.
                </p>
                <h4>Achievements:</h4>
                <p>
                  Praesentium voluptatum deleniti atque corrupti quos dolores et
                  quas molestias excepturi sint occaecati cupiditate non
                  provident.
                </p>
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet, 80% consectetuer adipiscing
                    elit.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, 80% consectetuer adipiscing
                    elit.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, 80% consectetuer adipiscing
                    elit.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, 80% consectetuer adipiscing
                    elit.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, 80% consectetuer adipiscing
                    elit.
                  </li>
                </ul>
                <h4>Technologies used:</h4>
                <div className="skills">
                  <Tag name="React.js (hooks + context)" />
                  <Tag name="Styled Components" />
                  <Tag name="Quill (WYSIWYG Editor)" />
                  <Tag name="AWS (S3, ACM, Cloud Front, Route53)" />
                </div>
              </div>
            </article>
          </div>
        </section>
      </Body>
    </View>
  )
}

Resume.defaultProps = {}

Resume.propTypes = {}

const View = styled.div`
  max-width: 1000px;
  color: #434e5e;
  background-color: #ffffff;
  min-height: 1500px;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);
  .resume-name {
    padding: 24px 40px;
    font-size: 34px;
    font-weight: 800;
    color: #434e5e;
  }
`

const Head = styled.div`
  position: relative;
  background-color: #434e5e;
  color: #ffffff;
  min-height: 180px;
  padding: 24px 40px;
  .head-profile {
    position: absolute;
    right: 56px;
    top: -74px;
    border: solid 10px;
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 50%;
    color: #8d9aad;
    background-color: #ffffff;
  }
  .head-title {
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 28px;
  }
  .head-wrapper {
    display: flex;
  }
  .head-url {
    display: flex;
    margin-bottom: 12px;
    cursor: pointer;
    text-decoration: none;
    outline: none;
    svg {
      background-color: #ffffff;
      padding: 6px;
      border-radius: 2px;
      margin-right: 10px;
    }
    span {
      color: rgba(255, 255, 255, 0.6);
      font-size: 16px;
    }
    :hover {
      span {
        text-decoration: underline;
      }
    }
  }
`

const Body = styled.div`
  padding: 40px;
  section {
    margin-bottom: 48px;
    h2 {
      margin: 0;
      border-bottom: solid 1px;
      padding-bottom: 16px;
      margin-bottom: 16px;
      font-size: 20px;
      font-weight: 800;
    }
    .content {
      padding: 0px 16px;
      display: flex;
      flex-direction: column;
      .content-list {
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;
        .content-list-name {
          font-weight: 800;
        }
        .content-list-text {
          width: 560px;
        }
      }
      .content-name {
        font-weight: 800;
      }
    }
    article {
      position: relative;
      margin: 0;
      display: flex;
      .timeline {
        border: solid 5px #6f8098;
        background-color: #ffffff;
        border-radius: 50%;
        width: 10px;
        height: 10px;
        ::before {
          content: "";
          width: 4px;
          height: 100%;
          background-color: #c8cfd8;
          position: absolute;
          left: 8px;
          top: 20px;
          display: inline-block;
        }
      }
      .textWrapper {
        margin-left: 10px;
        margin-bottom: 40px;
        width: 100%;
        header {
          display: flex;
          justify-content: space-between;
          .positionTitle {
            margin: 0;
          }
          .positionTime {
            color: #aab4c3;
            font-size: 14px;
            line-height: 2;
          }
          .companyName {
            font-weight: 500;
          }
        }
        p {
          margin-bottom: 20px;
        }
        .skills {
          padding: 4px 0px;
        }
      }
    }
  }
`

export default Resume
