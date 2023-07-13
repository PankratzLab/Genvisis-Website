import React from 'react'

export default function Image({src, caption}) {
  return (
    <>
        <img src={`/Features/${src}`}/>
    </>
  )
}
