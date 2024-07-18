import React, { useState } from "react";
import { StyleChangePass } from "./styled";
import axios from "axios";
import { notification } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { IoIosEyeOff, IoMdEye } from "react-icons/io";
export const ChangePass = () => {
  const [api, contextHolder] = notification.useNotification();
  const next = useNavigate();
  const [checkChange, setCheckChange] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showPassNew, setShowPassNew] = useState(false);
  const userId = localStorage.getItem("userID");
  const token = localStorage.getItem("token");
  const [oldPass, setOldPass] = useState("");
  const [phone, setPhone] = useState("");
  const [passWord, setPassWord] = useState("");
  const submitChange = () => {
    axios
      .post(
        `${process.env.REACT_APP_PORT}/change-password`,
        {
          phone: phone,
          old_password: oldPass,
          new_password: passWord,
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
      })
      .catch((err) => {
        console.log("err.response.status: ", err.response.status);
        if (err.response.status === 403) {
          api.error({
            message: `Lỗi`,
            description: "Mật khẩu cũ không đúng!",
            placement: "topRight",
          });
        } else if (err.response.status === 404) {
          api.error({
            message: `Lỗi`,
            description: "Đổi mật khẩu thất bại!",
            placement: "topRight",
          });
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
              <div className="top">Mật khẩu cũ*</div>
              <div style={{ position: "relative" }}>
                <input
                  value={oldPass}
                  onChange={(e) => setOldPass(e.target.value)}
                  type={showPass ? "text" : "password"}
                  className="bottom"
                />
                <div
                  onClick={() => setShowPass(!showPass)}
                  style={{ position: "absolute", right: 20, top: 11 }}
                >
                  {showPass ? <IoMdEye /> : <IoIosEyeOff />}
                </div>
              </div>
            </div>
            <div className="form-input">
              <div className="top">Mật khẩu mới*</div>
              <div style={{ position: "relative" }}>
                <input
                  value={passWord}
                  onChange={(e) => setPassWord(e.target.value)}
                  type={showPassNew ? "text" : "password"}
                  className="bottom"
                />
                <div
                  onClick={() => setShowPassNew(!showPassNew)}
                  style={{ position: "absolute", right: 20, top: 11 }}
                >
                  {showPassNew ? <IoMdEye /> : <IoIosEyeOff />}
                </div>
              </div>
            </div>
            <div className="box-btn-mail">
              <button onClick={submitChange} className="btn-order">
                ĐỔI MẬT KHẨU
              </button>
            </div>
            <Link
              style={{ marginTop: "20px", fontSize: "15px" }}
              to="/forgot-password"
              className="forgot-password"
            >
              Quên mật khẩu ?
            </Link>
          </div>
        </div>
      )}
    </StyleChangePass>
  );
};
