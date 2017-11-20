import React from 'react'

const Blurb = ({ blurb }) => (
  <div>
    <h3>{blurb.title}</h3>
    <p>{blurb.description}</p>
    <br />
  </div>
)

export default Blurb
