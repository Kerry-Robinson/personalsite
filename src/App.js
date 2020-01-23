import React, { useState } from "react"
import { Box, Grommet, ResponsiveContext } from "grommet"
import Layout from "./layouts/main"
import Router from "./router/index"
import theme from "./theme"

function App() {
  const [showSidebar, setShowSidebar] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  return (
    <Grommet theme={theme} full themeMode={darkMode ? "dark" : "light"}>
      <ResponsiveContext.Consumer>
        {size => (
          <Box fill>
            <Layout
              size={size}
              showSidebar={showSidebar}
              setShowSidebar={setShowSidebar}
              Router={Router}
              setDarkMode={() => setDarkMode(!darkMode)}
            />
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  )
}

export default App
