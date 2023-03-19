import "./App.scss"
import { useRouter } from "./routes/router"
import { PlayStatusProvider } from "./utiliities/PlayStatus"
import { ResourceInfoProvider } from "./utiliities/ResourceInfo"
import React, { useState } from "react"
import Routes from "./routes"
import { Toaster } from "react-hot-toast"

const App: React.FC = () => {
  const { location, navigate } = useRouter()
  const [state, setstate] = useState(0)
  // console.log(location)
  return (
    <ResourceInfoProvider>
      <PlayStatusProvider>
        <div className="App">
          {Routes}
          <Toaster />
        </div>
      </PlayStatusProvider>
    </ResourceInfoProvider>
  )
}

export default App
