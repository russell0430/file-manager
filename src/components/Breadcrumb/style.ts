import styled from "styled-components"

export const BreadcrumbContainer = styled.section`
  .wrap {
    height: 0.5rem;
    display: flex;
    // justify-content: space-around;
    align-items: center;

    .label {
      overflow: hidden;
      display: inline-block;
    }
    .link {
      display: inline-block;
      // margin-top:base(0.2);
      padding: 0.1rem;
      cursor: pointer;
      background: papayawhip;
      border-radius: 5px;
    }

    .slash {
      display: inline-block;
    }
  }
`
