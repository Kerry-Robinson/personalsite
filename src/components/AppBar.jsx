import React from "react"
import { FormView } from "grommet-icons"
import { Box, Button, Heading } from "grommet"
import PropTypes from "prop-types"

const Bar = props => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    style={{ zIndex: "1", position: "fixed" }}
    elevation="small"
    background="brand"
    flex="grow"
    fill="horizontal"
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
)

const AppBar = ({ setDarkMode, Nav }) => {
  return (
    <Bar>
      <Nav />
      <Heading size="small" margin="none">
        Designs Suspect
      </Heading>
      <Button icon={<FormView />} hoverIndicator onClick={setDarkMode} />
    </Bar>
  )
}
AppBar.propTypes = {
  Nav: PropTypes.func,
  setDarkMode: PropTypes.func
}
AppBar.defaultProps = {
  Nav: () => {
    throw new Error("Populate Nav")
  },
  setDarkMode: () => {
    throw new Error("Populate setDarkMode")
  }
}
export default AppBar
