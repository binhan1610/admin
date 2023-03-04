import React from 'react'
import "./style.css"
function Home({name}) {
  console.log(name);
  return (
    <h1 className='h1'>Hello {name}</h1>
  )
}

export default Home