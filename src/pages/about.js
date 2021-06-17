import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function About() {
  return (
    <div style={{ color: `teal` }}>
      {/* <h1>About Gatsby</h1> */}
      <Link to="/">Home</Link>
      <Header headerText="About Gatsby"/>
      <p>Such wow. Very React.</p>
    </div>
  )
}