import React, { useEffect, useState } from "react";
import { CarouselHome } from "../../component/Layout/Carousel/Carousel";
import { StyledHome } from "./styled";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Element, scroller } from "react-scroll";
import { Flex, Tooltip } from "antd";
import { FaFacebookSquare, FaYoutube, FaTiktok } from "react-icons/fa";
import { GrFormNextLink } from "react-icons/gr";
import next from "../../assets/Asset 5.png";
import { useDispatch } from "react-redux";
import { setProduct } from "../../redux/app";
import lotrinh from "../../assets/lotrinh.png";
import { User } from "../../component/OffPage/index";
export const Home = () => {
  const dispatch = useDispatch();
  const [infoCompany, setInfoCompany] = useState<any>([]);
  const token = localStorage.getItem("token");

  const [listCourse, setListCourse] = useState<any>([]);
  const info = localStorage.getItem("info");

  const [listBooks, setListBooks] = useState([]);
  const navigate = useNavigate();
  const getListCourses = () => {
    axios
      .get(`${process.env.REACT_APP_PORT}/courses-new`, {
        headers: {
          "Content-Type": "application/json",
          "X-Custom-Header": "foobar",
          // Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setListCourse(res.data));
  };
  useEffect(() => {
    getListCourses();
  }, []);
  const getBooks = () => {
    axios
      .get(`${process.env.REACT_APP_PORT}/books`, {
        headers: {
          "Content-Type": "application/json",
          "X-Custom-Header": "foobar",
          // Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setListBooks(res.data));
  };
  useEffect(() => {
    getBooks();
  }, []);

  const getCompany = () => {
    axios
      .get(`${process.env.REACT_APP_PORT}/title`, {
        headers: {
          "Content-Type": "application/json",
          "X-Custom-Header": "foobar",
          // Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setInfoCompany(res.data[0]);
      });
  };
  useEffect(() => {
    getCompany();
  }, []);
  const handleScrollTo = (id: any, target: any) => {
    navigate(id);
    setTimeout(() => {
      scroller.scrollTo(target, {
        smooth: true,
        duration: 500,
      });
    }, 100); // Adjust the delay as needed to ensure routing is complete before scrolling
  };
  return (
    <StyledHome>
      <div className="box-first">
        <div className="company">
          <div className="introduce">
            <div className="img-company">
              <img
                style={{ width: "100%", objectFit: "cover" }}
                src={infoCompany?.image_url}
                alt=""
                className="avt-cty"
              />
              <div className="blurred-section"></div>
            </div>
            <div className="info-company">
              {/* <div className="box-icon">
                <a
                  target="_plank"
                  href="https://www.facebook.com/hoangvinhdautu"
                  style={{ color: "#3D5A98" }}
                  className="icon"
                >
                  <FaFacebookSquare />
                </a>
                <a
                  target="_plank"
                  href="https://www.youtube.com/@hoangvinhdautubenvung"
                  style={{ color: "red" }}
                  className="icon"
                >
                  <FaYoutube />
                </a>
                <a
                  target="_plank"
                  href="https://www.tiktok.com/@hoangvinhdautu"
                  style={{ color: "black" }}
                  className="icon"
                >
                  <FaTiktok />
                </a>
              </div> */}
              <div className="info-child">
                <div className="title-company">
                  <h1>{infoCompany?.title_first}</h1>
                  <h1>{infoCompany?.title_second}</h1>
                </div>
                <div className="text-company">
                  <blockquote
                    dangerouslySetInnerHTML={{
                      __html: infoCompany?.description?.replace(/\n/g, "<br/>"),
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="user">
          {token ? (
            <div className="banner-wrapper-header welcome-login-js">
              <div className="txt-hello">
                <div className="congrat">
                  <img
                    src="https://khanhhung.academy/template/assets/images/home/congrat.png"
                    alt=""
                  />
                </div>
                <span className="txt-upper">Chào Đồng Nghiệp</span>
                <div className="congrat">
                  <img
                    className="need-trans"
                    src="https://khanhhung.academy/template/assets/images/home/congrat.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="txt-comback">
                <span className="txt-upper">{info}</span> đã trở lại với
              </div>
              <div className="academy">
                <img
                  src="https://khanhhung.academy/template/assets/images/home/academy.svg"
                  alt=""
                />
              </div>
              <Link
                className="internal-btn btn-cta txt-white"
                to={"/my-course"}
              >
                <div className="inner">
                  <div className="icon">
                    <img
                      src="https://khanhhung.academy/template/assets/images/home/start-up.png"
                      alt=""
                    />
                  </div>
                  <div className="text">
                    <span className="txt fw-700 txt-upper">
                      ĐỪNG TRÌ HOÃN NỮA <br />
                      HÃY BẮT ĐẦU Khoá HỌC NGAY VÀ LUÔN{" "}
                    </span>
                    <span className="txt-gif">
                      Bạn đã hoàn thành <span className="fw-700">0/182</span>{" "}
                      videos về khoá học rồi
                    </span>
                  </div>
                </div>
                <div className="image">
                  <img
                    src="https://khanhhung.academy/template/assets/images/home/ani-button-02.svg"
                    alt=""
                  />
                </div>
              </Link>
            </div>
          ) : (
            <User />
          )}
        </div>
      </div>
      <div className="box-headerhome">
        <div className="container">
          {/* <div className="member">
            <div
              style={{
                width: "10%",
                background: "#FFCF03",
                borderRadius: "20px",
                height: "35px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img style={{ width: "70%", height: "20px" }} src={next} alt="" />
            </div>

            <div className="text-member">
              Truy cập web/app công cụ phân tích hỗ trợ đầu tư cổ phiếu
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
              className="btn-member"
            >
              <a
                // style={{
                //   display: "flex",
                //   justifyContent: "center !important",
                //   alignContent: "center !important",
                //   color: "#051E5C",
                // }}
                className="link"
                href="https://dautubenvung.vn/"
                target="_plank"
              >
                dautubenvung.vn
              </a>
            </div>
          </div> */}

          {/* <Element name="courses">
            <div className="carousel">
              <strong className="title-course">CHƯƠNG TRÌNH CƠ BẢN</strong>
              <Flex
                className="flex-course"
                wrap="wrap"
                gap="24px"
                justify="center"
              >
                {listCourse.listBasic?.map((item: any, index: any) => (
                  <div
                    onClick={() =>
                      handleScrollTo(
                        `/product-detail/${item?.course_id}`,
                        "header"
                      )
                    }
                    className="item-caroulsel"
                  >
                    <div className="title">
                      <img
                        style={{
                          width: "100%",
                          height: "150px",
                          borderRadius: "3px",
                          objectFit: "cover",
                        }}
                        src={item?.image}
                        alt=""
                      />
                    </div>
                    <div className="body">
                      <div className="body-first">
                        <div className="item-first">
                          <Tooltip color="#04225C" title={item?.title}>
                            <div
                              style={{
                                color: "#020C2F",
                                height: "24px",
                                fontSize: "17px",
                                fontFamily: "system-ui",
                                fontWeight: 600,
                              }}
                            >
                              {item?.title?.length > 25
                                ? `${item?.title?.slice(0, 25)}...`
                                : item?.title}
                            </div>
                          </Tooltip>
                        </div>
                        <div className="text-demo">{item?.demo}</div>
                        <div className="box-buy">
                          <div className="price">
                            {item.price
                              .toLocaleString("en-US", {
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0,
                              })
                              .replace(/,/g, ".")}{" "}
                            VND
                          </div>
                          <button className="buy-now">ĐĂNG KÝ KHOÁ HỌC</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Flex>
              <strong className="title-course">CHƯƠNG TRÌNH NÂNG CAO</strong>
              <Flex
                className="flex-course"
                wrap="wrap"
                gap="24px"
                justify="center"
              >
                {listCourse?.listAdvance?.map((item: any, index: any) => (
                  <div
                    onClick={() =>
                      handleScrollTo(
                        `/product-detail/${item?.course_id}`,
                        "header"
                      )
                    }
                    className="item-caroulsel"
                  >
                    <div className="title">
                      <img
                        style={{
                          width: "100%",
                          height: "150px",
                          borderRadius: "3px",
                          objectFit: "cover",
                        }}
                        src={item?.image}
                        alt=""
                      />
                    </div>
                    <div className="body">
                      <div className="body-first">
                        <div className="item-first">
                          <Tooltip color="#04225C" title={item?.title}>
                            <div
                              style={{
                                color: "#020C2F",
                                height: "24px",
                                fontSize: "17px",
                                fontFamily: "system-ui",
                                fontWeight: 600,
                              }}
                            >
                              {item?.title?.length > 25
                                ? `${item?.title?.slice(0, 25)}...`
                                : item?.title}
                            </div>
                          </Tooltip>
                        </div>
                        <div className="text-demo">{item?.demo}</div>
                        <div className="box-buy">
                          <div className="price">
                            {item.price
                              .toLocaleString("en-US", {
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0,
                              })
                              .replace(/,/g, ".")}{" "}
                            VND
                          </div>
                          <button className="buy-now">ĐĂNG KÝ KHOÁ HỌC</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Flex>
            </div>
          </Element> */}
        </div>
      </div>

      <Element name="book">
        {listBooks.length > 0 && (
          <div className="wrapper-book ">
            <strong className="title-book">SÁCH</strong>
            <Flex wrap="wrap" gap="24px">
              {listBooks.map((item: any, index: any) => (
                <div
                  onClick={() =>
                    handleScrollTo(`/book-detail/${item?.book_id}`, "header")
                  }
                  className="item-caroulsel-book"
                >
                  <div className="title">
                    <img
                      style={{
                        width: "100%",
                        height: "200px",
                        borderRadius: "10px",
                      }}
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <div className="body">
                    <div className="body-first">
                      <div className="item-first">
                        {/* <Tooltip title={item?.title}> */}
                        <div
                          style={{
                            color: "#fff",
                            height: "24px",
                            fontSize: "17px",
                            fontFamily: "system-ui",
                            fontWeight: 600,
                          }}
                        >
                          {item?.title?.length > 30
                            ? `${item?.title?.slice(0, 30)}...`
                            : item?.title}
                        </div>
                        {/* </Tooltip> */}
                      </div>
                      <div className="text-demo">{item?.demo}</div>
                      <div className="box-buy">
                        <div className="price">
                          {item.price
                            .toLocaleString("en-US", {
                              minimumFractionDigits: 0,
                              maximumFractionDigits: 0,
                            })
                            .replace(/,/g, ".")}{" "}
                          VND
                        </div>
                        <button className="buy-now">MUA NGAY</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Flex>
          </div>
        )}
      </Element>
    </StyledHome>
  );
};
