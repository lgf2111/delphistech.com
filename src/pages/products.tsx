import { Link, PageProps, graphql } from "gatsby";
import React from "react";

import Layout from "@/components/layout";

interface Product {
  id: string;
  frontmatter: {
    slug: string;
    title: string;
  };
}

interface ProductsProps extends PageProps {
  data: {
    allMarkdownRemark: {
      nodes: Product[];
    };
  };
}

const Products: React.FC<ProductsProps> = ({ data }) => {
  const products = data.allMarkdownRemark.nodes;
  return (
    <Layout>
      {products.map((product) => (
        <Link to={"/products/" + product.frontmatter.slug} key={product.id}>
          <div className="">
            <h3>{product.frontmatter.title}</h3>
          </div>
        </Link>
      ))}
    </Layout>
  );
};

export default Products;
export const query = graphql`
  query Products {
    allMarkdownRemark {
      nodes {
        frontmatter {
          slug
          title
        }
        id
      }
    }
  }
`;
