import { BrowserRouter as Router, Routes } from "react-router-dom"

import './i18n'

// Importing pages
// TODO

// Importing the main layout component
import Layout from "./app/layout/Layout"

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* TODO: Map routes to pages */}
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
