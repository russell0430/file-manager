import styled from "styled-components"

export const ContextMenuContainer = styled.div`
  width: 100%;
  height: 100%;
`
export const MenuWrap = styled.div<{ x: number; y: number; show: boolean }>`
  position: absolute;
  display: ${(props) => (props.show ? "block" : "none")};
  left: ${(props) => props.x}px;
  top: ${(props) => props.y}px;
  z-index: 99;
`
