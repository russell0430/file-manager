import styled from "styled-components"

export const ImageContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  /* width: 20rem; */
  .image-left,
  .image-right {
    position: absolute;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: #007fff;
    z-index: 99;

    opacity: 0.5;
    transition: opacity 0.2s ease-in;
    &:hover {
      opacity: 0.9;
    }
    .icon {
      cursor: pointer;

      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 50%;
      height: 50%;
    }
  }

  .image-left {
    left: 0;
    top: 50%;
  }
  .image-right {
    right: 0;
    top: 50%;
  }

  .image-content {
    /* display: flex;
    align-items: center;
    position: relative;
    flex: 10 0 auto; */
    padding-bottom: 1rem;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    img {
      object-fit: contain;
      height: 100%;
      width: 100%;
    }
  }
`
