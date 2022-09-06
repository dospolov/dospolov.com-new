const getAllPageSlugs = () => ({
  query: `{
    allPages {
      slug
    }
  }`
})

export default getAllPageSlugs
