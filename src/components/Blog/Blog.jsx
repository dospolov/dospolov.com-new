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
      <section class="relative max-w-6xl mx-auto px-4 sm:px-6">
        {featuredPosts.map(post => (
          <FeaturedAnnounce>
            <Announce {...post} key={post.slug} />
          </FeaturedAnnounce>
        ))}
        {plainPosts.map(post => (
          <PlainAnnounce>
            <Announce {...post} key={post.slug} />
          </PlainAnnounce>
        ))}
      </section>
    </Container>
  )
}

export default Blog
