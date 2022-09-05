const getAllSlugs = () => ({
  query: `{
    allPosts {
      slug
    }
  }`
})

export default getAllSlugs
