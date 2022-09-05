import { metaTagsFragment, responsiveImageFragment } from '../lib/fragments'

const getHomeQuery = () => ({
  query: `
  {
    site: _site {
      favicon: faviconMetaTags {
        ...metaTagsFragment
      }
    }
    blog {
      seo: _seoMetaTags {
        ...metaTagsFragment
      }
    }
    allPosts(orderBy: date_DESC, first: 20) {
      title
      featured
      tags
      slug
      excerpt
      date
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

  ${metaTagsFragment}
  ${responsiveImageFragment}
`
})

export default getHomeQuery
