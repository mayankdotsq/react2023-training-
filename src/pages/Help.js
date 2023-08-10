import React from 'react'
import StaticPage from '../components/common/StaticPage'

const Help = () => {
  const data = { "title": "Help", "content": "This is help page content" };
  return (
    <StaticPage {...data} />
  )
}

export default Help