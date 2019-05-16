import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

// import PostIcons from "../components/post-icons"
// import Img from "gatsby-image"
import Layout from "../components/layout"

// import { rhythm } from "../utils/typography"

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost

    console.log('post:', post)

    return (
      <Layout>
        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
        {/* <PostIcons node={post} css={{ marginBottom: rhythm(1 / 2) }} /> */}
        {/* <div dangerouslySetInnerHTML={{ __html: post.content }} /> */}
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
      date
      datestr
      link
      authorName
      commentNums
      thumbnailurl
      featuredimgurl
      path
    }
  }
`