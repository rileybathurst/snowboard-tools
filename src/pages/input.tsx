import React, { useState } from 'react';

function Input() {
  const [count, setCount] = useState(75);
  function handleClick(e) {
    setCount(e.target.value);
  }

  console.log(count);

  return (
    <>
      <h2>Sync</h2>
      <input
        type="range"
        // value="75" // this locks im  not sure if it should
        onClick={handleClick}
      />
      <hr />
      counter {count}
    </>
  );
}

// markup
const InputPage = () => {
  return (
    <Input />
  )
}

export default InputPage
