import React from "react"
import { useStaticQuery, graphql } from "gatsby"

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
              wordpress_id
              title
              excerpt
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
