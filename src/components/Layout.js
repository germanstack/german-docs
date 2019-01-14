import React from "react"
import Header from "./Header"
import SideBar from "./SideBar"
import { graphql } from 'gatsby';
import {Helmet} from "react-helmet"

export default ({ children, fragment, author, authorImage, title }) => (
  <div>
    <Helmet>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="title"  content={title} />
      <meta name="theme" color="#010182"/>
      <meta name="description" content="Learn GERMANSTACK" />
      <meta name="robots" content="index, follow"/>
      <meta name="language" content="English" /> 
      <meta name="author" content={author} />
      <title>{title}</title>
    </Helmet>
    <Header author={author} authorImage={authorImage} />
    <SideBar node={fragment} />
    {children}
  </div>
)


export const query = graphql`
    fragment IndexPostFragment on MarkdownRemark {
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
          topic
      }
      fields {
        slug
      }
  }
`;