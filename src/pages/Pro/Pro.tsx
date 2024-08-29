import React from "react";
import { StylePro } from "./styled";
import { FaBoltLightning, FaUnlockKeyhole } from "react-icons/fa6";
import { BsStars } from "react-icons/bs";
import { Link } from "react-router-dom";
export const Pro = () => {
  const info = localStorage.getItem("info");

  return (
    <StylePro>
      <div className="box-header">
        <div className="title">Chào, {info}</div>
        <div className="second-title">
          Hãy trở thành
          <br />
        </div>{" "}
        <div className="second-title">
          Đồng nghiệp thứ <span> 308</span> của hùng
        </div>
        <div className="chil-title">
          Đồng nghiệp đã hiểu được <span>"ĐỘ NGON"</span> của khoá học
        </div>
      </div>
      <div className="box-center">
        <div className="title-box-center">
          Cơ hội làm ăn, tạo ra một nguồn thu nhập thụ động thật sự
        </div>
        <div className="child-box-center">CHỈ DÀNH RIÊNG CHO BẠN</div>
        <div className="child-box-center">MỘT CHUYÊN GIA THẬT SỰ</div>
      </div>
      <div className="box-des">
        <div className="first">
          <FaBoltLightning style={{ color: "#FEDA44" }} /> Bạn có thể bắt đầu
          ngay hôm nay
        </div>
        <div className="second">NHƯNG elearning là một hành trình</div>
        <p>Quá trình tạo ra nó cũng</p>
        <div className="thirst">
          cần nhiều KIẾN THỨC, QUYẾT TÂM và "NGƯỜI PHỤ"
        </div>
      </div>
      <div className="box-payment">
        <div className="title-payment">
          Hãy khoá giao dịch ngay để giữ mức phí hiện tại
        </div>
        <div className="child-tile-payment">
          BẠN ĐƯỢC KHOÁ GIAO DỊCH ĐỂ MUA VỚI MỨC GIÁ NÀY
        </div>
        <div className="upp-bar-top">
          <p className="upp-des-two">
            TRONG <span className="number-ani">5</span> PHÚT
            <br />
            <p className="des">(Trả một lần, sở hữu mãi mãi)</p>
          </p>
        </div>
        <div className="price-old">60.000.000đ</div>
        <div className="price-now">11.111.111đ</div>
        <Link to="/check-outqr" className="submit">
          <div className="icon">
            <FaUnlockKeyhole style={{ fontSize: 25, color: "#fff" }} />
          </div>
          <div className="right">
            <div className="key">KHOÁ GIAO DỊCH NGAY BÂY GIỜ!</div>
            <div className="child">Giá có thể được nâng bất cứ lúc nào</div>
          </div>
        </Link>
      </div>
      <div className="end">
        <BsStars style={{ color: "#FFDC64", marginRight: 8 }} />
        “Bây giờ đang là giai đoạn Nhiều lợi ích nhất - giá giảm mà nhiều quyền
        lợi”
      </div>
    </StylePro>
  );
};
