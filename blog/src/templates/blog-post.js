import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const BlogPost = ({ data }) => {
    const { title, category, publishDate, body } = data.contentfulBlogPost;

    return (
        <Layout>
            <h1>{title}</h1>
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
  }
}
`