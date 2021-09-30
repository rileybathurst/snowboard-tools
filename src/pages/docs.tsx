import React, { useState, useEffect } from 'react';
import FooterSection from "../components/footer";
import HeaderSection from "../components/header";

import "../styles/app.scss";

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  console.log(count);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
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
