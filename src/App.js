import React, { useState } from "react"
import { Box, Grommet } from "grommet"
import Layout from "./layouts/main"
import Router from "./router/index"
import theme from "./theme"

function App() {
  const [showSidebar, setShowSidebar] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  return (
    <Grommet theme={theme} full themeMode={darkMode ? "dark" : "light"}>
      <Box>
        <Layout
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
          Router={Router}
          setDarkMode={() => setDarkMode(!darkMode)}
        />
      </Box>
    </Grommet>
  )
}

export default App
