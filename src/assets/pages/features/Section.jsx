import React from 'react'
import parse from "html-react-parser"
import Image from "./Image"

export default function Section({data}) {

  const options = {
    replace: ({ name, attribs, children, next }) => {

      if (name === "p" && children[0].name === "img") {
        const arr = children.filter(e => e.name !== "img").filter(e => e?.data !== "\n")
        
        console.log(arr)
        return arr.map(e => {return <div>{e?.data}</div>})
        // return <Image src={attribs.src} caption={attribs.alt} />
      }
      

      //make all non-anchor links open in new tab
      if (name === "a" && attribs.href[0] !== "#") {
        return (
          <a href={attribs.href} target="_blank">
            {children[0].data}
          </a>
        );
      }
    }
  };


  return (
    <div>{parse(data, options)}</div>
  )
}
