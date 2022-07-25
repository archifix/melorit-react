import React from "react"
import { Routes, Route } from "react-router"
import Home from "./components/pages/Home/Home "

function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
    </Routes>
  )
}

export default App
