import { styled } from "styled-components";

// type Props = {
//   screen_mode: string | "dark" | "light";
// };

export const StyledHeader = styled.div<any>`
  .header-main {
    width: 100%;
    z-index: 10;
    padding-top: 15px;
    box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
    .flex-row {
      padding-bottom: 8px;
      /* padding-left: 15px; */
      padding-right: 30px;
      align-items: center;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      /* width: 100%; */
      height: 100%;
      border-bottom: 1px solid #fff;

      .icon {
        height: 30px;
        width: 200px;
        background-color: #ffc059;
        border-radius: 99999999px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .second-header {
        padding: 20px 15px;
        align-items: center;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        /* width: 100%; */
        height: 100%;

        border-radius: 3px;
        width: 50%;
        .tab {
          display: flex;
          justify-content: center;
          align-items: center;
          width: calc(100% / 3);
          font-size: 16px;
          font-weight: 700;
          color: #ffff;
          gap: 16px;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
            sans-serif;
          &:hover {
            cursor: pointer;
            text-decoration: underline;
            text-underline-offset: 5px;
          }
          .icon-home {
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 9999999px;
            background-color: #fff;
            width: 28px;
            height: 28px;
            color: #131c2e;
            font-size: 20px;
          }
        }

        .tab:nth-child(2) {
          border-left: 1px solid #636e72;
          border-right: 1px solid #636e72;
        }
        .title {
          font-size: 25px;
          font-weight: 600;
          text-decoration: none;
          color: black;
        }
      }
      .title {
        font-size: 25px;
        font-weight: 600;
        text-decoration: none;
        color: black;
      }
    }
  }
  .icon-user {
    font-size: 20px;
  }
  @media (max-width: 549px) {
    .header-main {
      height: 70px;
      box-shadow: 2px 2px 10px #00000024;
    }
  }
`;
