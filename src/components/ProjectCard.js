import React from "react"
import PropTypes from 'prop-types'
import styled from "styled-components"
import { Link } from "gatsby"
import Tag from "../components/Tag"

function ProjectCard({ title, image, type, skills }) {
  return (
    <View>
      <div className={`project-${title} card`}>
        <div className="card-cover">
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwu8GmuI6m8blUhwSGHQjcej7VzvQaUyxq6vrOGl7aIoNO8iq-jNpuriOEwlSycTlLAzcVIw&usqp=CAU"
            }
            alt=""
          />
          <div className="background">
            <span className="background-title">{title}</span>
          </div>
        </div>
        <div className="card-body">
          <Link to={`/projects/${title}`}>{type}</Link>
        </div>
        <div className="card-footer">
          {skills.map((name, id) => (
            <Tag name={name} key={id} />
          ))}
        </div>
      </div>
    </View>
  )
}

ProjectCard.defaultProps = {
  title: "",
  image: "",
  type: "",
  skills: []
}

ProjectCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string,
  skills: PropTypes.array
}

const View = styled.div`
  width: 350px;
  padding: 0px 15px;
  margin-bottom: 48px;
  color: #434e5e;
  .card {
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
    background-color: #ffffff;
    .card-cover {
      position: relative;
      height: 230px;
      img {
        width: 100%;
        height: 100%;
      }
      .background {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0px;
        left: 0px;
        background-color: rgba(67, 78, 94, 0.6);
        display: flex;
        justify-content: center;
        align-items: center;
        .background-title {
          font-size: 40px;
          font-weight: 800;
          color: #ffffff;
          padding-bottom: 20px;
        }
      }
    }
    .card-body {
      text-align: center;
      padding: 8px 20px;
      font-weight: 500;
      a {
        color: #434e5e;
        text-decoration: none;
        outline: none;
        :hover {
          text-decoration: underline;
        }
      }
    }
    .card-footer {
      display: flex;
      flex-wrap: wrap;
      padding: 0px 20px 20px 20px;
      span {
        margin-right: 30px;
        margin-top: 12px;
      }
    }
  }
`

export default ProjectCard
