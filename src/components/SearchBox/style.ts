import styled from "styled-components"
export const SearchBoxContainer = styled.div`
  @import "../../scss/styles.scss";
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  @include mid-break {
    .icon--search {
      display: none;
    }
  }
  .icon--search {
    flex: 1 0 auto;
    height: 2rem;
    width: 2rem;
    flex-basis: 2rem;
    background-color: rgba(221, 221, 221);
  }
  .input {
    padding: 0.5rem;
    input {
      @include formInput;
      height: 2rem;
      line-height: 2rem;
      box-sizing: border-box;
      flex-grow: 1;
    }
  }
`
