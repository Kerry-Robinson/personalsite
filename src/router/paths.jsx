import { lazy } from "react"

const ROUTES = [
  {
    name: "home",
    display: "Home",
    path: "/",
    component: lazy(() => import("../pages/home"))
  },
  {
    name: "portfolio",
    display: "Portfolio",
    path: "/portfolio",
    component: lazy(() => import("../pages/portfolio"))
  },
  {
    name: "articles",
    display: "Articles",
    path: "/articles",
    component: lazy(() => import("../pages/articles"))
  }
]
export default ROUTES
