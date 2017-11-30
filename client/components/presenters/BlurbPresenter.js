import React from 'react'

const Blurb = ({ blurb }) => (
  <div className="blurb-container">
    <div className="blurb-container-title">{blurb.title}</div>
    <div className="blurb-containter-descrription">{blurb.description}</div>
    <br />
  </div>
)

export default Blurb
