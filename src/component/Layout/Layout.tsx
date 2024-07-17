import React, { useEffect, useState } from "react";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { StyledLayout } from "./styled";
import { Flex } from "antd";

import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { GrFormNextLink } from "react-icons/gr";
import next from "../../assets/Asset 5.png";
import { scroller } from "react-scroll";

declare global {
  interface Window {
    zaloJSV2: any;
  }
}
interface LayoutProps {
  children: any;
}
export const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
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
    navigate(id);
    setTimeout(() => {
      scroller.scrollTo(target, {
        smooth: true,
        duration: 500,
      });
    }, 100); // Adjust the delay as needed to ensure routing is complete before scrolling
  };
  const initZalo = () => {
    if (!document.getElementById("zalo-script")) {
      // Thêm đoạn script tạm thời để tránh lỗi
      window.zaloJSV2 = {
        zalo_h5_event_handler: function (
          eventId: any,
          eventName: any,
          eventData: any
        ) {},
      };

      // Tạo và thêm thẻ script để tải SDK của Zalo
      const script = document.createElement("script");
      script.setAttribute("id", "zalo-script");
      script.type = "text/javascript";
      script.src = "https://sp.zalo.me/plugins/sdk.js";
      script.onload = () => {
        console.log("Zalo SDK loaded");
        // Gọi các hàm khởi tạo hoặc sử dụng Zalo SDK ở đây
      };
      script.onerror = () => {
        console.error("Failed to load Zalo SDK");
      };
      document.getElementsByTagName("head")[0].appendChild(script);
    }
  };

  useEffect(() => {
    initZalo();
  }, []);
  return (
    <StyledLayout>
      <Flex
        style={{
          flexDirection: "column",
          minHeight: "100vh",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            width: "100%",
            margin: "0 auto",
            flex: 1,
            // background: "#F4F4F4",
          }}
        >
          <Header />

          {children}
          {location.pathname === "/check-outqr" ||
          location.pathname === "/check-out" ||
          location.pathname === "/document" ? (
            <></>
          ) : (
            <div className="wrapper-footer">
              <div className="title-group">CỘNG ĐỒNG</div>
              {listGroups
                ?.slice()
                .reverse()
                .map((item: any, index: any) => (
                  <div
                    onClick={() =>
                      handleScrollTo(
                        `/group-detail/${item?.group_id}`,
                        "header"
                      )
                    }
                    style={{
                      flexDirection: index % 2 ? "row-reverse" : "row",
                    }}
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
                            src={next}
                            alt=""
                          />
                        </div>
                        <div className="second">
                          {index === 0
                            ? "ĐĂNG KÝ TƯ VẤN"
                            : "THAM GIA CỘNG ĐỒNG"}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
        <Footer />
      </Flex>
    </StyledLayout>
  );
};
