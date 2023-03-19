import React, { useState } from "react"
import { Props } from "./types"
import { Link as LinkType } from "@/types"
import SearchBox from "@/components/SearchBox"
import { useAuth } from "@/utiliities/Auth"
import { login } from "@/request"
import defaultAvatar from "../../assets/default-avatar.jpg"
import { useRouter } from "@/routes/router"
import { HeaderContainer, UserContainer } from "./style"
import LogOut from "@/components/icons/LogOut"
import toast from "react-hot-toast"
import { useLayout } from "@/utiliities/Layout"
import List from "../icons/List"

const baseClass = "header"

const links: LinkType[] = [
  {
    name: "a",
    handle: () => {
      console.log("click a")
    },
  },
  {
    name: "b",
    handle: () => {
      console.log("click b")
    },
  },
  {
    name: "c",
    handle: () => {
      console.log("click c")
    },
  },
]

const Header: React.FC<React.PropsWithChildren<Props>> = (props) => {
  const { title = "Title", className, avatar = defaultAvatar } = props
  const { user, logout } = useAuth()
  const { navigate } = useRouter()
  const { toggleShowSidebar, showSidebar } = useLayout()
  const [showPanel, setShowPanel] = useState(false)
  const handlelogout = () => {
    logout()
    toast("logout successfully", { position: "top-center", duration: 2000 })
  }
  return (
    <HeaderContainer className="header">
      <div onClick={toggleShowSidebar}>
        <List />
      </div>
      <div className="searchbox">
        <SearchBox withIcon placeholder="search" width="100%" />
      </div>
      <div className="actions">
        {links &&
          links.map(({ icon, name, handle }) => {
            return (
              <div className="action" key={name} onClick={handle}>
                {icon || name}
              </div>
            )
          })}
      </div>
      <div className="status">
        {!user ? (
          <div className="btn-login" onClick={() => navigate("/login")}>
            login
          </div>
        ) : (
          <UserContainer
            className="user"
            popover={showPanel}
            onMouseEnter={() => {
              setShowPanel(true)
            }}
            onMouseLeave={() => {
              setShowPanel(false)
            }}
          >
            <div className="avatar-wrap">
              <img src={avatar} alt="avatar" className="avatar" />
            </div>
            <div className="popover-panel">
              <div className="username">{user.username}</div>
              <div className="logout">
                <div className="logout-icon" onClick={handlelogout}>
                  <LogOut />
                </div>
                <div className="logout-label">logout</div>
              </div>
            </div>
          </UserContainer>
        )}
      </div>
    </HeaderContainer>
  )
}

export default Header
