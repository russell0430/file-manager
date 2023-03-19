import styled from "styled-components"

export const ItemContainer = styled.div`
  display: inline-block;
  margin: 0 0.5rem;
  .item {
    height: 5rem;
    cursor:pointer;
    width: 5rem;
    padding: 0.4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    item-pic {
      height: 3rem;
      width: 3rem;
    }
    .item-pic {
      font-size: 1.5em;
    }

    &:hover {
      background: rgba(66, 66, 66, 0.1);
    }
  }
`
