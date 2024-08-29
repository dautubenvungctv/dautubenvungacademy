import styled from "styled-components";
export const StyledVideo = styled.div<any>`
  .title {
    font-size: 1.2rem;
    line-height: 2.8rem;
    font-weight: 700;
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
    font-family: "Roboto", "Arial", sans-serif;
  }
  .box-des {
    display: flex;
    .time {
      margin-top: 5px;
      gap: 2px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 0.9rem;
      padding-right: 8px;
      border-right: 1px solid #ccc;
      .btn {
        display: flex;
        gap: 5px;
        .star {
          border: none;
          cursor: pointer;
          background-color: #56d699;
          border-radius: 3px;
          font-size: 9.5px;
          color: #fff;
          padding-top: 2px;
          padding-bottom: 2px;
          gap: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .free {
          border: none;
          cursor: pointer;
          background-color: #56d699;
          border-radius: 3px;
          font-size: 9.5px;
          gap: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          padding-top: 2px;
          padding-bottom: 2px;
        }
      }
    }
    .time:last-child {
      border: none;
    }
  }
`;
