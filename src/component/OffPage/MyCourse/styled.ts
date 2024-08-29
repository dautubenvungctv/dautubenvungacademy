import styled from "styled-components";
export const StyledMyCourse = styled.div<any>`
  /* @media (min-width: 800px) {
    width: 100%;
    .wrapper-footer {
      .box {
        .img {
          width: 53%;
          height: 240px;
        }
      }
    }
  }
  @media (max-width: 800px) {
    .wrapper-footer {
      .box {
        display: grid;
        flex-direction: column !important;
        align-items: center;
        .img {
          width: 100%;
          height: 240px;
        }
        .box-text {
          gap: 16px;
          width: 88% !important;
          .box-btn-group {
            .icon-next {
              width: 20% !important;
            }
            .second {
              padding: 6px 20px !important;
            }
          }
        }
      }
    }
  } */
  .wrapper-footer {
    padding: 30px 15px;
    .title-group {
      width: 100%;
      display: flex;
      justify-content: center;
      margin: 20px 0;
      color: #fff;
      font-size: 17px;
      font-weight: 500;
      letter-spacing: 0.3em; /* Adjust this value as needed */
      font-family: Arial, sans-serif;
    }
    .box {
      margin: 10px 0;
      display: flex;

      align-items: center;

      padding: 6px;
      border-radius: 5px;
      gap: 30px;
      .img {
        width: 100%;
        height: 300px;
      }
      .box-text {
        gap: 16px;
        width: 50% !important;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
        padding: 75px 24px 75px 24px;

        background: linear-gradient(to bottom, #0f1a53, #2081f7);
        border-radius: 16px;
        .first {
          font-weight: 400;
          font-family: "system-ui";
          /* margin-bottom: 0.5em; */
          margin-top: 0;
          text-rendering: optimizeSpeed;
          width: 100%;
          font-size: 17px;
          color: #fff;
        }
        .demo-group {
          font-size: 11px;
          color: #fff;
          font-family: sans-serif;
        }
        .box-btn-group {
          display: flex;
          justify-content: space-between;
          width: 100%;
          align-items: center;
          .icon-next {
            width: 20% !important;
          }
          .second {
            padding: 6px 20px !important;
            display: flex;
            justify-content: center;
            align-items: center;
            border: none;
            color: #031b55;
            font-weight: 700;
            background-color: #56d699;
            font-size: 13px;

            height: 100%;
            border-radius: 20px;
            &:hover {
              border: 1.5px solid #ffcf03;
            }
          }
        }
      }
    }
  }

  @media (max-width: 800px) {
    .table-course {
      margin: 0 15px;
    }
  }
  margin-top: 50px;
  width: 100%;
  .title-my-course {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.2;
    text-transform: uppercase;
    margin: 10px;
    color: #fff;
  }
  .container-video {
    display: flex;
    gap: 24px;

    .video-now {
      width: 76%;
      .is-pro {
        .box-pro {
          display: grid;
          justify-content: center;
          align-items: center;
          padding: 167px 30px;
          background-color: #3f273a;
          border-radius: 16px;
          .title1 {
            text-align: center;
            font-family: "Arial", sans-serif; /* Adjust based on the closest font family */
            font-size: 3.4vh; /* Adjust font size as needed */
            font-weight: 700;
            color: #fbbe4b; /* Text color similar to the yellow-orange gradient */
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Creates a shadow to give the text depth */
            background: linear-gradient(
              90deg,
              #fbbe4b,
              #ff8c00
            ); /* Background gradient to match the text */
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            letter-spacing: 2px;
          }
          .title2 {
            margin-bottom: 15px;
            text-align: center;

            font-family: "Arial", sans-serif; /* Adjust based on the closest font family */
            font-size: 3.4vh; /* Adjust font size as needed */
            font-weight: 700;

            -webkit-text-fill-color: transparent;
            background: linear-gradient(6deg, #f59034 15.62%, #fecd1f 67.42%);
            -webkit-background-clip: text;
            paint-order: stroke fill;
          }
          p {
            font-family: "Arial", sans-serif;
            text-align: center;
            color: #fff;
            margin: 1px;
            font-size: 13px;
          }
          .pro-wars-bot {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 8px;
            margin-top: 15px;
            .pro {
              border-radius: 8px;
              display: flex;
              justify-content: center;
              align-items: center;
              min-width: 25vh;
              font-size: 16px;
              font-weight: 700;
              color: #ffff;
              background-color: #b42ae9;
              padding: 7px;
              gap: 16px;
              font-family: system-ui, -apple-system, BlinkMacSystemFont,
                "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
                "Helvetica Neue", sans-serif;
              &:hover {
                cursor: pointer;
                background-color: #f41e92;
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
            .pro-wars-next {
              --pd-tag: 0.2rem 0.6rem;
              --gap-inner-tag: 0.4rem;
              --sz-ic-tag: 1.6rem;
              align-items: center;
              border-bottom: 0.1rem solid #fff;
              cursor: pointer;
              display: flex;
              gap: 0.6rem;
              margin: 0 auto;
              padding-bottom: 0.5rem;
              text-align: center;
              text-transform: uppercase;
              transition: 0.3s ease-in-out;
              width: -moz-fit-content;
              width: fit-content;
              .txt {
                font-size: 15px;
                align-items: center;
                display: flex;
                gap: 0.4rem;
                color: #fff;
                .re-tag {
                  --gap-tag: 0.41195vh;
                  --f-sz-tag: 1.44181vh;
                  --pd-tag: 0.20597vh 0.41195vh;
                  --gap-inner-tag: 0.41195vh;
                  --sz-ic-tag: 1.44181vh;
                  display: inline-flex;
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
              }
            }
          }
        }
        .title {
          font-size: 1.7rem;
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
      }
    }
    .list-video {
      width: 24%;
      margin-top: 8px;
      .box-group {
        margin-top: 16px;
        h2 {
          font-size: 1rem;
          color: #fff;
        }
        .item-video {
          height: 94px;
          display: flex;
          gap: 8px;

          border-radius: 5px;
          cursor: pointer;
          margin-bottom: 8px;
          img {
            border-radius: 8px;
            width: 46%;
            height: 100%;
          }
          .info-item-video {
            width: 54%;
            .title {
              margin: 0 0 4px 0;
              font-family: "Roboto", "Arial", sans-serif;
              font-size: 0.78rem;
              color: #fff;
              font-weight: 500;
              overflow: hidden;
              display: block;
              max-height: 4rem;
              -webkit-line-clamp: 2;
              display: box;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              text-overflow: ellipsis;
              white-space: normal;
            }
            .child-box {
              display: flex;
              justify-content: space-between;
              align-items: center;
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
                .pro {
                  border: 1px solid #c09148;
                  cursor: pointer;
                  background: radial-gradient(
                    50% 50% at 50% 50%,
                    #2072c9 0,
                    #103863 100%
                  );
                  color: #f5d31e;
                  border-radius: 3px;
                  font-size: 9.5px;
                  gap: 2px;
                  display: flex;
                  align-items: center;
                  justify-content: center;

                  padding-top: 2px;
                  padding-bottom: 2px;
                }
                .free {
                  border: 1px solid #12b76a;
                  cursor: pointer;
                  background-color: #0d824b;
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
              .time {
                margin-top: 5px;
                gap: 2px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                font-size: 0.8rem;
              }
            }
          }
        }
      }
    }
  }
  .table-course {
    background-color: #fafafa;
    padding: 10px;
    border-radius: 8px;
  }
  .ant-table-wrapper .ant-table-tbody > tr > td {
    border-bottom: 4px solid #f0f0f0 !important;
  }
  .ant-table-wrapper .ant-table-pagination.ant-pagination {
    display: none;
  }
  .rowClassName1 td:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  .rowClassName1 td:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  .box-logout {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 8px;
    .btn-logout {
      border-radius: 13px;
      background-color: #3493fa;
      border: 1px solid transparent;
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
  }
  .ant-table-wrapper .ant-table-thead > tr > th {
    border-radius: 8px;
  }
  .ant-table-wrapper .ant-table-tbody > tr.ant-table-placeholder {
    border-radius: 8px;
  }
  .ant-table-row {
    background-color: #e9e9e9;
    border-radius: 8px;
  }
  .tab {
    color: #fff;
    background-color: #0000000d;
    &:hover {
      color: #000;
      background-color: #e5e5e5;
    }
  }
  .active {
    color: #fff;
    background-color: #000;
    /* &:hover {
      color: #000;
      background-color: #e5e5e5;
    } */
  }
  /* .react-multiple-carousel__arrow::before {
    color: #000;
  } */
  .react-multiple-carousel__arrow {
    color: #fff;
    background-color: transparent !important;
  }
  .react-multiple-carousel__arrow:hover {
    color: #000;
    background-color: #b42ae9 !important;
  }
`;
