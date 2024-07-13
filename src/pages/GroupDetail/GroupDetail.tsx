// @ts-ignore
import React, { useEffect, useState } from "react";
import { StyledGroupDetail } from "./styled";
import { MdAddShoppingCart } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { selectAppSelector } from "../../redux/app/selector";
import debounce from "lodash/debounce";
import { notification } from "antd";
import { setProduct } from "../../redux/app";

export const GroupDetail = () => {
  const user = useSelector(selectAppSelector, shallowEqual);
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [course, setCourse] = useState<any>(null);
  const userID = localStorage.getItem("userID");

  const getDetailCourse = () => {
    axios
      .get(`http://185.250.36.147:3000/groups/${id}`)
      .then((res) => setCourse(res.data[0]));
  };
  useEffect(() => {
    getDetailCourse();
  }, []);
  const handleCartCourse = debounce(
    () => {
      if (userID) {
        axios
          .post(`http://185.250.36.147:3000/course-cart`, {
            user_id: userID,
            course_id: id,
            quantity: 1,
          })
          .then((res) => {
            api.success({
              message: `Thành công`,
              description: "Đã thêm vào giỏ hàng!",
              placement: "topRight",
            });
          })
          .catch((err) => {
            api.error({
              message: `Lỗi`,
              description: "Bạn phải đăng nhập để thêm vào giỏ hàng!",
              placement: "topRight",
            });
          });
      } else {
        api.error({
          message: `Lỗi`,
          description: "Bạn phải đăng nhập để thêm vào giỏ hàng!",
          placement: "topRight",
        });
      }
    },
    3000,
    { leading: true, trailing: false }
  );
  const handleBuy = (item: any) => {
    navigate("/check-out", { state: { item } });
  };
  return (
    <StyledGroupDetail>
      {contextHolder}

      <div className="box-first">
        <div className="info-product">
          <div className="img">
            <img className="img-detail" src={course?.image} alt="" />
          </div>
        </div>
        <div className="technical-information">
          <h1 className="title-product">{course?.title}</h1>
          <div className="text">{course?.demo}</div>
          {/* <div className="price">
            {course?.price
              ?.toLocaleString("en-US", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })
              .replace(/,/g, ".")}{" "}
            VND
          </div> */}

          <button
            onClick={() => handleBuy(course)}
            className="btn-add-shopping-cart"
          >
            <MdAddShoppingCart />{" "}
            <span style={{ marginTop: "3px" }}>ĐĂNG KÝ NGAY</span>
          </button>
        </div>
      </div>
      <div className="describe">
        <div className="describe-first">
          <img src="" alt="" />
          <div className="wp-caption-text">
            <div className="title-product">MÔ TẢ</div>
          </div>
          <div className="text-des"></div>
        </div>
        <div className="describe-second">
          <div className="box1">
            <div className="title-des">Bạn sẽ học được gì từ khoá học này:</div>
            <div className="des">
              <blockquote
                dangerouslySetInnerHTML={{
                  __html: course?.description.replace(/\n/g, "<br/>"),
                }}
              />
              <div className="box-submit">
                <button
                  onClick={() => handleBuy(course)}
                  className="btn-add-shopping-cart-des"
                >
                  <span style={{ marginTop: "3px" }}>ĐĂNG KÝ KHOÁ HỌC</span>
                </button>
              </div>
            </div>
          </div>
          <div className="box2"></div>
        </div>
        <div className="describe-third"></div>
      </div>
    </StyledGroupDetail>
  );
};
