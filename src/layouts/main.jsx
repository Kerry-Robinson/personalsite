import React from "react"
import { Box } from "grommet"
import PropTypes from "prop-types"
import AppBar from "../components/AppBar"
import SideBar from "../components/SideBar"
import NavMenu from "../components/NavMenu"
import SocialMenu from "../components/SocialMenu"

const main = ({ size, showSidebar, setShowSidebar, Router, setDarkMode }) => {
  return (
    <>
      <AppBar
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        setDarkMode={setDarkMode}
      />
      <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
        <SideBar
          size={size}
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
          Nav={NavMenu}
        />
        <Box flex align="center" justify="center">
          <Router />
        </Box>
      </Box>
      <SocialMenu />
    </>
  )
}
main.propTypes = {
  showSidebar: PropTypes.bool,
  setShowSidebar: PropTypes.func,
  size: PropTypes.string,
  Router: PropTypes.func,
  setDarkMode: PropTypes.func
}
main.defaultProps = {
  showSidebar: false,
  setShowSidebar: () => {
    throw new Error("Populate setShowSidebar")
  },
  size: "large",
  Router: () => <>Invalid Page</>,
  setDarkMode: () => {
    throw new Error("Populate setDarkMode")
  }
}
export default main
