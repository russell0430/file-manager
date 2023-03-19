import { Item } from "@/types"
import { Option } from "@/types/Option"
import React, {
  MouseEventHandler,
  useEffect,
  useState,
  useRef,
  useContext,
  createContext,
} from "react"
import { ContextMenuContainer, MenuWrap } from "./style"
import { ContextMenuContext, ContextMenuProps } from "./types"
import DefaultMenu from "./DefaultMenu"
import ReactDOM from "react-dom"
const Context = createContext({} as ContextMenuContext)
export const ContextMenuProvider: React.FC<ContextMenuProps> = (props) => {
  const {
    onContextMenu,
    onContextMenuExit,
    Menu = DefaultMenu,
    children,
    style,
  } = props
  const [showConextMenu, setShowContextMenu] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [activeItems, setActiveItems] = useState<Item[]>([])

  const menuRef = useRef<HTMLDivElement>(null)

  const contextMenuExitFunc = () => {
    onContextMenuExit && onContextMenuExit()
    setShowContextMenu(false)
    setActiveItems([])
    // maybe split active item into another context
  }

  const contextMenuHandler = (event: React.MouseEvent, item?: Item) => {
    event.preventDefault()

    if (item) {
      item.options =
        item.options?.map((option) => ({
          ...option,
          action: () => {
            option.action && option?.action()

            // finish contextmenu
            contextMenuExitFunc()
          },
        })) || []
      setActiveItems((items) => [...items, item])
    }
    setShowContextMenu(true)
    console.log()
    setPosition({ x: event.pageX, y: event.pageY }) // need to check
    onContextMenu && onContextMenu()
  }

  useEffect(() => {
    const cancelContextMenu = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Element)
      ) {
        setShowContextMenu(false)
      }
    }
    document.addEventListener("click", cancelContextMenu)
    return () => document.addEventListener("click", cancelContextMenu)
  }, [setShowContextMenu])

  // cancel all contextmenu
  useEffect(() => {
    const cancelContextMenu = (event: MouseEvent) => {
      event.preventDefault()
    }
    document.addEventListener("contextmenu", cancelContextMenu)
    return () => document.removeEventListener("contextmenu", cancelContextMenu)
  }, [])

  return (
    <Context.Provider
      value={{
        show: showConextMenu,
        setShow: setShowContextMenu,
        position,
        setPosition,
        onContextMenu: contextMenuHandler,
        activeItems,
      }}
    >
      {activeItems[0] &&
        !!activeItems[0].options &&
        ReactDOM.createPortal(
          <MenuWrap {...position} show={showConextMenu} ref={menuRef}>
            <Menu item={activeItems[0]} />
          </MenuWrap>,
          document.body
        )}
      <ContextMenuContainer style={style}>{children}</ContextMenuContainer>
    </Context.Provider>
  )
}

export const useContextMenu = (): ContextMenuContext => useContext(Context)
