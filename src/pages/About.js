import React from 'react'
import StaticPage from '../components/common/StaticPage'

const About = () => {
  const data = { "title": "About Us", "content": "This is about content" };
  return (
    <StaticPage {...data} />
  )
}

export default About