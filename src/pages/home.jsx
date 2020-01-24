import React, { useContext } from "react"
import { Paragraph, Heading, Box, ResponsiveContext } from "grommet"
import { Node, Add, Reactjs, Music, Gamepad } from "grommet-icons"

const Home = () => {
  const size = useContext(ResponsiveContext)
  return (
    <>
      <Heading size="small">About Me</Heading>
      <Paragraph>
        Hi, my name is Kerry. I am a fullstack engineer focusing on network
        automation and applications to complete complex network interactions. My
        background in systems administration has helped me gain an understanding
        of the plight of the modern networking engineer. In my free time, I
        practice development, enjoy attending music festivals, and the
        occassional session of D&D. Check out my portfolio for examples of my
        work and my articles for discussions on various topics.
      </Paragraph>
      {size !== "small" ? (
        <Box direction="row-responsive" fill justify="center">
          <Box direction="column" pad="small" align="center">
            <Box direction="row" align="center">
              <Node size="large" justify="center" /> <Add />{" "}
              <Reactjs size="large" />
            </Box>
            <Box direction="row" align="center" justify="center">
              FullStack
            </Box>
          </Box>
          <Box direction="column" pad="small" align="center">
            <Box direction="row" align="center">
              <Music size="large" justify="center" />
            </Box>
            <Box direction="row" align="center" justify="center">
              Concerts
            </Box>
          </Box>
          <Box direction="column" pad="small" align="center">
            <Box direction="row" align="center">
              <Gamepad size="large" justify="center" />
            </Box>
            <Box direction="row" align="center" justify="center">
              Gaming
            </Box>
          </Box>
        </Box>
      ) : null}
    </>
  )
}

export default Home
