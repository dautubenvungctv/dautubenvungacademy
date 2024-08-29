import styled from "styled-components";
export const StyledOffPage = styled.div<any>`
  @media (min-width: 800px) {
    .box-in-up {
      display: flex;
      margin-top: 50px;
      padding-bottom: 40px;
      justify-content: center;
      .box-auth {
        width: 100%;
      }
    }
  }
  @media (max-width: 800px) {
    .box-in-up {
      margin-top: ;
      padding-bottom: 40px;
      display: grid;
      margin: 50px 15px 0px 15px;
      .box-auth {
        width: 100%;
      }
    }
  }
  .box-auth {
    background-color: #fff;
    border-radius: 16px;
    .banner-form-head {
      border-radius: 16px 16px 0 0;
      padding: 1.2rem;
      gap: 0.8rem;
      background: #12b76a;
      color: #fff;
      display: flex;
      align-items: center;
      .banner-form-image {
        height: auto;
        flex-shrink: 0;
        .img {
          animation: shake 1s infinite;
        }
      }
      .banner-form-txt {
        font-size: 1rem;
        font-weight: 600;
      }
    }
    .box-btn-auth {
      padding: 15px 15px 0px 15px;
      display: flex;
      /* border-left: 1px solid #ccc;
      border-right: 1px solid #ccc; */
      button {
        border-radius: 8px;
        width: calc(50% - 0.2rem);
        display: flex;
        justify-content: center;
        padding: 0.8rem 1.6rem;
        position: relative;
        z-index: 1;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        color: #fff;
        position: relative;
        border: none;
        font-weight: bold;
      }
    }
    .last-box {
      .banner-form-bot-sub {
        margin: 0 1rem;
        padding: 1.5rem 0;
        font-size: 0.9rem;
        text-align: center;
        position: relative;
        z-index: 1;
        border-bottom: 1px solid #ccc;
        color: #3a3a3a;
      }
      .banner-form-bot-desc {
        margin: 0 1rem;
        padding: 1.5rem 0;
        font-size: 0.9rem;
        text-align: center;
        position: relative;
        z-index: 1;
        color: #3a3a3a;
      }
    }
  }
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-1px);
    }
    50% {
      transform: translateX(1px);
    }
    75% {
      transform: translateX(-1px);
    }
    100% {
      transform: translateX(0);
    }
  }
`;
