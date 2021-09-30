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
  const [mountain, setMountain] = useState(0); // were guessing right to start
  const [resort, setResort] = useState('intermediate'); // were guessing right to start

  // should I be returning the height
  function heightCm(e) {
    setHeight(e.target.value);
    return null;
  }

  function weightKg(f) {
    setWeight(f.target.value);
    return null;
  }

  function mountainSize(g) {
    setMountain(g.target.value);

    // not getting this yet
    if (mountain == 0) {
      setResort('learner');
    } else if (mountain == 1) {
      setResort('beginner');
    } else if (mountain == 2) {
      setResort('intermediate');
    } else if (mountain == 3) {
      setResort('groomer cruiser');
    } else if (mountain == 4) {
      setResort('parkrat');
    } else if (mountain == 5) {
      setResort('alrounder');
    } else if (mountain == 6) {
      setResort('hitting the blacks');
    } else if (mountain == 7) {
      setResort('jump stick');
    } else if (mountain == 8) {
      setResort('all mountain');
    } else if (mountain == 9) {
      setResort('powder hound');
    } else {
      setResort('big mountain');
    }

    return null;
  }

  // this always run last
  useEffect(() => {
    setWeightGuess(height * 0.4);
    setWeightDiff((1 - (weight - weightGuess)) * 0.3);
    setSize((Math.round((height - weightDiff) * 0.885)) - (5 - mountain)); // + breaks this it might have to be flipped
  }, [height, weight, mountain]);

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
        <p>&#60;&#60;&#60; slide &#62;&#62;&#62;</p>

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
        <p>&#60;&#60;&#60; slide &#62;&#62;&#62;</p>

        <hr />

        <label>
          Mountain
        </label>
        <input
          type="range"
          min="0"
          max="10"
          onChange={mountainSize}
        />
        {resort}
        <p>&#60;&#60;&#60; slide &#62;&#62;&#62;</p>

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
