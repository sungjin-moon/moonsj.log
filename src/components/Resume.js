import React from "react"
// import PropTypes from 'prop-types'
import styled from "styled-components"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope, faBuilding } from "@fortawesome/free-regular-svg-icons"
import {
  faGithubAlt,
  faLinkedinIn,
  faMediumM,
} from "@fortawesome/free-brands-svg-icons"
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
          <div className="head-wrapper-left">
            <div className="head-info">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>Siheung</span>
            </div>
            <div className="head-info">
              <FontAwesomeIcon icon={faBuilding} />
              <span>I'm in between jobs.</span>
            </div>
            <div className="head-info">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>msj9121@gmail.com</span>
            </div>
          </div>
          <div className="head-wrapper-right">
            <a
              className="head-url"
              href="https://github.com/sungjin-moon"
              target="_sub"
            >
              <FontAwesomeIcon icon={faGithubAlt} size="1x" color="#434E5E" />
              <span>github.com/sungjin-moon</span>
            </a>
            <a
              className="head-url"
              href="https://www.linkedin.com/in/sungjin-moon-32018217b/"
              target="_sub"
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="1x" color="#434E5E" />
              <span>linkedin.com/in/sungjin-moon-32018217b</span>
            </a>
            <a
              className="head-url"
              href="https://medium.com/@msj9121"
              target="_sub"
            >
              <FontAwesomeIcon icon={faMediumM} size="1x" color="#434E5E" />
              <span>medium.com/@msj9121</span>
            </a>
          </div>
        </div>
      </Head>
      <Body className="resume-body">
        <section className="aboutMe">
          <h2>ABOUT ME</h2>
          <div className="content">
            <p>
              안녕하세요. 여행을 좋아하고 개발을 좋아하는 주니어 개발자
              문성진입니다.
              <br /> 메인 포지션은 웹 프론트엔드이고, 비전공자이지만
              코드스테이츠라는 부트캠프를 통해서 자기주도적 학습을 경험했기
              때문에 안 풀리는 문제가 생기면 쉽게 두려워하지 않는 것 같습니다.
              항상 새로운 것에 대해 관심이 많고, 빠르게 변화하는 웹 트렌드를
              따라가려고 노력하고 있습니다. 제가 개발 공부를 시작하게 된 계기는,
              대학생활 시절 당시에 TV나 인터넷 등에서 다양한 플랫폼들이
              소개되고, 여러 스타트업 기업들이 많아지면서 소프트웨어의 영향력이
              커지고 있다는 것을 느끼게 되었습니다. 그래서 이때부터 개발자에
              대한 관심이 많아지게 되었던 것 같습니다. 좋은 인연이 되어서 함께
              성장 할 수 있는 기회가 되었으면 좋겠습니다. 감사합니다.
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
                Node.js, Express.js, Sequelize.js, MySQL, Graphql, React Native,
                Expo, AWS (EC2, S3, Route53, Cloud Front, ACM)
              </div>
            </div>

            <div className="content-list">
              <div className="content-list-name">Tool</div>
              <div className="content-list-text">
                Visual Studio Code, Postman, Slack, Git, GitHub, Bitbucket,
                Trello, Zeplin, Swagger, AdobeXD
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2>EDUCATION</h2>
          <div className="content">
            <div className="content-wrapper">
              <div>
                <span className="content-name">Code State | </span>
                Advanced Software Engineering Immersive 9th
              </div>
              <span className="content-date">2018.10 - 2019.01</span>
            </div>
            <div className="content-wrapper">
              <div>
                <span className="content-name">Korea Tourism College | </span>
                <span>AA, Tourism Management</span>
              </div>
              <span className="content-date">2013.03 - 2018.02</span>
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
                  Budy 프로토타입을 개발하기 위해 스프린트 방식의 협업으로
                  개발팀, UX/UI 디자이너와 정보구조 설계, 기획 업무를 함께
                  참여하게 되었습니다. 백엔드팀과의 협업으로는 Swagger를 통해
                  자동화된 API Documents를 보고 진행했고, 디자이너와의 협업은
                  Zeplin의 GUI 가이드를 참조하여 커뮤니케이션을 진행하였습니다.
                </p>
                <h4>Achievements:</h4>
                <ul>
                  <li>
                    Post와 Comment의 CRUD 관련 View를 전담하여 개발, Zeplin의
                    GUI 가이드를 참조하여 Color 모듈화 작업.
                  </li>
                  <li>
                    Layout, Button, Input, tag 등의 컴포넌트 구조 설계 및
                    문서화를 통해 개발.
                  </li>
                  <li>
                    글 작성 부분을 개발하기 위해서 Quill 라이브러리를 통해
                    텍스트 에디터를 커스터마이징.
                  </li>
                  <li>
                    S3 버킷을 생성하여 React로 빌드된 파일들을 업로드, Cloud
                    Front(CDN)로 배포 설정을 생성하여 ACM을 통해 만든 SSL
                    인증서를 등록, Route53 레코드에 추가하여 HTTPS 배포.
                  </li>
                  <li>
                    AWS CLI를 사용하여 S3 버킷에 파일 동기화, CloudFront 엣지
                    캐시에서 객체 무효화 작업을 통해 배포 자동화.
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
    .head-wrapper-left {
      margin-right: 80px;
    }
  }
  .head-info {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    color: rgba(255, 255, 255, 0.6);
    svg {
      font-size: 20px;
      display: block;
      margin-right: 10px;
      margin-top: 4px;
    }
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
      .content-wrapper {
        display: flex;
        justify-content: space-between;
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
        ul {
          /* margin: 0px; */
          margin-top: 0px;
          padding-left: 30px;
        }
      }
    }
  }
`

export default Resume
