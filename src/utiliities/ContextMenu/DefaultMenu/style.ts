import styled from "styled-components"

export const MenuWrap = styled.div`
  background: white;
  border-radius: 0.5rem;
  border: 0.1rem solid black;
  .option {
    display: flex;
    padding: 0.5rem;
    border-bottom: 0.1rem solid black;
    cursor: pointer;
    &:last-child {
      border-bottom: none;
    }
  }
`
