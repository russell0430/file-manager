import Search from "./components/icons/Drag"
import Header from "./views/Header"
import "./App.scss"
import List from "./views/List"
import { useRouter } from "./routes/router"
import { PlayStatusProvider } from "./utiliities/PlayStatus"
import { ResourceInfoProvider } from "./utiliities/ResourceInfo"
import { useState } from "react"
// import Detail from "./views/Detail"
import Routes from "./routes"
const App: React.FC = () => {
  // const links = [{ to: "/", icon: <Search /> }]
  const { location, navigate } = useRouter()
  const [state, setstate] = useState(0)
  // console.log(location)
  return (
    <ResourceInfoProvider>
      <PlayStatusProvider>
        <div className="App">
          {/* <Detail /> */}
          {Routes}
        </div>
      </PlayStatusProvider>
    </ResourceInfoProvider>
  )
}

export default App
