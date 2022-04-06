import Var from "../../../styles/variables";
import fontSize from "../../../styles/fontSize";
import { css } from "styled-components";

export const inputWrapper = css`
  position: relative;
  &.container {
    display: flex;
    flex-direction: column;
    width: auto;
    &.error {
      .input {
        border: 2px solid red;
      }
    }
    .error-message {
      color: red;
      margin: 7px 0 0 0;
    }
  }
  .title-input {
    color: ${Var.darkLight};
    font-size: ${fontSize.normal};
    font-weight: bold;
    line-height: 30px;
    margin: 0 0;
  }
  .subtitle-input {
    color: ${Var.error};
    font-size: ${fontSize.tiny};
    position: absolute;
    bottom: -30px;
    left: 0;
    line-height: 30px;
    margin: 10px 0 0;
  }
  .input {
    flex: 1;
    justify-content: center;
    align-items: flex-start;
    padding: 0 15px;
    background-color: ${Var.white};
    font-size: ${fontSize.small};
    min-height: 45px;
    border: 2px solid ${Var.border};
    width: 100%;
    outline: none;
  }
  .disable {
    pointer-events: none;
    background-color: ${Var.lightGrey};
  }
`;
