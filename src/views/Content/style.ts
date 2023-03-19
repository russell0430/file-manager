import styled from "styled-components"
import { Layout, Color, Transition } from "@/styles/global"

const NavHeight = "2rem"
export const ContentContainer = styled.div`
  position: relative;
  /* height: 100vh; */
  min-width: 20rem;
  padding-top: ${Layout.ContentPaddingTop};
  .content-header {
    position: fixed;
    top: 0;
    left: ${Layout.SidebarWidth};
    right: 0;
    min-width: 15rem;
    height: ${Layout.HeaderHeight};
    z-index: 200;
    background-color: ${Color.HeaderBgc};
    transition: ${Transition.SidebarTransition};
    &.hide-sidebar {
      left: 0;
    }
  }

  .navbar {
    height: ${NavHeight};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    span:last-child {
      margin-right: auto;
    }
  }

  .content-body {
    /* display: flex; */
    position: relative;
    /* height: 100%; */
    /* width: 20rem; */
    height: calc(100% - ${NavHeight});
  }
`
