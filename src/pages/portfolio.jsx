import React from "react"
import { InfiniteScroll } from "grommet"
import Content from "../content/portfolio"
import Entry from "../components/PortfolioEntry"

const Portfolio = () => (
  <>
    <InfiniteScroll items={Content}>
      {(item, index) => (
        <Entry
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          title={item.title}
          img={item.img}
          comment={item.comment}
          Icon={item.Icon}
          link={item.link}
        />
      )}
    </InfiniteScroll>
  </>
)

export default Portfolio
