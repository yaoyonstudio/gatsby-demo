import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import styled from 'styled-components'

// import PostIcons from "../components/post-icons"
// import Img from "gatsby-image"
import Layout from "../components/layout"

// import { rhythm } from "../utils/typography"

import { convertDate } from "../libs/utils"

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost

    const Div = styled.div`
      padding: .2rem 0;
      .post-title {
        text-align: center;
        margin-top: .2rem;
      }
      .post-meta {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: .2rem 0;
      }
      .post-author, .post-date {
        color: #999;
        font-size: .15rem;
        margin: 0 .1rem;
      }
      .post-tags {
        margin-top: .2rem;
      }
      .post-tag {
        background-color: #decfec;
        border-radius: .06rem;
        margin-right: .12rem;
        color: #9262c1;
        padding: .04rem .16rem;
        font-size: .14rem;
      }
      .post-featured-image {
        width: 100%;
        margin-top: .2rem;
        img {
          max-width: 100%;
          display: block;
          margin: 0 auto;
        }
      }
      .post-content {
        margin: .2rem 0;
      }
    `

    console.log('post:', post)

    return (
      <Layout>
        <Div>
          <h1 className="post-title" dangerouslySetInnerHTML={{ __html: post.title }} />
          <article className="post-meta">
            <span className="post-author">{post.author.name}</span>
            <span className="post-date">{convertDate(post.date)}</span>
          </article>
          {post.featured_media && <div className="post-featured-image">
            <img src={post.featured_media.source_url} alt={post.title} />
          </div>}
          {/* <PostIcons node={post} css={{ marginBottom: rhythm(1 / 2) }} /> */}
          <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
          {post.tags && post.tags.length > 0 && <article className="post-tags">
            {post.tags.map(tag => <span className="post-tag" key={tag.id}>{tag.name}</span>)}
          </article>}
          </Div>
      </Layout>
    )
  }
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  // edges: PropTypes.array,
}

export default PostTemplate

export const postQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      id
      wordpress_id
      title
      excerpt
      content
      date
      slug
      status
      type
      link
      sticky
      format
      featured_media {
        source_url
      }
      author {
        id
        wordpress_id
        name
        url
        avatar_urls {
          wordpress_48
        }
      }
      tags {
        id
        wordpress_id
        name
        slug
        link
        taxonomy {
          id
        }
      }
      categories {
        id
        wordpress_id
        name
        slug
        taxonomy {
          id
          wordpress_id
          name
          slug
          description
        }
        link
        description
        count
      }
    }
  }
`