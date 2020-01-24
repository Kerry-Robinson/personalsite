import React, { useContext } from "react"
import {
  Box,
  Image,
  Paragraph,
  Heading,
  Anchor,
  ResponsiveContext
} from "grommet"
import PropTypes from "prop-types"

const Entry = ({ img, comment, link, title }) => {
  const size = useContext(ResponsiveContext)

  return (
    <Box
      direction={size !== "small" ? "row" : "column"}
      elevation="small"
      size="medium"
      margin="medium"
      background="brand"
    >
      {size !== "small" ? (
        <Box height="medium" width="medium">
          <Image fit="cover" src={img} />
        </Box>
      ) : null}

      <Box pad="small">
        <Heading size="small" margin="none">
          {title}
        </Heading>
        <Paragraph margin="none">{comment}</Paragraph>

        <Anchor
          href={link}
          target="_blank"
          label="Learn More"
          alignSelf="end"
        />
      </Box>
    </Box>
  )
}
Entry.propTypes = {
  img: PropTypes.string,
  comment: PropTypes.string,
  link: PropTypes.string,
  title: PropTypes.string
}
Entry.defaultProps = {
  img: "//v2.grommet.io/assets/Wilderpeople_Ricky.jpg",
  comment: "Empty Comment",
  link: "Missing",
  title: "Missing Title"
}

export default Entry
