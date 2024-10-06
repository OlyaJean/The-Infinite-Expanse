import React from 'react'

const Fact = (props) => {
    const {fact} = props
  return (
    <div className='factContainer'>
        <h4>Learn Something New Every Day:</h4>
        <br />
      <p>{fact.fact}</p>
      <br />
      <span><a href="https://theplanets.org/space-facts/">Space Facts: Amazing and Incredible Facts About Space</a></span>
    </div>
  )
}

export default Fact
