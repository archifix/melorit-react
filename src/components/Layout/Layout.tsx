import React from "react"
import Header from "./Header/Header"

const Layout: React.FC = ({ children }) => {
  return (
    <div id="wrapper">
      <Header />
      <div className="container mx-auto">{children}</div>
    </div>
  )
}

export default Layout
