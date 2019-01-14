import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

export default ({ data }) => {
  const post = data.mark
  const { author, image, title } = post.frontmatter;
  const {slug} = post.fields
  console.log(data.all.edges)
  return (
    <Layout fragment={data.all} author={author} authorImage={image} title={title}>
      <div className="post">
        <h1>{post.frontmatter.title}
          <a href={`https://github.com/germanstack${slug}`} target="_blank" rel="noopener noreferrer">
            <span className="pull-right fnt-12">Edit on GitHub <i className={`fas fa-pen`}></i></span>
          </a>
        </h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} className="inner" />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    mark : markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        topic
        author
        image
      }
      fields {
            slug
          }
    },
    all :  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            topic
            author
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`