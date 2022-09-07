import { metaTagsFragment, responsiveImageFragment } from '../lib/fragments'

const getPostQuery = ({ slug }) => ({
  query: `
      query PostBySlug($slug: String) {
        site: _site {
          favicon: faviconMetaTags {
            ...metaTagsFragment
          }
        }
        post(filter: {slug: {eq: $slug}}) {
          seo: _seoMetaTags {
            ...metaTagsFragment
          }
          title
          slug
          excerpt
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
          ogImage: coverImage{
            url
          }
          coverImage {
            responsiveImage {
              ...responsiveImageFragment
            }
          }
          coverVideo {
            url
            alt
            video {
              thumbnailUrl
            }
          }
        }
      }

      ${responsiveImageFragment}
      ${metaTagsFragment}
    `,

  variables: {
    slug
  }
})

export default getPostQuery
