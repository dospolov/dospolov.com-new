import React from 'react'
import Container from '../Container'
import FeaturedAnnounce from './FeaturedAnnounce'
import PlainAnnounce from './PlainAnnounce'
import Announce from './Announce'

const Blog = ({ posts }) => {
  const featuredPosts = posts.filter(post => post.featured)
  const plainPosts = posts.filter(post => !post.featured)

  return (
    <Container {...{ blogLinkActive: true }}>
      <section className="relative max-w-6xl mx-auto py-10 px-4 sm:px-6 space-y-10">
        {featuredPosts.map(post => (
          <FeaturedAnnounce {...{ slug: post.slug, key: post.slug }}>
            <Announce {...post} />
          </FeaturedAnnounce>
        ))}
        {plainPosts.map(post => (
          <PlainAnnounce {...{ slug: post.slug, key: post.slug }}>
            <Announce {...post} />
          </PlainAnnounce>
        ))}
      </section>
    </Container>
  )
}

export default Blog
