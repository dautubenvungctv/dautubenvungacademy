import styled from "styled-components";
export const StylePro = styled.div<any>`
  .box-header {
    display: grid;
    justify-content: center;
    .title {
      text-align: center;
      color: #fff;
      font-size: 1.3rem;
      font-weight: 600;
      margin-top: 10px;
    }
    .second-title {
      margin-top: 10px;

      text-align: center;
      color: #fff;
      font-size: 1.3rem;
      font-weight: 600;
    }
    .chil-title {
      margin-top: 30px;

      text-align: center;
      color: #fff;
      font-size: 1.3rem;
      font-weight: 500;
    }
  }
  .box-center {
    padding: 15px;
    background-color: #42006a;
    border-radius: 16px;
    margin-top: 60px;
    .title-box-center {
      text-align: center;
      color: #fff;
      font-size: 1.5rem;
      font-weight: 500;
      margin: 10px;
    }
    .child-box-center {
      font-family: Arial, sans-serif;
      font-size: 48px;
      font-weight: bold;
      color: #fecc20;
      text-shadow: -2px -2px 0 #fff, 2px -2px 0 #d1550d, -2px 2px 0 #fff,
        2px 2px 0 #d1550d, 4px 4px 0 #d1550d;
      padding: 10px;
      text-align: center;
    }
  }
  .box-des {
    margin-top: 30px;
    display: grid;
    justify-content: center;
    .first {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      color: #fff;
      font-size: 20px;
      font-weight: 600;
      padding: 15px;
      background-color: #2686ec;
      border-radius: 30px;
      font-family: Arial, Helvetica, sans-serif;
    }
    .second {
      text-align: center;
      color: #fff;
      font-size: 1.3rem;
      font-weight: 600;
      margin-top: 10px;
      margin-top: 20px;
    }
    p {
      font-size: 15px;
      color: #fff;
      text-align: center;
    }
    .thirst {
      font-weight: 600;
      font-size: 15px;
      color: #fff;

      text-align: center;
    }
  }
  .box-payment {
    margin-top: 50px;
    display: grid;
    justify-content: center;
    .title-payment {
      padding: 30px 60px;
      color: #fff;
      border: 3px solid #f04438;
      border-radius: 20px;
    }
    .child-tile-payment {
      margin-top: 20px;
      color: #12b76a;
      font-size: 1.1rem;
      font-weight: 600;
      text-align: center;
    }
    .upp-bar-top {
      .upp-des-two {
        color: #fff;

        font-size: 2rem;
        font-weight: 600;
        line-height: 1.3;
        text-align: center;
        .number-ani {
          animation: jittery-2 2s ease-in-out infinite;
          display: inline-block;
        }
        .des {
          font-size: 1rem;
        }
      }
    }
    .price-old {
      color: #7b7b7b;
      font-size: 1.2rem;
      font-weight: 600;
      text-decoration: line-through;
      text-align: center;
    }
    .price-now {
      font-family: Arial, sans-serif;
      font-size: 48px;
      font-weight: bold;
      color: #fecc20;
      text-shadow: -2px -2px 0 #fff, 2px -2px 0 #d1550d, -2px 2px 0 #fff,
        2px 2px 0 #d1550d, 4px 4px 0 #d1550d;
      padding: 10px;
      text-align: center;
    }
    .submit {
      padding: 20px;
      background: linear-gradient(to bottom, #cd3df7, #440873);
      border-radius: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 16px;
      border: 2px solid #858585;
      .icon {
      }
      .right {
        display: grid;
        justify-content: center;
        align-items: center;
        color: #fff;
        gap: 5px;
        .key {
          font-size: 20px;
        }
        .child {
          font-size: 15px;
          text-align: center;
        }
      }
      &:hover {
        cursor: pointer;
        background: #cd3df7;
      }
    }
  }
  .end {
    margin-top: 20px;
    color: #fff;
    text-align: center;
    font-size: 15px;
  }
  @keyframes jittery-2 {
    5%,
    50% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.9);
    }
    15% {
      transform: scale(1.1);
    }
    20% {
      color: #f41f93;
      transform: scale(1.1) rotate(-5deg);
    }
    25% {
      color: #f41f93;
      transform: scale(1.1) rotate(5deg);
    }
    30% {
      color: #f41f93;
      transform: scale(1.1) rotate(-3deg);
    }
    35% {
      color: #f41f93;
      transform: scale(1.1) rotate(2deg);
    }
    40% {
      color: #f41f93;
      transform: scale(1.1) rotate(0);
    }
  }
`;
