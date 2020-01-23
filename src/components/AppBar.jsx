import React from "react"
import { Menu, FormView } from "grommet-icons"
import { Box, Button } from "grommet"
import PropTypes from "prop-types"

const Bar = props => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    style={{ zIndex: "1" }}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
)

const AppBar = ({ showSidebar = false, setShowSidebar, setDarkMode }) => {
  return (
    <Bar>
      <Button
        icon={<Menu />}
        hoverIndicator
        onClick={() => setShowSidebar(!showSidebar)}
      />
      <Button icon={<FormView />} hoverIndicator onClick={setDarkMode} />
    </Bar>
  )
}
AppBar.propTypes = {
  showSidebar: PropTypes.bool,
  setShowSidebar: PropTypes.func,
  setDarkMode: PropTypes.func
}
AppBar.defaultProps = {
  showSidebar: false,
  setShowSidebar: () => {
    throw new Error("Populate setShowSidebar")
  },
  setDarkMode: () => {
    throw new Error("Populate setDarkMode")
  }
}
export default AppBar
