import styled from "styled-components"

export const HeaderContainer = styled.div`
  /* box-shadow: 0 15px 25px rgba(0, 0, 0, 0.15), 0 5px 10px rgba(0, 0, 0, 0.05); */
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: all 0.2s ease-in;

  .actions {
    display: flex;
    flex: 0 1 auto;
    justify-content: space-around;
    align-items: center;
    padding: 0 1rem;

    .action {
    }
  }
  .status {
    flex: 0 1 8rem;
    .btn-login {
      text-align: center;
      height: 1rem;
      padding: 0.5rem 2rem;
      background: rgba(0,127,255,0.2);
      transition:all 0.3s ease-in-out;
      &:hover{
        background: rgba(0,127,255,0.6);
      }
      border-radius: 0.4rem;
      cursor: pointer;
    }
  }
`

export const UserContainer = styled.div<{ popover: boolean }>`
  position: relative;
  .avatar-wrap {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .avatar {
      height: 2rem;
      width: 2rem;
      border-radius: 50%;
      cursor: pointer;
      z-index: 100;
      transition: all 0.2s ease;
      transform-origin: top;
      transform: scale(${(props) => (props.popover ? 2 : 1)});
    }
  }
  .popover-panel {
    z-index: 99;
    padding-top: 3rem;
    border-radius: 5px;
    /* border: 1px solid black; */

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;

    width: 100%;
    left: 50%;
    transform: translate(-50%);
    background: #d2d2d0;
    color: black;
    transition: all 0.3s ease;
    opacity: ${(props) => (props.popover ? 1 : 0)};
    visibility: ${(props) => (props.popover ? "visbile" : "hidden")};
    .username {
      font-weight: 500;
    }
    .logout {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 100%;

      .logout-icon {
        height: 1.5rem;
        width: 1.5rem;
        margin: 0.2rem;
        padding: 0.1rem;
        border-radius: 4px;
        transition: all 0.2s ease-in;
        font-weight: 200;
        cursor: pointer;
        .icon {
          height: 100%;
          width: 100%;
        }
        &:hover {
          font-weight: 400;
          background: rgba(66, 66, 66, 0.5);
        }
      }
    }
  }
`
