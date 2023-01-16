// TODO: I sort of started this but it needs to be finished

import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

function ActionSportsHeirachyImage() {
  return <StaticImage src="https://snowboardtools.s3.us-west-1.amazonaws.com/action-sports-heirachy.jpeg"
    alt="heirachy of action sports" />
}


const HeirachyPage = () => {
  return (
    <main>
      <title>Heirachy</title>
      <h1>Action Sports Heirachy</h1>
      <ActionSportsHeirachyImage />
      <p>I think this came from YoBeat at some point but thats gone and it needs to be saved somewhere</p>
    </main>
  )
}

export default HeirachyPage
