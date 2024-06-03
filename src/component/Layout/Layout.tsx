import React, { useEffect, useState } from "react";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { StyledLayout } from "./styled";
import { Flex } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import { GrFormNextLink } from "react-icons/gr";
import next from "../../assets/Asset 5.png";

interface LayoutProps {
  children: any;
}
export const Layout = ({ children }: LayoutProps) => {
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
          <div className="wrapper-footer">
            <div className="title-group">CỘNG ĐỒNG</div>
            {listGroups.map((item: any, index: any) => (
              <div
                style={{
                  flexDirection: index % 2 ? "row-reverse" : "row",
                }}
                className="box"
              >
                <img
                  style={{
                    width: "53%",
                    height: "240px",
                    borderRadius: "16px",
                  }}
                  src={item.image}
                  alt=""
                />
                <div className="box-text">
                  <div className="first">{item?.title}</div>
                  <div className="demo-group">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                    iriure dolor in hendrerit in vulputate velit esse molestie
                    consequat, vel illum dolore eu feugiat nulla facilisis at
                    vero eros et accumsan et iusto odio dignissim qui blandit
                    praesent luptatum zzril delenit augue duis
                  </div>
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
                      THAM GIA
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </Flex>
    </StyledLayout>
  );
};
