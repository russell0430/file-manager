import styled from "styled-components"
import { Layout, Color } from "@/styles/global"
export const SidebarContainer = styled.aside`
  width: 100%;
  height: 100%;

  .sidebar-header {
    padding-left: 2rem;
    height: ${Layout.HeaderHeight};
    background-color: ${Color.HeaderBgc};
    display: flex;
    align-items: center;
    .sidebar-label {
      height: 2rem;
      line-height: 2rem;
      margin-left: 1rem;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      position: relative;
      font-weight: 500;
      color: #007fff;
      background-color: rgba(0, 127, 255, 0.1);

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        right: 0;
        height: 0;
        width: 0;
        border-color: rgba(0, 127, 255, 0.2) #fff #fff rgba(0, 127, 255, 0.2);
        border-style: solid;
        border-width: 0.3rem;
      }
    }
  }

  .sidebar-content {
    height: calc(100vh - ${Layout.HeaderHeight});
    background-color: ${Color.SidebarBgc};
  }
`
