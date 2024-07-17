import React, { useEffect, useState } from "react";
import { StyledForgotPassWord } from "./styled";
import axios from "axios";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";
export const ForgotPassword = () => {
  const [api, contextHolder] = notification.useNotification();
  const nextLogin = useNavigate();
  const [email, setEmail] = useState("");
  const [texCode, setTextCode] = useState(null);
  const [code, setCode] = useState("");
  const [errCode, setErrCode] = useState(false);
  const [passWordFirst, setPassWordFirst] = useState("");
  const [passWordSecond, setPassWordSecond] = useState("");
  const [errPassWordSecond, setErrPassWordSecond] = useState(false);
  useEffect(() => {
    if (code !== "" && code !== texCode) {
      setErrCode(true);
    } else {
      setErrCode(false);
    }
  }, [code]);
  useEffect(() => {
    if (passWordSecond !== "" && passWordSecond !== passWordFirst) {
      setErrPassWordSecond(true);
    } else {
      setErrPassWordSecond(false);
    }
  }, [passWordSecond]);
  const handleSendCode = () => {
    axios
      .post(`${process.env.REACT_APP_PORT}/auth/forgot-password`, {
        email: email,
      })
      .then((res) => {
        if (res.status === 200) {
          api.success({
            message: `Thông báo`,
            description:
              "Bạn hãy vui lòng kiểm tra thông báo email trong hòm thư rác/spam để nhận mã code!",
            placement: "topRight",
          });
          setTextCode(res.data.passcode);
        }
      });
  };
  const handleChangePass = () => {
    axios
      .post(`${process.env.REACT_APP_PORT}/change-password`, {
        email: email,
        password: passWordSecond,
      })
      .then((res) => {
        if (res.status === 200) {
          api.success({
            message: `Thông báo`,
            description: "Đổi mật khẩu thành công!",
            placement: "topRight",
          });
          nextLogin("/login");
        }
      })
      .catch((err) => {
        api.error({
          message: `Lỗi`,
          description: "Bạn phải nhập đầy đủ thông tin trên!",
          placement: "topRight",
        });
      });
  };
  return (
    <StyledForgotPassWord>
      {contextHolder}

      <div className="form-input">
        <div className="top">Nhập email*</div>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bottom"
          type="text"
        />
        <button onClick={handleSendCode} className="btn-sendcode">
          Send code
        </button>
      </div>
      <div className="form-input">
        <div className="top">Nhập code*</div>
        <input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="bottom"
          type="text"
        />
        {errCode ? <p>Mã code không đúng</p> : <></>}
      </div>
      <div className="form-input">
        <div className="top">Nhập mật khẩu mới*</div>
        <input
          value={passWordFirst}
          onChange={(e) => setPassWordFirst(e.target.value)}
          className="bottom"
          type="text"
        />
      </div>
      <div className="form-input">
        <div className="top">Nhập lại mật khẩu mới*</div>
        <input
          value={passWordSecond}
          onChange={(e) => setPassWordSecond(e.target.value)}
          className="bottom"
          type="text"
        />
        {errPassWordSecond ? <p>Mật khẩu không trùng khớp</p> : <></>}
      </div>
      <button
        disabled={
          errPassWordSecond && errCode && code === "" && passWordFirst === ""
        }
        onClick={handleChangePass}
        className="btnforgot"
      >
        Đổi mật khẩu
      </button>
    </StyledForgotPassWord>
  );
};
