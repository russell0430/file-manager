import styled from "styled-components"

export const Menu = styled.div`
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

export const DetailContainer = styled.div`
  .main {
    display: flex;
    margin-top: 1rem;
    /* .sidebar {
      // position: absolute;
      padding-right: 1rem;
      transition: all 0.3s ease-in;
      width: 200px;
      flex: 0 1 auto;
      overflow: hidden;
      &.hide {
        width: 1rem;
      }
    } */
  }
`

export const ContentContainer = styled.section`
  flex: 1 1 auto;
  /* overflow: hidden; */

  width: 100%;
  position: relative;
  .navbar {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    span:last-child {
      margin-left: auto;
    }
  }
  .content {
    width: 30rem;
  }
`
