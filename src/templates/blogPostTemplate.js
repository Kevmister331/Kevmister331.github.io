import React from "react"
import { graphql } from 'gatsby'
import '../styles/blogPostStyles.css'; // Assuming you're using CSS

const Page = ({ data }) => {
  const { title, content } = data.contentfulBlogPost;

  return (
    <div className="blogPostContainer">
      <h1 className="blogPostTitle">{title}</h1>
      <p className="blogPostContent">{content.content}</p>
    </div>
  )
}

export const query = graphql`
  query ($id: String) {
    contentfulBlogPost(id: {eq: $id}) {
      id
      slug
      title
      content {
        content
      }
    }
  }
`

export default Page;
