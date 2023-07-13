import React, { useEffect, useState } from "react";
import Section from "./Section"

export default function index() {

  const [HTML, setHTML] = useState([])
  useEffect(() => {
    (async () => {
      const data = await fetch("/Features/toc.json")
      const res = await data.json()
      const parsedRes = res.map(e => e.toLowerCase().replaceAll(" ", "-") + ".html")
      const fetchAll = await Promise.all(parsedRes.map(e => fetch(`/Features/${e}`)))
      const resAll = await Promise.all(fetchAll.map(e => e.text()))
      setHTML(resAll)
    })()
  }, [])

  return (
    <main className="features">
      <h1>Features</h1>
      <div className="body">
        {HTML.map((e, i) => {
          return <Section key={i} data={e}/>
        })}
      </div>
    </main>
  );
}
