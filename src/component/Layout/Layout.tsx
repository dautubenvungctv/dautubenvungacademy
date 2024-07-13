import React, { useEffect, useState } from "react";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { StyledLayout } from "./styled";
import { Flex } from "antd";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { GrFormNextLink } from "react-icons/gr";
import next from "../../assets/Asset 5.png";

interface LayoutProps {
  children: any;
}
export const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  const [listGroups, setListGroups] = useState([]);
  const getListGroups = () => {
    axios
      .get("http://185.250.36.147:3000/groups")
      .then((res) => setListGroups(res.data));
  };
  useEffect(() => {
    getListGroups();
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
              {listGroups.map((item: any, index: any) => (
                <Link
                  to={`/group-detail/${item?.group_id}`}
                  style={{
                    flexDirection: index % 2 ? "row-reverse" : "row",
                  }}
                  className="box"
                >
                  <img
                    className="img"
                    style={{
                      borderRadius: "16px",
                    }}
                    src={item.image}
                    alt=""
                  />
                  <div className="box-text">
                    <div className="first">{item?.title}</div>
                    <div className="demo-group">{item?.demo}</div>
                    <div className="box-btn-group">
                      <div
                        style={{
                          width: "15%",
                          background: "#FFCF03",
                          borderRadius: "20px",
                          height: "28px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img
                          style={{ width: "70%", height: "20px" }}
                          src={next}
                          alt=""
                        />
                      </div>
                      <Link
                        to={`/group-detail/${item?.group_id}`}
                        className="second"
                      >
                        {index === 0 ? "ĐĂNG KÝ TƯ VẤN" : "THAM GIA CỘNG ĐỒNG"}
                      </Link>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
        <Footer />
      </Flex>
    </StyledLayout>
  );
};
