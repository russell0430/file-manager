import styled from "styled-components"
import { Ellipsis } from "@/styles/global"
export const ItemContainer = styled.ul`
  padding-left: 0.1rem;
`
export const LiItemContainer = styled.li`
  display: block;
  position: relative;
  padding-left: 0.2rem;
  /* padding-bottom:0.1rem; */

  details {
    // outline: none;
  }
  summary {
    list-style: none;
    box-sizing: border-box;
    border-radius: 0.3rem;
    padding-left:0.2rem;
    height: 1.2rem;
    line-height: 1.2rem;
    ${Ellipsis()}
    cursor: pointer;
    opacity: 0.5;
    transition: all 0.2s ease;

    &:hover {
      opacity: 0.8;
    }
    &.active {
      opacity: 1;
    }
    .item {
      padding: 0.4rem 0;
    }
  }
`
