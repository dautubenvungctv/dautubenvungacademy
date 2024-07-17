import React, { useState } from "react";
import { StyleChangePass } from "./styled";
import axios from "axios";
export const ChangePass = () => {
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [passWord, setPassWord] = useState("");
  const submitChange = () => {
    axios.put(
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
    );
  };
  return (
    <StyleChangePass>
      {" "}
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
    </StyleChangePass>
  );
};
