import React from "react"
import { Box, List } from "grommet"
import ROUTES from "../router/paths"

const SideNav = () => {
  return (
    <Box flex fill direction="column" align="center" pad="large">
      <List
        data={ROUTES}
        primaryKey="display"
        pad={{ horizontal: "xlarge", vertical: "medium" }}
        gap="large"
        // eslint-disable-next-line no-return-assign
        onClickItem={event => (window.location.href = event.item.path)}
      />
    </Box>
  )
}
export default SideNav
