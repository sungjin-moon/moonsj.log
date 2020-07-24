import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"

function PostCard({ title, coverImage, description, date }) {
  return (
    <View>
      <div className={`post-${title} card`}>
        <img className="card-coverImage" src={coverImage} alt="" />
        <div className="card-body">
          <Link className="card-body-title" to={`/blog/${title}`}>
            {title}
          </Link>
          <div className="card-body-description">{description}</div>
          <div className="card-body-date">{date}</div>
        </div>
      </div>
    </View>
  )
}

PostCard.defaultProps = {
  title: "Learn React Components",
  coverImage: "https://velopert.com/wp-content/uploads/2016/03/react.png",
  description:
    "Blog post intro goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sapien quis nulla dictum euismod. Vivamus sed mi vitae dui iaculis venenatis...",
  date: "2020-07-24",
}

PostCard.propTypes = {
  title: PropTypes.string,
  coverImage: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
}

const View = styled.div`
  width: 540px;
  padding: 0px 15px;
  margin-bottom: 40px;
  .card {
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
    text-align: left;
    img {
      display: block;
      width: 100%;
      height: 210px;
      object-fit: cover;
    }
    .card-body {
      padding: 20px 20px 24px 20px;
      .card-body-title {
        color: #434e5e;
        font-weight: 600;
        text-decoration: none;
        outline: none;
        :hover {
          text-decoration: underline;
        }
      }
      .card-body-description {
        margin: 20px 0px;
      }
      .card-body-date {
        text-align: right;
        color: #aab4c3;
        font-size: 14px;
      }
    }
  }
  @media (max-width: 774px) {
    width: 100%;
    padding: 0px 20px;
  }
`

export default PostCard
