import * as React from "react"
import FooterSection from "../components/footer";
import HeaderSection from "../components/header";

import "../styles/app.scss";

// markup
const IndexPage = () => {
  return (
    <>
    <HeaderSection />
    <main>
      <title>Snowboard.Tools</title>
        <h2>Snowboard Size Guide</h2>
        <form>
          <label>
            Height
          </label>
          <input type="range" />
          <p>&#60;&#60;&#60; slide &#62;&#62;&#62;</p>
          <label>
            Weight
          </label>
          <input type="range" />
          <p>&#60;&#60;&#60; slide &#62;&#62;&#62;</p>
        </form>
    </main>
    <FooterSection />
    </>
  )
}

export default IndexPage
