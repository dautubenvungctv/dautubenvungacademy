import React, { useState } from "react";
import { Login } from "./Login/Login";
import { SignUp } from "./SignUp/SignUp";
import { Mycourse } from "./MyCourse/Mycourse";
import { StyledOffPage } from "./styled";
export const User = () => {
  const token = localStorage.getItem("token");
  const [tabAuth, setTabAuth] = useState("signin");
  return (
    <StyledOffPage>
      <div className="box-in-up">
        <div className="box-auth">
          <div className="banner-form-head">
            <div className="banner-form-image">
              <div className="img">
                {" "}
                <img
                  style={{ width: "2.5rem" }}
                  src="https://khanhhung.academy//template/assets/images/home/banner-form-image.png"
                  alt=""
                />
              </div>
            </div>
            <p className="banner-form-txt fw-600">
              Không nhập form rườm rà, không nhập thẻ,
              <br />
              không giới hạn thời gian - Đăng nhập là học ngay!
            </p>
          </div>
          <div className="box-btn-auth">
            <button
              style={{
                background: tabAuth === "signin" ? "#56D699" : "#fff",
                color: tabAuth === "signin" ? "#fff" : "#56D699",
              }}
              onClick={() => setTabAuth("signin")}
            >
              Đăng Ký
            </button>
            <button
              style={{
                background: tabAuth === "login" ? "#56D699" : "#fff",
                color: tabAuth === "login" ? "#fff" : "#56D699",
              }}
              onClick={() => setTabAuth("login")}
            >
              Đăng Nhập
            </button>
          </div>
          {tabAuth === "signin" ? <SignUp /> : <Login />}
          <div className="last-box">
            <div className="banner-form-bot-sub">
              Bạn đã đến đây sớm hơn rất nhiều giảng viên khác. Khóa học của
              <br />
              Hùng đã launching được 4 tháng 16 ngày chứng tỏ chúng ta có duyên
            </div>
            <div className="banner-form-bot-desc">
              Khoá học kinh doanh thực tiễn nhất, khi mà mội kiến thức đều
              <br />
              được áp dụng trên chính khoá học - và bạn sẽ được nhìn thấy DATA
              đầy đủ!
            </div>
          </div>
        </div>
      </div>
    </StyledOffPage>
  );
};
