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
    padding: .16rem 0;
    overflow: hidden;
    width: 100%;
    aside {
      flex: 1;
      overflow: hidden;
      display: block;
      width: 100%;
    }
    h3 {
      font-size: .22rem;
      margin-bottom: .1rem;
    }
    img {
      width: 2rem;
      margin-right: .12rem;
    }
    .excerpt {
      color: #666;
      font-size: .18rem;
    }
    .tag {
      background-color: #decfec;
      border-radius: .06rem;
      margin-right: .12rem;
      color: #9262c1;
      padding: .04rem .16rem;
      font-size: .14rem;
    }
    footer {
      margin-top: .1rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      padding: .1rem 0;
    }
    footer section {
      display: block;
    }
    footer p {
      color: #999;
      font-size: .16rem;
      display: block;
    }
    &:hover {
      color: #a870e0;
    }
  }
  
@media only screen and (max-width: 480px) {
  a {
    h3 {
      font-size: .17rem;
    }
    img {
      width: 1.2rem;
    }
    .tag {
      font-size: .12rem;
    }
    .excerpt {
      font-size: .14rem;
    }
    footer {
      flex-direction: column;
      justify-items: flex-start;
      justify-content: flex-start;
      text-align: left;
      font-size: .12rem;
      padding: 0;
      section {
        margin-bottom: .12rem;
        width: 100%;
      }
      p {
        font-size: .12rem;
        width: 100%;
      }
    }
  }
}

`

const convertDate = (date) => {
  if (!date) return ''
  const myDate = new Date(date)
  return myDate.getFullYear() + '-' + (myDate.getMonth() + 1) + '-' + myDate.getDate()
}

const PostItem = ({ data }) => {
  const post = data && data.node ? data.node : {}

  const dateStr = convertDate(post.date)

  return (
    <Div>
      <Link className="post-item" to={`/posts/${post.id}`}>
        {post.featured_media && <img src={post.featured_media.source_url} alt={post.title} />}
        <aside>
          <h3>{post.title}</h3>
          <div className="excerpt" dangerouslySetInnerHTML={{ __html: post.excerpt }}></div>
          <footer>
            {post.tags && post.tags.length > 0 && <section>
              {post.tags.map(tag => <span className="tag" key={tag.id}>{tag.name}</span>)}
            </section>}
            <p>{dateStr}</p>
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
