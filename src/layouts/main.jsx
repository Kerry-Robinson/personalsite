import React from "react"
import { Box } from "grommet"
import PropTypes from "prop-types"
import AppBar from "../components/AppBar"
import NavMenu from "../components/NavMenu"
import Footer from "../components/Footer"

const main = ({ showSidebar, setShowSidebar, Router, setDarkMode }) => {
  return (
    <>
      <Box direction="column">
        <AppBar
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
          setDarkMode={setDarkMode}
          Nav={NavMenu}
        />
        <Box
          direction="column"
          pad={{ top: "xlarge" }}
          fill="vertical"
          align="center"
          justify="center"
        >
          <Router />
        </Box>
        <Footer />
      </Box>
    </>
  )
}
main.propTypes = {
  showSidebar: PropTypes.bool,
  setShowSidebar: PropTypes.func,
  Router: PropTypes.func,
  setDarkMode: PropTypes.func
}
main.defaultProps = {
  showSidebar: false,
  setShowSidebar: () => {
    throw new Error("Populate setShowSidebar")
  },
  Router: () => <>Invalid Page</>,
  setDarkMode: () => {
    throw new Error("Populate setDarkMode")
  }
}
export default main
