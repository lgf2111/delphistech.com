import Layout from "@/components/layout";
import { PageProps, graphql } from "gatsby";
import React from "react";

interface ProductDetailsProps extends PageProps {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: {
        title: string;
      };
    };
  };
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ data }) => {
  const { html } = data.markdownRemark;
  const { title } = data.markdownRemark.frontmatter;
  return (
    <Layout>
      <h1>{title}</h1>
      <div className="" dangerouslySetInnerHTML={{ __html: html }}></div>
    </Layout>
  );
};

export default ProductDetails;
export const query = graphql`
  query ProductDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
