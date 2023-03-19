import styled from "styled-components"
import background from "@/assets/login-background.png"
import info_img from "@/assets/info-img.jpg"
// import style from "@/style/global"

// copy from login
export const RegisterWrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${background});
  background-size: 100% 100%;
`
export const RegisterCard = styled.div`
  height: 30rem;
  width: 50rem;
  background: #f2e6ff;
  opacity: 0.6;
  border-radius: 0.8rem;
  box-shadow: 0 0.2rem 0.1rem black;

  padding: 1rem;
  .title {
    font-size: 1.4em;
    span {
    }
  }
  .content {
    display: flex;
    align-items: center;
    height: 100%;
    .info-img-wrap {
      flex: 10 0 auto;
      height: 100%;
      .info-img {
        background-image: url(${info_img});

        background-position: center;
        opacity: 0.3;
        height: 100%;
        width: 100%;
        background-repeat: no-repeat;
        background-size: contain;
      }
    }
    .form-wrap {
      flex: 1 0 auto;
      min-width: 18rem;
    }
  }
`

export const Form = styled.div`
  border-radius: 0.2rem;
  max-width: 18rem;
  /* box-shadow: 0.2rem 0.2rem black; */
  .login-info {
    margin-bottom: 1rem;
    .info-title {
      font-weight: 500;
      font-size: 2em;
      margin-bottom: 0.5rem;
    }
    .info-detail {
      font-weight: 100;
      font-size: 0.8em;
    }
  }
  .input {
    padding: 0.3rem 0;
    border-radius: 0.5rem;
    background-color: white;

    display: flex;
    justify-content: space-around;
    align-items: center;

    transition: all 0.5s ease;
    .prefix-icon {
      height: 1.5rem;
      width: 1.5rem;
    }
    .input-content {
      /* margin: auto; */
      .label {
        font-size: 0.8em;
        font-weight: 400;
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
      background: #999;
      opacity: 0.7;
      color: white;
    }
  }
  .btns {
    margin-top: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .btn {
      width: 6rem;
      height: 2rem;
      border-radius: 3rem;
      cursor: pointer;
      opacity: 0.8;
      transition: all 0.1s ease-out;
      &:hover {
        opacity: 1;
      }
      div {
        line-height: 2rem;
        text-align: center;
        font-weight: 400;
        font-size: 1.2em;
      }
      &.register {
        background: #1786b1;
        color: white;
      }
    }
  }
`
