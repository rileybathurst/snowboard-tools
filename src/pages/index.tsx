import React, { useState } from 'react';
import FooterSection from "../components/footer";
import HeaderSection from "../components/header";

import "../styles/app.scss";



function Size() {

  // start the state variables
  const [size, setSize] = useState(155);
  const [height, setHeight] = useState(175);

  console.log('hey');

  function mest(e) {
    console.log(e.target.value);
    console.log('here');
    return null;
  }

  return (
    <>
      <h2>Snowboard Size Guide</h2>
      <form>
        <label>
          Height
        </label>
        Test M
        <input
          type="range"
          onChange={mest}
        />

        <input
          type="range"
          onChange={mest}
        />
        <p>&#60;&#60;&#60; slide &#62;&#62;&#62;</p>

        <label>
          Weight
        </label>
        {/* <input type="range" /> */}
        <p>&#60;&#60;&#60; slide &#62;&#62;&#62;</p>

        {/* <input type="number" value={size} /> */}
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
