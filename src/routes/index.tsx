import React from "react"
import Login from "@/views/Login"
import Detail from "@/views/Detail"
import { Route } from "./types"
import Sidebar from "@/components/Sidebar"
import { useRoutes as Routes } from "./useRoutes"
const routes: Route[] = [
  {
    to: "/login",
    element: <Login></Login>,
  },
  {
    to: "/sidebar",
    element: <Sidebar></Sidebar>,
  },
  {
    to: "/default",
    defaultIndex: true,
    element: <Detail></Detail>,
  },
]
export default <Routes routes={routes} />
