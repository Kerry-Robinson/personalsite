import React from "react"
import { Box, Button, Collapsible, Layer, Heading } from "grommet"
import { FormClose } from "grommet-icons"
import PropTypes from "prop-types"

const SideBar = ({ showSidebar, size, setShowSidebar, Nav }) => {
  return (
    <>
      {!showSidebar || size !== "small" ? (
        <Collapsible direction="horizontal" open={showSidebar}>
          <Box flex width="medium" align="center" justify="center">
            <Heading size="large" margin="small">
              Designing <br />
              Tomorrow
            </Heading>
            <Box width="medium" align="center" justify="center" margin="medium">
              <blockquote>
                Full Stack Engineer Automation Specialist Tabletop Enthusiast
              </blockquote>
            </Box>
            <Nav />
          </Box>
        </Collapsible>
      ) : (
        <Layer>
          <Box tag="header" justify="end" align="center" direction="row">
            <Button
              icon={<FormClose />}
              onClick={() => setShowSidebar(!showSidebar)}
            />
          </Box>
          <Box fill align="center" justify="center">
            <Nav />
          </Box>
        </Layer>
      )}
    </>
  )
}
SideBar.propTypes = {
  showSidebar: PropTypes.bool,
  setShowSidebar: PropTypes.func,
  size: PropTypes.string,
  Nav: PropTypes.func
}
SideBar.defaultProps = {
  showSidebar: false,
  setShowSidebar: () => {
    throw new Error("Populate setShowSidebar")
  },
  size: "large",
  Nav: () => <>Empty Nav</>
}
export default SideBar
