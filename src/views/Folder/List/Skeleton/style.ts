import styled from "styled-components"

export const SkeletonContainer = styled.div`
  background: snow;
  margin: 0 auto;
  border-radius: 3px;
  width: 100%;

  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-radius: 5px;
    line-height: 1.5rem;
    .index {
      margin: 0.2rem 0.8rem;
      height: 1.5rem;
      border-radius: 50%;
      width: 1.5rem;
      flex-basis: 1.5rem;
      text-align: center;
    }

    .label {
      margin-right: auto;
    }
  }

  .skeletons {
    position: relative;
    display: block;
    overflow: hidden;
    width: 100%;
    min-height: 20px;
    background-color: #ededed;
  }
  .skeletons:empty::after {
    display: block;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    transform: translateX(-100%);
    background: linear-gradient(
      90deg,
      transparent,
      rgba(216, 216, 216, 0.253),
      transparent
    );
    animation: loading 1.5s infinite;
  }

  @keyframes loading {
    // animation
    from {
      left: -100%;
    }
    to {
      left: 120%;
    }
  }
`
