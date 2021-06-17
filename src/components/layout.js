import React from "react"

export default function Layout({ title,children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <h1>{title}</h1>
      {children}
    </div>
  )
}