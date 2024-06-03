import React, { useEffect, useState } from "react";
import { StyleFooter } from "./styled";
import iconFacebook from "../../../assets/Facebook.png";
import iconZalo from "../../../assets/zalo.png";
import { Flex, Modal } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../../../assets/logodautuden.png";
import { FaFacebookSquare, FaTiktok, FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <StyleFooter>
      <Flex
        style={{
          flexDirection: "column",
          // minHeight: "100vh",
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
          <div className="absolute-footer ">
            <div className="container">
              <div className="footer-first">
                <Link to="/" className="icon">
                  <img
                    style={{
                      width: "180px",
                      height: "56px",
                      marginBottom: "7px",
                    }}
                    src={logo}
                    alt=""
                  />
                </Link>
                <div className="text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut{" "}
                </div>
              </div>
              <div className="footer-second">
                <div className="footer-secondary">
                  <div className="footer-text ">Trang chủ</div>
                  <div className="footer-text ">Khoá học</div>
                  <div className="footer-text ">Sách</div>
                </div>
                <div className="footer-secondary">
                  <div className="footer-text ">Trang chủ</div>
                  <div className="footer-text ">Khoá học</div>
                  <div className="footer-text ">Sách</div>
                </div>
                <div className="footer-secondary">
                  <div className="footer-text ">Trang chủ</div>
                  <div className="footer-text ">Khoá học</div>
                  <div className="footer-text ">Sách</div>
                </div>
              </div>
              <div className="info-company">
                <div className="box-icon">
                  <div
                    style={{ color: "#3D5A98", background: "#ffffff" }}
                    className="icon"
                  >
                    <FaFacebookSquare />
                  </div>
                  <div
                    style={{ color: "red", background: "#fff" }}
                    className="icon"
                  >
                    <FaYoutube />
                  </div>
                  <div
                    style={{ color: "black", background: "#fff" }}
                    className="icon"
                  >
                    <FaTiktok />
                  </div>
                </div>
              </div>
              {/* <div className="footer-primary">
            <div className="copyright-footer">
              <h4>dautubenvungacademy.vn</h4>
              <p>Copyright © 2024 - Chuyên mua bán khóa học giá rẻ</p>
            </div>
          </div> */}
            </div>
          </div>
          <div className="contact">
            <img
              style={{
                background: "#5196E4",
                borderRadius: "10000000000px",
                height: "50px",
                width: "50px",
              }}
              src={iconFacebook}
              alt=""
            />
            <div
              style={{
                background: "#5196E4",
                borderRadius: "10000000000px",
                height: "50px",
                width: "50px",
              }}
            >
              <img
                style={{
                  background: "#5196E4",
                  borderRadius: "10000000000px",
                  height: "50px",
                  width: "50px",
                }}
                src={iconZalo}
                alt=""
              />
            </div>
          </div>
        </div>
      </Flex>
    </StyleFooter>
  );
};
