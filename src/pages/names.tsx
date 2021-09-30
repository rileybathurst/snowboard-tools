import React, { useState, useEffect } from 'react';

import "../styles/app.scss";

function Example() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("one");

  function namer(e) {
    setCount(e.target.value);
    return null;
  }

  useEffect(() => {
    // if (count > 50) {
    if (count == 10) {
      setName('ten');
    } else if (count == 50) {
      setName('fifty');
    } else {
      setName('else');
    }
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <p>{name}</p>
      <input 
        type="range"
        step="10"
        onChange={namer}
      />
    </div>
  );
}

// markup
const DocsPage = () => {
  return (
    <Example />
  )
}

export default DocsPage
