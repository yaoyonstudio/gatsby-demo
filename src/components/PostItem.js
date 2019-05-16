import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Div = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  &:not(:last-child) {
    border-bottom: 1px solid #dedede;
  }
  a {
    text-decoration: none;
    color: #333;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: .8rem 0;
    aside {
      flex: 1;
    }
    h3 {
      margin-bottom: .6rem;
    }
    img {
      width: 10rem;
      margin-right: 1.2rem;
    }
    div {
      color: #666;
    }
    footer p {
      color: #999;
      font-size: .9rem;
    }
    &:hover {
      color: #a870e0;
    }
  }
  
@media only screen and (max-width: 480px) {
  a {
    img {
      width: 6rem;
    }
    h3 {
      font-size: 100%;
    }
    div {
      display: none;
    }
  }
}

`

const PostItem = ({ data }) => {
  const post = data && data.node ? data.node : {}
  return (
    <Div>
      <Link className="post-item" to={`/posts/${post.id}`}>
        <img src={post.thumbnailurl} alt={post.title} />
        <aside>
          <h3>{post.title}</h3>
          <div dangerouslySetInnerHTML={{ __html: post.excerpt }}></div>
          <footer>
            <p>{post.datestr}</p>
          </footer>
        </aside>
      </Link>
    </Div>
  )
}

PostItem.propTypes = {
  siteTitle: PropTypes.object,
}


export default PostItem
