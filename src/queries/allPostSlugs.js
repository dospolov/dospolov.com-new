const getAllPostSlugs = () => ({
  query: `{
    allPosts {
      slug
    }
  }`
})

export default getAllPostSlugs
