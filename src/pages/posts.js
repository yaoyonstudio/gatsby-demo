import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"


const Posts = () => {
  const { allWordpressPost } = useStaticQuery(
    graphql`
      query {
        allWordpressPost {
          edges {
            node {
              id
              title
              excerpt
              date
              datestr
              authorName
              commentNums
              link
              thumbnailurl
              featuredimgurl
            }
          }
        }
      }
    `
  )

  const posts = allWordpressPost && allWordpressPost.edges && allWordpressPost.edges.length ? allWordpressPost.edges : []
  console.log(posts)

  return (
    <Layout>
      <SEO title="博客文章" />
      {posts.length > 0 && <div className="post-list">
        {posts.map(post => <PostItem data={post} key={post.node.id} />)}
      </div>}
    </Layout>
  )
}

export default Posts
