import React, { useEffect, useState } from "react";
import { CarouselHome } from "../../component/Layout/Carousel/Carousel";
import { StyledHome } from "./styled";
import { Link } from "react-router-dom";
import axios from "axios";
import { Flex } from "antd";
import { FaFacebookSquare, FaYoutube, FaTiktok } from "react-icons/fa";
import { GrFormNextLink } from "react-icons/gr";

export const Home = () => {
  const [listCourse, setListCourse] = useState([]);
  const [listBooks, setListBooks] = useState([]);
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
  return (
    <StyledHome>
      <div className="company">
        <div className="img-company">
          <img
            style={{ height: "300px", width: "100%" }}
            src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/445027283_452477927427860_5476144160905867461_n.jpg?stp=dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGa7xh7_BzF_K4Izqeq7JoYOImoZh-S2jE4iahmH5LaMTn8G1EVdijveOeNvdhEmwuhVoIZCTGPPr0EK1IHqHNQ&_nc_ohc=X79DMIdusakQ7kNvgHWwb23&_nc_ht=scontent.fhan14-2.fna&oh=00_AYDk1bV0_5pN51wcdBgy4Bk-2Nd90YxNSNWcNu9hLfzCyw&oe=665B65F1"
            alt=""
          />
          <div className="blurred-section"></div>
        </div>
        <div className="info-company">
          <div className="box-icon">
            <div
              style={{ color: "#3D5A98", background: "#ffffff" }}
              className="icon"
            >
              <FaFacebookSquare />
            </div>
            <div style={{ color: "red", background: "#fff" }} className="icon">
              <FaYoutube />
            </div>
            <div
              style={{ color: "black", background: "#fff" }}
              className="icon"
            >
              <FaTiktok />
            </div>
          </div>
          <div className="info-child">
            <div className="title-company">
              <h1>CÔNG TY</h1>
              <h1>ĐẦU TƯ BỀN VỮNG</h1>
            </div>
            <div className="text-company">
              Công ty ĐẦU TƯ BỀN VỮNG là một trong những công ty bất động sản
              hàng đầu tại Việt Nam, chuyên cung cấp các dịch vụ đầu tư và quản
              lý bất động sản chất lượng cao. Với phương châm "Đầu tư an toàn,
              lợi nhuận bền vững", công ty tìm kiếm và đầu tư vào những dự án
              tiềm năng, đồng thời áp dụng các biện pháp quản lý rủi ro hiệu
              quả. Đội ngũ chuyên gia giàu kinh nghiệm của công ty sẽ tư vấn và
              hỗ trợ khách hàng đạt được mục tiêu đầu tư an toàn và hiệu quả.
            </div>
          </div>
        </div>
      </div>
      <div className="box-headerhome">
        {/* <img
          src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/440212779_759722503002558_2165049528631978589_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHilYBwGWU4Ufb4uXQh6HP0ijqG7V1LGziKOobtXUsbOLuEexhZ24D2Qomw_S4mGyrYBe_Y4R2aZGbWmsAoJbWf&_nc_ohc=kpoXAKXB-j8Q7kNvgFOVPV3&_nc_ht=scontent.fhan14-1.fna&oh=00_AYBYbv1DrFiD2sQehuuYoy6kavG9MGIwjlMgfOSGiYfGNw&oe=6644BA86"
          className="banner-header"
          alt=""
        /> */}
        <div className="container">
          <div className="member">
            <GrFormNextLink
              style={{
                width: "10%",
                background: "#FFCF03",
                borderRadius: "20px",
                height: "28px",
              }}
            />
            <div className="text-member">
              Truy cập đường link để tìm hiểu thêm
            </div>

            <a className="btn-member" href="dautubenvung.vn" target="_plank">
              dautubenvung.vn
            </a>
          </div>

          <div className="carousel">
            <strong className="title-course">KHOÁ HỌC</strong>
            <Flex
              style={{ padding: "20px 100px" }}
              wrap="wrap"
              gap="24px"
              justify="center"
            >
              {listCourse.map((item: any, index: any) => (
                <Link
                  to={`/product-detail/${item?.course_id}`}
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
                        {/* <Tooltip title={item?.title}> */}
                        <div
                          style={{
                            color: "#131C2E",
                            height: "16px",
                            fontFamily: "Arial, sans-serif",
                            fontWeight: 600,
                          }}
                        >
                          {item?.title?.length > 30
                            ? `${item?.title?.slice(0, 30)}...`
                            : item?.title}
                        </div>
                        {/* </Tooltip> */}
                      </div>
                      <div className="text-demo">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut{" "}
                      </div>
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
                </Link>
              ))}
            </Flex>
          </div>
        </div>
      </div>

      {/* <div className="banner">
        <a href="https://khokhoahoc.co/membership/">
          <img
            className="img-banner"
            src="https://images.unsplash.com/photo-1506765515384-028b60a970df?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFubmVyfGVufDB8fDB8fHww"
            alt=""
          />
        </a>
      </div> */}
      <div className="wrapper-book ">
        <strong className="title-book">SÁCH</strong>
        <Flex wrap="wrap" gap="24px">
          {listBooks.map((item: any, index: any) => (
            <Link
              to={`/book-detail/${item?.book_id}`}
              className="item-caroulsel-book"
            >
              <div className="title">
                <img
                  style={{
                    width: "100%",
                    height: "190px",
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
                    <div style={{ color: "#fff", height: "16px" }}>
                      {item?.title?.length > 30
                        ? `${item?.title?.slice(0, 30)}...`
                        : item?.title}
                    </div>
                    {/* </Tooltip> */}
                  </div>
                  <div className="text-demo">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut{" "}
                  </div>
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
            </Link>
          ))}
        </Flex>
      </div>
    </StyledHome>
  );
};
