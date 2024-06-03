import styled from "styled-components";
export const StyleFooter = styled.div<any>`
  background-image: linear-gradient(white, #d5e5ff);
  .absolute-footer {
    height: 180px;
    display: grid;
    justify-content: center;
    align-items: center;
    padding: 30px 0;
    .container {
      display: flex;
      justify-content: space-between;
      width: 100%;
      .footer-first {
        display: flex;
        flex-direction: column;
        width: 20%;
      }
      .footer-second {
        display: flex;
        justify-content: space-between;
        width: calc(100% - 20% - 30%);
        .footer-secondary {
          display: grid;
          gap: 8px;
          .footer-text {
            display: flex;
            justify-content: center;
            align-items: center;
            color: black;
            a {
              text-decoration: none;
              color: #f68002;
            }
          }
        }
      }
      .info-company {
        .box-icon {
          display: flex;
          gap: 8px;

          align-items: center;
          padding-bottom: 10px;

          width: 100%;
          .icon {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 23px;
            height: 23px;
            border: 1px solid #ffffff;
            border-radius: 9999999px;
          }
        }
      }
      .footer-primary {
        display: flex;
        justify-content: center;
        .copyright-footer {
          display: grid;
          justify-content: center;
          align-items: center;
          h4,
          p {
            color: #fff;
            margin: 10px;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }
  }
  .contact {
    position: fixed;
    bottom: 10px;
    right: 10px;
    display: grid;
    gap: 10px;
  }
  @media (max-width: 849px) {
    .medium-text-center .pull-left,
    .medium-text-center .pull-right {
      float: none;
    }
  }
`;
