export const PARTNERS_QUERY = /* GraphQL */ `
  query Partners($first: Int = 24) {
    partners(first: $first) {
      nodes {
        id
        slug
        title
        uri
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`

export const CASE_STUDIES_QUERY = /* GraphQL */ `
  query CaseStudies($first: Int = 12) {
    caseStudies(first: $first) {
      nodes {
        id
        slug
        title
        excerpt
        uri
        featuredImage { node { sourceUrl altText } }
      }
    }
  }
`

export const CASE_STUDY_BY_SLUG_QUERY = /* GraphQL */ `
  query CaseStudy($slug: ID!) {
    caseStudy(id: $slug, idType: SLUG) {
      id
      title
      content
      featuredImage { node { sourceUrl altText } }
    }
  }
`

export const PAGES_QUERY = /* GraphQL */ `
  query PageByUri($uri: ID!) {
    nodeByUri(uri: $uri) {
      ... on Page {
        id
        title
        content
      }
    }
  }
`
