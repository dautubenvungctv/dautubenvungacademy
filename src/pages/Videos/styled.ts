import styled from "styled-components";
export const StyledVideo = styled.div<any>`
  .wrapper {
    padding: 10px 16px;
    background-color: #310243;
    border-radius: 8px;
    .title {
      font-size: 1.5rem;
      line-height: 2.8rem;
      font-weight: 600;
      overflow: hidden;
      color: #fff;
      display: block;
      max-height: 5.6rem;
      -webkit-line-clamp: 2;
      display: box;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
      white-space: normal;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      margin-bottom: 15px;
    }
    .box-des {
      display: flex;

      .des-child {
        color: #fff;

        ul {
          font-size: 1.1rem;

          margin-top: 0;
          margin-bottom: 3px;
          padding: 0px !important;
          font-family: Arial, Helvetica, sans-serif;
          li:first-child {
            margin-top: 5px;
          }
          li {
            font-size: 1rem;
            padding: 3px 0;
            font-family: Arial, Helvetica, sans-serif;
            margin-left: 30px;
          }
        }
      }
    }
  }
`;
