import { metaTagsFragment, responsiveImageFragment } from '../lib/fragments'

const getPageQuery = ({ slug }) => ({
  query: `
      query PageBySlug($slug: String) {
        site: _site {
          favicon: faviconMetaTags {
            ...metaTagsFragment
          }
        }
        page(filter: {slug: {eq: $slug}}) {
          seo: _seoMetaTags {
            ...metaTagsFragment
          }
          title
          slug
          content {
            value
            blocks {
              __typename
              ...on ImageBlockRecord {
                id
                image {
                  responsiveImage {
                    ...responsiveImageFragment
                  }
                }
              }
              ...on VideoBlockRecord {
                id
                video {
                  alt
                  url
                  video {
                    thumbnailUrl
                  }
                }
              }
            }
          }
          date
        }
      }

      ${responsiveImageFragment}
      ${metaTagsFragment}
    `,

  variables: {
    slug
  }
})

export default getPageQuery
