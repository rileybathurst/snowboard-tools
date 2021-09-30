import React, { useState, useEffect } from 'react';
import FooterSection from "../components/footer";
import HeaderSection from "../components/header";

import "../styles/app.scss";

function Size() {

  // start the state variables
  const [size, setSize] = useState(155);
  const [height, setHeight] = useState(175);


    // can I skip this coming up to an exterior function?
    function heightCm(e) {
      console.log('starting height ' + height);

      setHeight(456);
      console.log('hard height ' + height);

      console.log('the input is ' + e.target.value);

        let holder = e.target.value;
        // doubble check these are the same
        console.log('double check ' + holder);

        // this doesnt work for some reason
        setHeight(holder);
        console.log('the height is ' + height);
        
        console.log('🦄');
        Cm();
        // console.log('triple check ' + holder);
      return null;
    }

    function Cm() {

      // console.log('starting height is ' + height);
      // setSize(height * 0.885);
      // console.log('the size is ' + size);

      /*  let decimal = (Math.round(size));
      console.log('the muliplied is ' + size);

      setSize(decimal);
      console.log('the decimal is ' + decimal); */

      // console.log('🦖');
      return null;
    }

  return (
    <>
      <h2>Snowboard Size Guide</h2>
      <form>
        <label>
          Height
        </label>
        <input
          type="range"
          min="100"
          max="200"
          onChange={heightCm}
        />
        {height}

        {/* <input
          type="range"
          // onChange={() => setHeight("value")}
        /> */}
        <p>&#60;&#60;&#60; slide &#62;&#62;&#62;</p>

        <label>
          Weight
        </label>
        {/* <input type="range" /> */}
        <p>&#60;&#60;&#60; slide &#62;&#62;&#62;</p>

        {/* <input type="number" value={size} /> */}
        before
        {size}
        after
      </form>
    </>
  );
}

function State() {
  const [count, setCount] = useState(1);
  console.log(count);

  // setCount(count + 1);
  function handleClick(e) {
    setCount(e.target.value);
    console.log(count); // this shows the one before
    // can I do some sort of double loop to fix it?

    // these two things are very different
    // setCount(count + 1); 
    setCount(count + 0.1);

    console.log('second ' + count); // this shows the one before
  }

  return (
    <>
      <h2>State</h2>
      {/* <button onClick={handleClick} value="101" /> */}
      <input type="range" onChange={handleClick} />
      {count}
    </>
  );
}

/* function Date() {
  const [dount, setDount] = useState(1);
  console.log(dount);

  // setCount(count + 1);
  function handleClick() {
    setDount(dount + 1);
    console.log(dount);
  }

  return (
    <>
      <h2>Date</h2>
      <button onClick={handleClick} />
      <hr />
      counter {dount}
    </>
  );
} */

// markup
const IndexPage = () => {
  return (
    <>
      <HeaderSection />
      <main>
        <title>Snowboard.Tools</title>
        <Size />

        <State />
        {/* <Date /> */}
      </main>
      <FooterSection />
    </>
  )
}

export default IndexPage
