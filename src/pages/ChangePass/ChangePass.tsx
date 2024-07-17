import React, { useState } from "react";
import { StyleChangePass } from "./styled";
import axios from "axios";
import { notification } from "antd";
import { Link, useNavigate } from "react-router-dom";
export const ChangePass = () => {
  const [api, contextHolder] = notification.useNotification();
  const next = useNavigate();
  const [checkChange, setCheckChange] = useState(false);
  const userId = localStorage.getItem("userID");
  const token = localStorage.getItem("token");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [passWord, setPassWord] = useState("");
  const submitChange = () => {
    axios
      .put(
        `${process.env.REACT_APP_PORT}/users/${userId}`,
        {
          email: email,
          phone: phone,
          password_hash: passWord,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-Custom-Header": "foobar",
            // Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          api.success({
            message: `Notification success`,
            description: "Đổi mật khẩu thành công!",
            placement: "topRight",
          });
          setCheckChange(true);
        }
      });
  };
  return (
    <StyleChangePass>
      {contextHolder}
      {checkChange ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            gap: "16px",
          }}
          className="box-qr"
        >
          <div className="titleqr">
            Bạn đã đổi mật khẩu thành công !<br />{" "}
            <span style={{ fontSize: "23px" }}></span>
          </div>
          <Link style={{ color: "#fff" }} to="/" className="link-login">
            CLICK VÀO ĐÂY ĐỂ TỚI TRANG CHỦ
          </Link>
        </div>
      ) : (
        <div className="box-input">
          <div className="form-checkout">
            <div className="form-input">
              <div className="top">Số điện thoại*</div>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bottom"
                type="text"
              />
            </div>

            <div className="form-input">
              <div className="top">Địa chỉ email*</div>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bottom"
                type="text"
              />
            </div>
            <div className="form-input">
              <div className="top">Mật khẩu*</div>
              <input
                value={passWord}
                onChange={(e) => setPassWord(e.target.value)}
                className="bottom"
                type="text"
              />
            </div>
            <div className="box-btn-mail">
              <button onClick={submitChange} className="btn-order">
                ĐỔI MẬT KHẨU
              </button>
            </div>
          </div>
        </div>
      )}
    </StyleChangePass>
  );
};
