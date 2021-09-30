import React, { useState, useEffect } from 'react';
import FooterSection from "../components/footer";
import HeaderSection from "../components/header";

import "../styles/app.scss";

function Size() {

  // start the state variables
  const [size, setSize] = useState(155); // 175 * 0.885
  const [height, setHeight] = useState(175); // guess
  const [weight, setWeight] = useState(70); // 175 height * 0.4
  const [weightGuess, setWeightGuess] = useState(70); // were guessing right to start
  const [weightDiff, setWeightDiff] = useState(0); // were guessing right to start

  // should I be returning the height
  function heightCm(e) {
    setHeight(e.target.value);
    return null;
  }

  function weightKg(e) {
    setWeight(e.target.value);
    return null;
  }

  // this always run last
  useEffect(() => {
    setWeightGuess(height * 0.4);
    console.log('guess ' + weightGuess);
    setWeightDiff((1 - (weight - weightGuess)) * 0.3);
    console.log('diff is ' + weightDiff);
    setSize(Math.round((height - weightDiff) * 0.885)); // + breaks this it might have to be flipped
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
        {/* <p>&#60;&#60;&#60; slide &#62;&#62;&#62;</p> */}

        <hr />
        <label>
          Weight
        </label>
        <input
          type="range"
          min="40"
          max="80"
          onChange={weightKg}
        />
        {weight}

        <h3>Size</h3>
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
