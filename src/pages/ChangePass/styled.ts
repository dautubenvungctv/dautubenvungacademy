import styled from "styled-components";
export const StyleChangePass = styled.div<any>`
  margin-top: 50px;
  .box-input {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    .form-checkout {
      width: 45%;

      display: flex;
      flex-direction: column;
      border-radius: 8px;
      padding: 16px 30px 25px 30px;
      margin: 0 0 24px 0;
      border: 1px solid #d5d8dc;

      .form-input {
        margin-bottom: 10px;
        .top {
          font-size: 14px;
          color: #fff;
          margin-bottom: 10px;
        }
        .bottom {
          color: #69727d;
          background-color: #d4d4d4;
          font-size: 14px;
          border: none;
          font-weight: 400;
          padding: 10px;
          width: calc(100% - 20px);
          border-radius: 13px;
        }
      }
      .box-btn-mail {
        display: flex;
        width: 100%;
        justify-content: center;
        .btn-order {
          margin-top: 20px;
          cursor: pointer;
          background-color: #42a732;
          width: 100%;
          float: none;
          color: var(--purchase-button-normal-text-color, #fff);
          min-height: auto;
          padding: var(--purchase-button-padding, 1em 1em);
          border-radius: var(--purchase-button-border-radius, 13px);
          border: none;
          &:hover {
            transform: scale(1.01);
          }
        }
      }
    }
  }
`;
