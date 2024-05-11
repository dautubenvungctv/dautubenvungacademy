import React, { useState } from "react";
import { StyleFooter } from "./styled";
import iconFacebook from "../../../assets/Facebook.png";
import iconZalo from "../../../assets/zalo.png";
import { Modal } from "antd";
export const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <StyleFooter>
      <div className="wrapper-footer">
        <div className="box">
          <img
            style={{ width: "50px", height: "50px" }}
            src="https://khokhoahoc.co/wp-content/uploads/2022/09/uy-tin-chat-luong.png"
            alt=""
          />
          <div className="box-text">
            <div className="first">Cộng đồng đầu tư BĐS</div>
            <button onClick={showModal} className="second">
              Tham gia
            </button>
          </div>
        </div>
        <div className="box">
          <img
            style={{ width: "50px", height: "50px" }}
            src="https://khokhoahoc.co/wp-content/uploads/2022/09/uy-tin-chat-luong.png"
            alt=""
          />
          <div className="box-text">
            <div className="first">Cộng đồng đọc hiểu BCTC</div>
            <button className="second">Tham gia</button>
          </div>
        </div>
        <div className="box">
          <img
            style={{ width: "50px", height: "50px" }}
            src="https://khokhoahoc.co/wp-content/uploads/2022/09/uy-tin-chat-luong.png"
            alt=""
          />
          <div className="box-text">
            <div className="first">Cộng đồng phân tích BCTC</div>
            <button className="second">Tham gia</button>
          </div>
        </div>
        <div className="box">
          <img
            style={{ width: "50px", height: "50px" }}
            src="https://khokhoahoc.co/wp-content/uploads/2022/09/uy-tin-chat-luong.png"
            alt=""
          />
          <div className="box-text">
            <div className="first">Cộng đồng BĐS-CK-VÀNG</div>
            <button className="second">Tham gia</button>
          </div>
        </div>
      </div>
      <div className="absolute-footer ">
        <div className="container">
          <div className="footer-secondary">
            <div className="footer-text ">
              SĐT (Zalo):
              <a rel="nofollow" href="https://zalo.me/0588285128">
                {" "}
                0588285128
              </a>
            </div>
            <div className="footer-text ">
              Quy định:
              <a
                rel="nofollow"
                href="https://khokhoahoc.co/quy-dinh-ve-su-dung-tai-khoan-tren-kho-khoa-hoc/"
              >
                {" "}
                Sử dụng tài khoản
              </a>
            </div>
            <div className="footer-text ">
              <address>
                Email:{" "}
                <a rel="nofollow" href="mailto:support@khokhoahoc.co">
                  support@khokhoahoc.co
                </a>
              </address>
            </div>
          </div>
          <div className="footer-primary">
            <div className="copyright-footer">
              <h4>khokhoahoc.co</h4>
              <p>Copyright © 2021 - Chuyên mua bán khóa học giá rẻ</p>
            </div>
          </div>
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
      <Modal
        title="Đăng ký khoá học"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Đăng ký khoá học để tham gia nhóm chat</p>
      </Modal>
    </StyleFooter>
  );
};
