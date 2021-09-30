import React, { useState, useEffect } from 'react';
import FooterSection from "../components/footer";
import HeaderSection from "../components/header";

import "../styles/app.scss";

function Size() {

  // start the state variables
  const [size, setSize] = useState(155);
  const [height, setHeight] = useState(175);

  function heightCm(e) {
    setHeight(e.target.value);
    return null;
  }

  useEffect(() => {
    setSize(Math.round(height * 0.885));
  }, [height]);

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

        {size}
      </form>
    </>
  );
}

// markup
const IndexPage = () => {
  return (
    <>
      <HeaderSection />
      <main>
        <title>Snowboard.Tools</title>
        <Size />
      </main>
      <FooterSection />
    </>
  )
}

export default IndexPage
