import React from "react"
import { Anchor, Box } from "grommet"
import { Github, Linkedin, Instagram } from "grommet-icons"

const accounts = [
  {
    name: "github",
    href: "https://github.com/Kerry-Robinson",
    icon: <Github />
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/kerry-robinson-56b09521/",
    icon: <Linkedin />
  },
  {
    name: "instagram",
    href: "https://www.instagram.com/kerryrobinson5164/",
    icon: <Instagram />
  }
]
const SocialMenu = () => (
  <Box
    justify="center"
    fill="horizontal"
    elevation="small"
    background="light-1"
    style={{ bottom: 0, position: "fixed" }}
    direction="row"
    gap="xsmall"
    height="xxsmall"
  >
    {accounts.map(account => (
      <Anchor
        key={account.name}
        icon={account.icon}
        href={account.href}
        hoverIndicator
        target="_blank"
      />
    ))}
  </Box>
)
export default SocialMenu
