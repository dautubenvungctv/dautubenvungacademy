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
export const Home = () => {
  const dispatch = useDispatch();
  const [infoCompany, setInfoCompany] = useState<any>([]);

  const [listCourse, setListCourse] = useState([]);
  const [listBooks, setListBooks] = useState([]);
  const navigate = useNavigate();
  const getListCourses = () => {
    axios
      .get("http://185.250.36.147:3000/courses")
      .then((res) => setListCourse(res.data));
  };
  useEffect(() => {
    getListCourses();
  }, []);
  const getBooks = () => {
    axios
      .get("http://185.250.36.147:3000/books")
      .then((res) => setListBooks(res.data));
  };
  useEffect(() => {
    getBooks();
  }, []);
  const handleBuy = (item: any) => {
    navigate("/check-out", { state: { item } });
  };
  const getCompany = () => {
    axios.get(`http://185.250.36.147:3000/title`).then((res) => {
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
      <div className="company">
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
          <div className="box-icon">
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
          </div>
          <div className="info-child">
            <div className="title-company">
              <h1>{infoCompany?.title_first}</h1>
              <h1>{infoCompany?.title_second}</h1>
            </div>
            <div className="text-company">{infoCompany?.description}</div>
          </div>
        </div>
      </div>
      <div className="box-headerhome">
        <div className="container">
          <div className="member">
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
          </div>
          <Element name="courses">
            <div className="carousel">
              <strong className="title-course">KHOÁ HỌC</strong>
              <Flex
                className="flex-course"
                wrap="wrap"
                gap="24px"
                justify="center"
              >
                {listCourse.map((item: any, index: any) => (
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
          </Element>
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
