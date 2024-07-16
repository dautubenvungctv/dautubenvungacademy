import styled from "styled-components";
export const StyleFooter = styled.div<any>`
  background-image: linear-gradient(white, #ecf3ff);
  @media (max-width: 800px) {
    .absolute-footer {
      padding: 9px 15px !important;
    }
  }
  .absolute-footer {
    height: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 9px 0;
    .container {
      display: flex;
      justify-content: space-between;
      width: 100%;
      .footer-first {
        display: flex;
        flex-direction: column;

        .text {
          font-size: 12px;
          color: #0f1b54;
          margin-left: 3px;
        }
      }
      .footer-second {
        display: flex;
        justify-content: space-between;

        .footer-secondary {
          display: grid;
          gap: 8px;
          .footer-text {
            display: flex;
            justify-content: center;
            align-items: center;
            color: #0f1b54;
            font-size: 13px;
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
          padding-bottom: 8px;
          justify-content: flex-end;
          width: 100%;
          .icon {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;

            border-radius: 9999999px;
          }
        }
        .hotline {
          font-size: 12px;
          color: #0f1b54;
          margin-left: 3px;
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
