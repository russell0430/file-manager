import styled from "styled-components"
const playerHeight = "3rem"
export const PlayerBody = styled.div`
  position: relative;
  display: flex;
`

export const PlayerPic = styled.div<{ cover: string }>`
  position: relative;

  height: ${playerHeight};
  width: ${playerHeight};
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.cover});
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover .player-button {
    opacity: 1;
  }

  .player-button {
    position: absolute;
    border-radius: 50%;
    opacity: 0.8;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    background: rgba(0, 0, 0, 0.2);
    transition: all 0.1s ease;

    path {
      fill: #fff;
    }
  }
  .player-hide {
    display: none;
  }

  .player-play {
    width: 2rem;
    height: 2rem;
    border: 2px solid #fff;
    /* svg {
      position: absolute;
      top: 3px;
      left: 4px;
      height: 20px;
      width: 20px;
    } */
  }

  .player-pause {
    width: 16px;
    height: 16px;
    border: 2px solid #fff;
    bottom: 4px;
    right: 4px;
    svg {
      position: absolute;
      top: 2px;
      left: 2px;
      height: 12px;
      width: 12px;
    }
  }
`
export const PlayerInfo = styled.div`
  height: ${playerHeight};
  width: 100%;
  box-sizing: border-box;
  .player-music {
    overflow: hidden;
    white-space: nowrap;
    margin: 0;
    user-select: text;
    cursor: default;
    padding-bottom: 2px;
    height: 1.5rem;

    .player-title {
      font-size: 1em;
    }

    .player-author {
      font-size: 0.8em;
      color: #666;
    }
  }
`

export const PlayerController = styled.div<{ percent: number }>`
  position: relative;
  display: flex;
  align-items: center;

  .player-bar-wrap {
    // padding: 4px 0;
    cursor: pointer !important;
    flex: 1 0 10rem;

    &:hover {
      .player-bar .player-played .player-thumb {
        transform: scale(1.5);
      }
    }

    .player-bar {
      position: relative;
      height: 5px;
      width: 100%;
      background: #cdcdcd;

      .player-played {
        transition: all 0.5s ease;
        background: red;
        height: 5px;
        width: ${(props) => props.percent}%;
      }

      .player-loaded {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        height: 5px;
      }
    }
  }
`

export const PlayerTime = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  /* bottom: 4px; */
  height: 1rem;
  line-height: 1rem;
  color: #999;
  font-size: 0.5em;
  padding-left: 0.5rem;

  .player-time-innner {
    vertical-align: middle;
    line-height: 100%;
  }

  .player-icon {
    cursor: pointer;
    height: 1rem;
    line-height: 1rem;
    transition: all 0.2s ease;
    .icon {
      height: 1rem;
      width: 1rem;
      path {
        fill: #666;
      }

      &.player-icon-loop {
        margin-right: 2px;
      }

      &:hover {
        path {
          fill: #000;
        }
      }
    }
    // &.player-icon-menu {
    //   display: none;
    // }
  }

  &.player-time-narrow {
    .player-icon-mode {
      display: none;
    }

    .player-icon-menu {
      display: none;
    }
  }
`
export const PlayerVolumeWrap = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer !important;

  &:hover .player-volume-bar-wrap {
    height: 1.5rem;
  }

  .player-volume-bar-wrap {
    position: absolute;
    bottom: 0;
    /* height: 1.5rem; */

    width: 100%;
    height: 0;
    z-index: 99;
    /* overflow: hidden; */
    transition: all 0.2s ease-in-out;

    &.player-volume-bar-wrap-active {
      height: 1.5rem;
    }

    .player-volume-bar {
      left: 50%;
      bottom: 50%;
      transform: translate(-50%, 0);
      position: absolute;
      /* bottom: 0; */
      width: 0.3rem;
      height: 100%;
      background: #aaa;
      border-radius: 0.5rem;
      /* overflow: hidden; */

      .player-volume {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 100%;
        border-radius: 0.5rem;
        background: purple;
        transition: all 0.1s ease;
      }
    }
  }
`
