import React, { useState, useEffect } from 'react';

function One() {
  const [count, setCount] = useState(1);
  function handleClick() {
    setCount(count + 1);
  }
  
  console.log(count);
  
  return (
    <>
      <h2>Sync</h2>
      <button onClick={handleClick} />
      <hr />
      counter {count}
    </>
  );
}

// markup
const OnePage = () => {
  return (
    <One />
  )
}

export default OnePage
