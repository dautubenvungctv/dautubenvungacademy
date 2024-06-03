import styled from "styled-components";

export const StyledLayout = styled.div<any>`
  background-color: #131c2e;

  @media (max-width: 800px) {
    width: 100%;
  }
  .wrapper-footer {
    padding: 30px 15px;
    .title-group {
      width: 100%;
      display: flex;
      justify-content: center;
      margin: 20px 0;
      color: #fff;
      font-size: 20px;
      font-weight: 500;
      letter-spacing: 0.3em; /* Adjust this value as needed */
      font-family: Arial, sans-serif;
    }
    .box {
      margin: 10px 0;
      display: flex;
      justify-content: space-between;

      padding: 6px;
      border-radius: 5px;
      gap: 30px;

      .box-text {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
        padding: 24px;
        width: calc(50% - 24px);
        background: linear-gradient(to top, #5378be, rgba(255, 255, 255, 0));
        border-radius: 16px;
        .first {
          font-weight: 500;
          /* margin-bottom: 0.5em; */
          margin-top: 0;
          text-rendering: optimizeSpeed;
          width: 100%;
          font-size: 21px;
          color: #fff;
        }
        .demo-group {
          font-size: 12px;
          color: #fff;
        }
        .box-btn-group {
          display: flex;
          justify-content: space-between;
          width: 100%;
          align-items: center;
          .second {
            display: flex;
            justify-content: center;
            align-items: center;
            border: none;
            color: black;
            font-weight: 700;
            background-color: #56d699;
            font-size: 13px;
            width: 110px;
            height: 100%;
            border-radius: 20px;
          }
        }
      }
    }
  }
`;
