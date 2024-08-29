import styled from "styled-components";

export const StyledSignUp = styled.div<any>`
  @media (min-width: 800px) {
    width: 95%;
    .sign-in {
      padding: 0px 15px 0 15px;
    }
  }
  @media (max-width: 800px) {
    .sign-in {
      /* margin-top: 20px; */
      /* border-top: 1px solid #333; */
      padding: 20px 15px 0 15px;
    }
    width: 92%;
  }
  .sign-in {
    width: 99%;
    padding: 15px;
    display: grid;
    /* background-color: #fff; */
    border-radius: 8px;
    .title-login {
      font-size: 20px;
      font-weight: 700;
      line-height: 1.2;
      text-transform: uppercase;
      margin-bottom: 10px;
      /* color: #fff; */
    }
    .box-pass {
      display: flex;
      gap: 8px;
      .form-pass {
        width: 100%;
        .title {
          /* color: #fff; */
          font-size: 12px;
          margin-left: 5px;
          color: #3a3a3a;
          margin-top: 5px;
        }
        input {
          border-radius: 8px;
          color: #3a3a3a;
          margin-top: 5px;
          background-color: #fff;
          border: 1px solid #ccc;

          box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
          box-sizing: border-box;
          outline: none;
          font-size: 0.97em;
          height: 40px;
          max-width: 100%;
          padding: 0 0.75em;
          transition: color 0.3s, border 0.3s, background 0.3s, opacity 0.3s;
          vertical-align: middle;
          width: 100%;
          &::placeholder {
            font-size: 12px;
          }
        }
        p {
          font-size: 13px;
          color: red;
        }
      }
    }
    .form-login {
      width: 100%;
      .title {
        /* color: #fff; */
        font-size: 12px;
        margin-left: 5px;
        color: #3a3a3a;
        margin-top: 5px;
      }
      input {
        border-radius: 8px;
        color: #3a3a3a;
        margin-top: 5px;
        background-color: #fff;
        border: 1px solid #ccc;

        box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
        outline: none;
        font-size: 0.97em;
        height: 40px;

        max-width: 100%;
        padding: 0 0.75em;
        transition: color 0.3s, border 0.3s, background 0.3s, opacity 0.3s;
        vertical-align: middle;
        width: 100%;
        &::placeholder {
          font-size: 12px;
        }
      }
      p {
        font-size: 13px;
        color: red;
      }
    }
    .memorize {
      display: flex;
      gap: 12px;
      align-items: center;
    }
    .btn-login {
      background-color: #3493fa;
      border: 1px solid transparent;
      border-radius: 13px;
      box-sizing: border-box;
      color: #fff;
      cursor: pointer;
      display: inline-block;
      font-size: 0.97em;
      font-weight: bolder;
      letter-spacing: 0.03em;
      line-height: 2.4em;

      margin-top: 10px;
      max-width: 100%;
      min-height: 2.5em;
      padding: 0 1.2em;
      position: relative;
      text-align: center;
      text-decoration: none;
      text-rendering: optimizeLegibility;
      text-shadow: none;
      text-transform: uppercase;
      transition: transform 0.3s, border 0.3s, background 0.3s, box-shadow 0.3s,
        opacity 0.3s, color 0.3s;
      vertical-align: middle;
    }
    .forgot-password {
      margin-top: 10px;
      margin-bottom: 0.5em;
      text-align: right;
      color: #f68002;
      font-size: 12px;
      font-weight: bold;
    }
  }
`;
