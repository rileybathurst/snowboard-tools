import React, { useState, useEffect } from 'react';

function Sync() {
  const [count, setCount] = useState(1);
  console.log('before and outside the event ' + count);

  function handleClick() {
    console.log('prev event ' + count);
    setCount(count + 1);
    console.log('after event ' + count);
  }

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
const SyncPage = () => {
  return (
    <Sync />
  )
}

export default SyncPage
