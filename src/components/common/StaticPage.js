import React from 'react'

const StaticPage = ({title,content}) => {
  return (
    <div className="inner-page">
    <div className="container">
      {/*categorytop*/}
      <div className="category-top pro-detail">
        <div className="row">
          <div className="col-md-12 mt-1">
            <h1>{title}</h1>
            <p>
             { content}
            </p>
          </div>
        </div>
      </div>
      {/*categorytop*/}
    </div>
  </div>
  )
}

export default StaticPage