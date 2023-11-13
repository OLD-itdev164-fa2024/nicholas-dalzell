import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import { H1 } from '../components/Heading'

const BlogPost = ({ data }) => {
    const { title, category, publishDate, body, heroImage } = data.contentfulBlogPost;

    return (
        <Layout>
            <GatsbyImage 
              image={heroImage.gatsbyImageData} />
            <H1>{title}</H1>
            <publishDate>Date published: {publishDate}</publishDate>
            <p></p>
            <category>Category: {category}</category>
            <p></p>
            <div dangerouslySetInnerHTML={{__html: body.childMarkdownRemark.html}}></div>
        </Layout>
    );
}

export default BlogPost;

export const pageQuery = graphql`
query blogPostQuery($slug: String!) {
  contentfulBlogPost(slug: {eq: $slug}) {
    title
    slug
    category
    publishDate
    body {
      childMarkdownRemark {
        html
      }
    }
    heroImage {
      gatsbyImageData(
        layout: CONSTRAINED
        placeholder: BLURRED
        width: 960
      )
    }
  }
}
`