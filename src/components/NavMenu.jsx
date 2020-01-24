import React from "react"
import { Menu } from "grommet"
import { Menu as MenuIcon } from "grommet-icons"
import ROUTES from "../router/paths"

const NavMenu = () => {
  const menuItems = ROUTES.map(route => {
    return {
      label: route.display,
      // eslint-disable-next-line no-return-assign
      onClick: () => (window.location.href = route.path)
    }
  })
  return <Menu icon={<MenuIcon />} items={menuItems} />
}
export default NavMenu
