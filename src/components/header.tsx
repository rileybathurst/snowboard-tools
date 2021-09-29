import React, { useState } from "react"

function Menu() {
  return (
    <nav>
      <ul>
        <li>Snowboard Size Guide</li>
        <hr />
        <li>About</li>
      </ul>
    </nav>
  );
}

const HeaderSection = () => {
  return (
    <header>
      <h1>Snowboard.Tools</h1>
      <svg></svg>
      <button>ME<br />NU</button>
      <Menu />
      <div className="adsense">
        <p>Google Adsense goes here</p>
      </div>
    </header>
  )
}

export default HeaderSection
