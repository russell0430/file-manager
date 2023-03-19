import React from "react"
import Login from "@/views/Login"
import Register from "@/views/Register"
import Detail from "@/views/Detail"

import { Route } from "./types"

import { useRoutes as Routes } from "./useRoutes"

import Layout from "@/views/Layout"
const routes: Route[] = [
  {
    to: "/login",
    element: <Login></Login>,
  },
  {
    to: "/register",
    element: <Register />,
  },
  {
    to: "/default",
    defaultIndex: true,
    element: <Layout />,
  },
]
export default <Routes routes={routes} />
