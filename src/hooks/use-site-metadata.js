import { useStaticQuery, graphql } from "gatsby";

export const useSiteMetadata = () => {
  const {
    site: {
      siteMetadata: { title, description }
    }
  } = useStaticQuery(
    graphql`
      query SiteMetadata {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );
  return { title, description };
};
