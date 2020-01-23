import React from "react"
import { Footer, Anchor, Box } from "grommet"
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
  <Footer justify="center">
    <Box direction="row" gap="xxsmall" justify="center">
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
  </Footer>
)
export default SocialMenu
