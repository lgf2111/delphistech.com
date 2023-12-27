import { CreatePagesArgs, GatsbyNode } from "gatsby";
import * as path from "path";

interface Node {
  frontmatter: {
    slug: string;
  };
}

interface QueryResult {
  allMarkdownRemark: {
    nodes: Node[];
  };
}

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@/components": path.resolve(__dirname, "src/components"),
        "@/lib/utils": path.resolve(__dirname, "src/lib/utils"),
      },
    },
  });
};

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}: CreatePagesArgs) => {
  const { data } = await graphql<QueryResult>(`
    query ProductDetailsPages {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  if (!data) {
    throw new Error("No data returned from GraphQL query");
  }

  data.allMarkdownRemark.nodes.forEach((node) => {
    actions.createPage({
      path: `/products/${node.frontmatter.slug}`,
      component: path.resolve("./src/templates/product-details.tsx"),
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });
};
