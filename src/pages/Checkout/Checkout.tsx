import React, { useEffect, useState } from "react";
import { StyleCheckout } from "./styled";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { notification } from "antd";
import { shallowEqual, useSelector } from "react-redux";
import { selectProduct } from "../../redux/app/selector";
export const Checkout = () => {
  const nextHome = useNavigate();
  const userID = localStorage.getItem("userID");
  const [api, contextHolder] = notification.useNotification();
  const { state } = useLocation();
  const { item } = state;

  const [name, setName] = useState("");
  const [errName, setErrName] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errPhoneNumber, setErrPhoneNumber] = useState(false);
  const [email, setEmail] = useState("");
  const [errEmail, setErrEmail] = useState(false);
  const [city, setCity] = useState("");
  const [errCity, setErrCity] = useState(false);
  const [district, setDistrict] = useState("");
  const [errDistrict, setErrDistrict] = useState(false);
  const [address, setAddress] = useState("");
  const [errAddress, setErrAddress] = useState(false);
  const [listCourseCart, setListCourseCart] = useState<any>([]);
  const [listBookCart, setListBookCart] = useState<any>([]);

  const getCourseCart = () => {
    axios
      .get(`http://185.250.36.147:3000/course-cart/1`)
      .then((res) => setListCourseCart(res.data));
  };
  const getBookCart = () => {
    axios
      .get(`http://185.250.36.147:3000/book-cart/1`)
      .then((res) => setListBookCart(res.data));
  };
  useEffect(() => {
    getCourseCart();
    getBookCart();
  }, []);

  let listCart = [...listCourseCart, ...listBookCart];
  const totalPrice = listCart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleSubmit = () => {
    if (
      email !== "" ||
      name !== "" ||
      phoneNumber !== "" ||
      city !== "" ||
      district !== "" ||
      address !== ""
    ) {
      nextHome("/check-outqr", {
        state: {
          name: name,
          address: address,
          phoneNumber: phoneNumber,
          district: district,
          email: email,
          city: city,
          item,
        },
      });
    } else {
      api.warning({
        message: `Cảnh báo`,
        description: "Bạn phải nhập đầy đủ thông tin để thanh toán giỏ hàng!",
        placement: "topRight",
      });
    }
  };
  interface Item {
    title: string;
  }

  return (
    <StyleCheckout>
      {contextHolder}
      <div className="title">
        {item.hasOwnProperty("book_id") ? "ĐẶT HÀNG" : "ĐĂNG KÝ KHOÁ HỌC"}
      </div>
      <div className="box-first">
        {/* <div className="returning">
          <div>Returning customer?</div>
          <Link className="login" to="/login">
            Click here to login
          </Link>
        </div> */}
        <div className="form-checkout">
          <h3 className="title-form">
            Bạn vui lòng nhập đầy đủ thông tin bên ở dưới nhé!
          </h3>
          <div className="form-input">
            <div className="top">Họ và tên*</div>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bottom"
              type="text"
            />
          </div>
          <div className="form-input">
            <div className="top">Số điện thoại*</div>
            <input
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
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
          {item?.hasOwnProperty("book_id") ? (
            <div>
              <div className="form-input">
                <div className="top">Tỉnh/Thành phố*</div>
                <input
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="bottom"
                  type="text"
                />
              </div>
              <div className="form-input">
                <div className="top">Quận/Huyện*</div>
                <input
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  className="bottom"
                  type="text"
                />
              </div>
              <div className="form-input">
                <div className="top">Địa chỉ nhà (Số nhà/Tên Toà...)*</div>
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Địa chỉ"
                  className="bottom"
                  type="text"
                />
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="box-second">
        <div className="product-buy">
          {/* <div className="title">Sản phẩm đặt mua</div> */}
          <div className="shop_table">
            <div className="header-table">
              <th style={{ color: "#ffff" }} className="product-name">
                {item.hasOwnProperty("book_id") ? "Tên sách:" : "Tên khoá học:"}
              </th>
              <th
                style={{ color: "#ffff", fontSize: "12px" }}
                className="product-total"
              >
                {item ? (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: item.title.replace(/\(/g, "<br> ("),
                    }}
                  />
                ) : (
                  "Product not available"
                )}
              </th>
            </div>

            <tr className="cart_item">
              <td
                style={{ color: "#ffff", fontWeight: 600 }}
                className="product-name"
              >
                Giá:
              </td>
              <td className="product-total">
                <span className="woocommerce-Price-amount amount">
                  <bdi style={{ color: "#ffff" }}>
                    {item
                      ? (item.price * 1).toLocaleString("en-US", {
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        })
                      : "0"}
                    &nbsp;
                    <span className="woocommerce-Price-currencySymbol">₫</span>
                  </bdi>
                </span>{" "}
              </td>
            </tr>

            <tr className="order-total">
              <th style={{ color: "#ffff" }}>Tổng thanh toán:</th>
              <td>
                <strong>
                  <span className="woocommerce-Price-amount amount">
                    <bdi style={{ color: "#ffff" }}>
                      {item
                        ? (item.price * 1).toLocaleString("en-US", {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                          })
                        : "0"}
                      &nbsp;
                      <span className="woocommerce-Price-currencySymbol">
                        ₫
                      </span>
                    </bdi>
                  </span>
                </strong>{" "}
              </td>
            </tr>
          </div>
          <button onClick={handleSubmit} className="btn-order">
            THANH TOÁN
          </button>
        </div>

        <div className="payment">
          <div className="payment_box payment_method_casso_up_vietinbank">
            <p>
              Sau khi thanh toán hệ thống sẽ tự động kích hoạt chương trình khoá
              học của bạn
            </p>
          </div>
        </div>
      </div>
    </StyleCheckout>
  );
};
