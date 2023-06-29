import React, { useEffect, useState } from "react";

export default function index() {

  const [HTML, setHTML] = useState()
  useEffect(() => {
    (async () => {
      const data = fetch("/")
    })()
  }, [])
  return (
    <main>
      <h1>Features</h1>
    </main>
  );
}
