import { Ellipsis } from "@/styles/global"
import styled from "styled-components"

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-radius: 5px;
  line-height: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(66, 66, 66, 0.5);
  }
  .index {
    height: 1.5rem;
    width: 1.5rem;
    flex-basis: 1.5rem;
    text-align: center;
  }

  .label {
    margin-right: auto;
    ${Ellipsis()}
  }
  .actions {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .action {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: auto;
      padding: 0.5rem;
      border-radius: 50%;
      transition: all 0.2s ease-in;
      &:hover {
        background-color: rgba(0, 127, 255, 0.3);
      }
      .icon {
        height: 1rem;
        width: 1rem;
      }
    }
  }
`
