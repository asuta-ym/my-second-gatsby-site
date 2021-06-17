import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import * as styles from "./header.module.css"

const ListLink = props => (
  <li className={styles.navbarItem}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Header(props) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>{data.site.siteMetadata.title}</h1>
      <ul className={styles.navbar}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
  )
}