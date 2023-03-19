import styled from "styled-components"
import { Layout, Transition } from "@/styles/global"
export const LayoutContainer = styled.div``

export const MainContainer = styled.div`
  .sidebar {
    width: ${Layout.SidebarWidth};
    height: calc(100vh - ${Layout.HeaderHeight});
    transition: ${Transition.SidebarTransition};
    position: fixed;
  }

  .content {
    transition: ${Transition.SidebarTransition};
    margin-left: ${Layout.SidebarWidth};
    height: calc(100vh - ${Layout.ContentPaddingTop});
  }

  &.hide {
    .sidebar {
      margin-left: -${Layout.SidebarWidth};
    }
    .content {
      margin-left: 0;
    }
  }
`
