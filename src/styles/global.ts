import styled, { createGlobalStyle } from "styled-components"

const Globalstyle = createGlobalStyle`
//////////////////////////////
// SHADOWS
//////////////////////////////

@mixin shadow-sm {
  box-shadow: 0 2px 3px 0 rgba(0, 2, 4, 0.05),
    0 10px 4px -8px rgba(0, 2, 4, 0.02);
}

@mixin inputShadowActive {
  box-shadow: 0 2px 3px 0 rgba(0, 2, 4, 0.16),
    0 6px 4px -4px rgba(0, 2, 4, 0.13);
}

@mixin inputShadow {
  @include shadow-sm;

  &:not(:disabled) {
    &:hover {
      box-shadow: 0 2px 3px 0 rgba(0, 2, 4, 0.13),
        0 6px 4px -4px rgba(0, 2, 4, 0.1);
    }

    &:active,
    &:focus-within,
    &:focus {
      @include inputShadowActive;
    }
  }
}

@mixin formInput() {
  @include inputShadow;
  width: 100%;
  border: 1px solid var(--theme-elevation-150);
  background: var(--theme-input-bg);
  color: var(--theme-elevation-800);
  border-radius: 0;
  font-size: 1rem;
  height: base(2);
  line-height: base(1);
  padding: base(0.5) base(0.75);
  -webkit-appearance: none;

  &::-webkit-input-placeholder {
    color: var(--theme-elevation-400);
    font-weight: normal;
    font-size: 1rem;
  }

  &::-moz-placeholder {
    color: var(--theme-elevation-400);
    font-weight: normal;
    font-size: 1rem;
  }

  &:hover {
    border-color: var(--theme-elevation-250);
  }

  &:focus,
  &:focus-within,
  &:active {
    border-color: var(--theme-elevation-400);
    outline: 0;
  }

  &:disabled {
    background: var(--theme-elevation-200);
    color: var(--theme-elevation-450);

    &:hover {
      border-color: var(--theme-elevation-150);
    }
  }
}


`

export const Layout = {
  SidebarWidth: "10rem",
  HeaderHeight: "3rem",
  ContentPaddingTop: "4rem", // greater than Header Height
}
export const Color = {
  HeaderBgc: "#fff",
  SidebarBgc: "#c9cdd4",
}

export const Transition = {
  SidebarTransition: "all 0.3s ease",
}

export const Ellipsis = () =>
  "overflow:hidden;white-space:nowrap;text-overflow:ellipsis;"
