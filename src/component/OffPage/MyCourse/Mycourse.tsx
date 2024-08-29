import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import { StyledMyCourse } from "./styled";
import { Space, Table } from "antd";
import nextimg from "../../../assets/Asset 5.png";
import loi_ich from "../../../assets/loi_ich.jpg";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import moment from "moment";
import { Link, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { BiSolidDollarCircle } from "react-icons/bi";
import { MdAccessTimeFilled, MdNavigateNext } from "react-icons/md";
import { FaCrown, FaPlay } from "react-icons/fa";
import { VideoGlobal } from "../../../pages/Videos/index";
import { scroller } from "react-scroll";
export const Mycourse = () => {
  const next = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("userID");
    localStorage.removeItem("token");
    localStorage.removeItem("info");
    window.location.reload();
    next("/");
  };
  const [listMyBook, setListMyBook] = useState([]);
  const [listMyCourse, setListMyCourse] = useState<any>([]);
  const [dataVideo, setDateVideo] = useState<any>(null);
  const [isPro, setIsPro] = useState<boolean>(false);
  const formatBook = listMyBook.map((item: any) => {
    return { ...item, added_at: moment(item?.added_at).format("DD-MM-YYYY") };
  });
  useEffect(() => {
    if (!dataVideo && listMyCourse.length > 0) {
      setDateVideo(listMyCourse[0]);
    }
  }, [dataVideo, listMyCourse]);

  const handleVideo = (value: any) => {
    if (value.pro) {
      setIsPro(true);
    } else {
      setIsPro(false);
      setDateVideo(value);
    }
  };

  const token = localStorage.getItem("token");

  const userID = localStorage.getItem("userID");
  const getListMyCourse = () => {
    axios
      .get(`${process.env.REACT_APP_PORT}/listVideos`, {
        headers: {
          "Content-Type": "application/json",
          "X-Custom-Header": "foobar",
          // Authorization: `Bearer ${token}`,
        },
      })
      .then((res1) => {
        if (res1.data?.length) {
          setListMyCourse(res1?.data);
        }
      });
  };
  const getListMyBook = () => {
    axios
      .get(`${process.env.REACT_APP_PORT}/my-books/${userID}`, {
        headers: {
          "Content-Type": "application/json",
          "X-Custom-Header": "foobar",
          // Authorization: `Bearer ${token}`,
        },
      })
      .then((res2) => {
        setListMyBook(res2?.data);
      });
  };
  useEffect(() => {
    // getListMyBook();
    getListMyCourse();
  }, []);
  const [listGroups, setListGroups] = useState([]);
  const getListGroups = () => {
    axios
      .get(`${process.env.REACT_APP_PORT}/groups`, {
        headers: {
          "Content-Type": "application/json",
          "X-Custom-Header": "foobar",
          // Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res?.data?.length) {
          setListGroups(res.data);
        } else {
          setListGroups([]);
        }
      });
  };
  useEffect(() => {
    getListGroups();
  }, []);
  const handleScrollTo = (id: any, target: any) => {
    next(id);
    setTimeout(() => {
      scroller.scrollTo(target, {
        smooth: true,
        duration: 500,
      });
    }, 100); // Adjust the delay as needed to ensure routing is complete before scrolling
  };
  const GroupRender = () => {
    return (
      <StyledMyCourse>
        <div className="wrapper-footer">
          <div className="title-group">CỘNG ĐỒNG | TƯ VẤN ĐẦU TƯ</div>
          {listGroups.map((item: any, index: any) => (
            <div
              onClick={() =>
                handleScrollTo(`/group-detail/${item?.group_id}`, "header")
              }
              // style={{
              //   flexDirection: index % 2 ? "row-reverse" : "row",
              // }}
              className="box"
            >
              <img
                className="img"
                style={{
                  borderRadius: "16px",
                  objectFit: "cover",
                }}
                src={item.image}
                alt=""
              />
              <div className="box-text">
                <div className="first">{item?.title}</div>
                <div className="demo-group">{item?.demo}</div>
                <div className="box-btn-group">
                  <div
                    className="icon-next"
                    style={{
                      background: "#FFCF03",
                      borderRadius: "20px",
                      height: "28px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      style={{
                        width: "70%",
                        height: "20px",
                        objectFit: "cover",
                      }}
                      src={nextimg}
                      alt=""
                    />
                  </div>
                  <div className="second">
                    {index === 0 ? "ĐĂNG KÝ TƯ VẤN" : "THAM GIA CỘNG ĐỒNG"}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </StyledMyCourse>
    );
  };
  const groupedCourses = listMyCourse.reduce((acc: any, item: any) => {
    if (!acc[item.courseName]) {
      acc[item.courseName] = [];
    }
    acc[item.courseName].push(item);
    return acc;
  }, {});

  const courseNames = ["Tất cả", ...Object.keys(groupedCourses)];

  // State để theo dõi tab đang được chọn
  const [selectedCourse, setSelectedCourse] = useState("Tất cả");

  // Lấy danh sách video dựa trên tab được chọn
  const displayedVideos =
    selectedCourse === "Tất cả" ? listMyCourse : groupedCourses[selectedCourse];
  return (
    <StyledMyCourse>
      {/* <div className="title-my-course">Khoá học của tôi</div> */}
      {/* <div className="table-course">
        <Table columns={columnsCourse} dataSource={formatCourse} />
      </div> */}
      {/* <div className="title-my-course">Sách đã mua của tôi</div>

      <Table columns={columns} dataSource={formatBook} /> */}
      <div className="container-video">
        <div className="video-now">
          {isPro ? (
            <div className="is-pro">
              <div className="box-pro">
                <div className="title1">VIDEO NÀY CHỈ DÀNH CHO</div>
                <div className="title2">CÁC ĐỒNG NGHIỆP ĐÃ TRẢ PHÍ</div>
                <p>Hùng có nhiều video Free khác rất quan trọng,</p>
                <p>bạn hãy xem các video FREE khác nhé!</p>
                <div className="pro-wars-bot">
                  <Link
                    // onClick={() => setOpenShowMobile(!openShowMobile)}
                    to="/payment-pro"
                    className="pro"
                  >
                    <FaCrown />
                    NÂNG CẤP PRO
                  </Link>
                  <div className="pro-wars-next">
                    <span className="txt">
                      Video{" "}
                      <span className="re-tag">
                        <div className="btn">
                          {dataVideo?.pro ? (
                            <button className="free">
                              <BiSolidDollarCircle
                                style={{ color: "#fff", fontSize: "12px" }}
                              />{" "}
                              Pro
                            </button>
                          ) : (
                            <button className="free">
                              <BiSolidDollarCircle
                                style={{ color: "#fff", fontSize: "12px" }}
                              />{" "}
                              FREE
                            </button>
                          )}
                        </div>
                      </span>{" "}
                      tiếp theo
                    </span>
                    <MdNavigateNext style={{ color: "#fff" }} />
                  </div>
                </div>
              </div>
              <div className="title">{dataVideo?.title}</div>
              <div className="box-des">
                <div className="time">
                  <MdAccessTimeFilled
                    style={{ color: "#fff", fontSize: "13px" }}
                  />
                  {dataVideo?.length}
                </div>
                <div style={{ marginLeft: 8 }} className="time">
                  <FaPlay style={{ color: "#fff", fontSize: "13px" }} />
                  Lượt xem
                </div>
                <div style={{ marginLeft: 8 }} className="time">
                  <FaPlay style={{ color: "#fff", fontSize: "13px" }} />
                  Bài giảng:
                  <div className="btn">
                    <button className="star">
                      <FaStar style={{ color: "#fff" }} />{" "}
                      {dataVideo?.important}
                    </button>
                    {dataVideo?.pro ? (
                      <button className="free">
                        <BiSolidDollarCircle
                          style={{ color: "#fff", fontSize: "12px" }}
                        />{" "}
                        Pro
                      </button>
                    ) : (
                      <button className="free">
                        <BiSolidDollarCircle
                          style={{ color: "#fff", fontSize: "12px" }}
                        />{" "}
                        FREE
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <VideoGlobal dataVideo={dataVideo} />
          )}

          <img
            style={{
              width: "100%",
              objectFit: "cover",
              marginTop: "30px",
              height: "400px",
            }}
            src={loi_ich}
            alt=""
          />

          <GroupRender />
        </div>
        <div className="list-video">
          <div className="carousel-tab">
            <Carousel
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              className=""
              containerClass="container"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite={false}
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024,
                  },
                  items: 3,
                  partialVisibilityGutter: 40,
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0,
                  },
                  items: 1,
                  partialVisibilityGutter: 30,
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464,
                  },
                  items: 2,
                  partialVisibilityGutter: 30,
                },
              }}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              {courseNames.map((courseName: any, index: any) => (
                <div
                  key={index}
                  className={selectedCourse === courseName ? "active" : "tab"}
                  onClick={() => setSelectedCourse(courseName)}
                  style={{
                    marginRight: "8px",
                    height: "25px",
                    minWidth: "12px",
                    padding: "3px 8px",
                    borderRadius: "8px",
                    outline: "none",
                    overflow: "hidden",
                    cursor: "pointer",
                    userSelect: "none",
                    fontFamily: '"Roboto", "Arial", sans-serif',
                    fontSize: "0.8rem",
                    lineHeight: "1.6rem",
                    fontWeight: 400,
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                >
                  {courseName}
                </div>
              ))}
            </Carousel>
          </div>

          <div className="box-group">
            {displayedVideos.map((item: any, index: any) => (
              <div
                key={index}
                onClick={() => handleVideo(item)}
                className="item-video"
              >
                <img width={"100%"} src={item?.thumbnail} alt="" />
                <div className="info-item-video">
                  <div className="title">{item?.title}</div>
                  <div className="child-box">
                    <div className="btn">
                      <button className="star">
                        <FaStar style={{ color: "#fff" }} /> {item?.important}
                      </button>
                      {item?.pro ? (
                        <button className="pro">
                          <BiSolidDollarCircle
                            style={{ color: "#fff", fontSize: "12px" }}
                          />{" "}
                          Pro
                        </button>
                      ) : (
                        <button className="free">
                          <BiSolidDollarCircle
                            style={{ color: "#fff", fontSize: "12px" }}
                          />{" "}
                          FREE
                        </button>
                      )}
                    </div>
                    <div className="time">
                      <MdAccessTimeFilled
                        style={{ color: "#fff", fontSize: "12px" }}
                      />
                      {item?.length}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="box-logout">
        <button onClick={handleLogOut} className="btn-logout">
          Đăng xuất
        </button>
        {/* <Link to="/change-pass" className="btn-logout">
          Đổi mật khẩu
        </Link> */}
      </div>
    </StyledMyCourse>
  );
};
