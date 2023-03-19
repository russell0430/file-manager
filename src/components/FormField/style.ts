import styled from "styled-components"

export const FieldWrap = styled.div`
  padding: 0.3rem 0;
  border-radius: 0.5rem;
  background-color: white;

  display: flex;
  justify-content: space-around;
  align-items: center;

  .prefix-icon {
    height: 1.5rem;
    width: 1.5rem;
  }
  .input-content {
    /* margin: auto; */
    .label {
      font-size: 0.8em;
      font-weight: 200;
      margin: 0.2rem 0;
    }
  }
  .appendix-icon {
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    background-color: #00b359;
    .icon {
      height: 100%;
      width: 100%;
    }
  }
  &.active {
    opacity: 1;
  }
`
