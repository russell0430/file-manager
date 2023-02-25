import React from "react"
import ReactDOM from "react-dom/client"
// import { BrowserRouter as Router } from "react-router-dom"
import App from "./App"
import { Router } from "./routes/router"
import "./index.css"
import "@/scss/app.scss"
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)
