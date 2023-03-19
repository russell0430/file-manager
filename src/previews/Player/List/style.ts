import styled from "styled-components"

export const PlayerList = styled.div`
  //   overflow: auto;
  transition: all 0.5s ease;
  //   display: none;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.4rem;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 0.2rem;
    background-color: #eee;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #ccc;
  }

  li {
    box-sizing: border-box;
    position: relative;
    height: 1.5rem;
    line-height: 1.5rem;
    padding: 0 1rem;
    font-size: 0.6em;
    border-top: 1px solid #e9e9e9;
    cursor: pointer;
    transition: all 0.2s ease;
    overflow: hidden;
    margin: 0;

    &:first-child {
      border-top: none;
    }
    &:hover {
      background: #efefef;
    }
    &.player-list-light {
      background: #e9e9e9;

      .player-list-cur {
        display: inline-block;
      }
    }

    .player-list-cur {
      display: none;
      width: 0.2rem;
      height: 1.5rem;
      position: absolute;
      left: 0;
      top: 0.3rem;
      cursor: pointer;
    }
    .player-list-index {
      color: #666;
      margin-right: 1rem;
      cursor: pointer;
    }
    .player-list-author {
      color: #666;
      float: right;
      cursor: pointer;
    }
  }
`
