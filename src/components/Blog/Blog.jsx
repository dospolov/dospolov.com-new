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
      <section className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {featuredPosts.map(post => (
          <FeaturedAnnounce {...{ key: post.slug }}>
            <Announce {...post} />
          </FeaturedAnnounce>
        ))}
        {plainPosts.map(post => (
          <PlainAnnounce {...{ key: post.slug }}>
            <Announce {...post} />
          </PlainAnnounce>
        ))}
      </section>
    </Container>
  )
}

export default Blog
