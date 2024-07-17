import React, { useEffect, useState } from "react";
import { StyleCheckoutQR } from "./styled";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { notification } from "antd";
import { selectProduct } from "../../redux/app/selector";
import { shallowEqual, useSelector } from "react-redux";

export const CheckoutQR = () => {
  const { state } = useLocation();
  const { name, phoneNumber, email, district, city, address, item } = state;

  const [api, contextHolder] = notification.useNotification();
  const nextHome = useNavigate();
  const [checkUserOrder, setCheckUserOrder] = useState(false);
  const userID = localStorage.getItem("userID");
  const today = moment(); // Lấy ngày hiện tại
  const [pricePaid, setPricePaid] = useState<any>(null);
  const [contentPaid, setContentPaid] = useState<any>(null);
  const [checkSucces, setCheckSucces] = useState(false);
  const [idOrder, setIdOder] = useState(null);
  const [listCourseCart, setListCourseCart] = useState<any>([]);
  const [listBookCart, setListBookCart] = useState<any>([]);
  const token = localStorage.getItem("token");

  const getOrder = () => {
    axios
      .get(`${process.env.REACT_APP_PORT}/orders/${userID}`, {
        headers: {
          "Content-Type": "application/json",
          "X-Custom-Header": "foobar",
          // Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.length > 0) {
          setIdOder(res.data[res.data.length - 1].id);
        }
      });
  };

  useEffect(() => {
    getOrder();
  }, []);
  const checkSubmitOrder = () => {
    axios
      .post(
        `${process.env.REACT_APP_PORT}/buy-course`,
        {
          user_id: userID ? +userID : null,
          name: name,
          phone: userID ? null : phoneNumber,
          email: userID ? null : email,
          city: city,
          district: district,
          address: address,
          book_id: item?.book_id,
          course_id: item?.course_id,
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
          if (!userID) {
            setCheckUserOrder(true);
          } else {
            setCheckSucces(true);
          }
        }
      });
  };

  const MY_BANK = {
    BANK_ID: "ICB",
    ACCOUNT_NO: "105868742671",
    ACCOUNT_NAME: "HOANG VAN VINH",
  };
  const CODE_ORDER = item.hasOwnProperty("book_id")
    ? item.book_id
    : item.course_id;

  const QR = `https://img.vietqr.io/image/${MY_BANK.BANK_ID}-${MY_BANK.ACCOUNT_NO}-compact2.png?amount=${item?.price}&addInfo=DTBVx${CODE_ORDER}x${phoneNumber}&accountName=${MY_BANK.ACCOUNT_NAME}`;
  const API_KEY =
    "AK_CS.72f19260378f11efb7127b03250987c0.S4hO33vAcwUjzFSgRA1xxzhWBvfjMEizTRfU72G9rk9uGVmeRBW0GvXRhyAmKqWKkckzSKHA";
  const API_GET_PAID =
    "https://oauth.casso.vn/v2/transactions?sort=DESC&pageSize=50";
  const checkPaid = () => {
    axios
      .get(API_GET_PAID, {
        headers: {
          Authorization: `apikey ${API_KEY}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        function extractDTBVId(input: any) {
          if (!input) {
            return null; // Nếu input là null hoặc undefined, trả về null
          }

          const regex = /DTBV\w+/g;
          const matches = input.match(regex);
          return matches ? matches[0] : null;
        }

        const paid = res.data.data.records.find((item: any) => {
          let des = item.description;
          console.log("des: ", des);

          let extractString = extractDTBVId(item.description);
          let phoneNumberCheck = extractDTBVId(item.description)?.split("x")[2];
          let courseIDCheck = extractDTBVId(item.description)?.split("x")[1];

          return (
            phoneNumberCheck === phoneNumber && courseIDCheck == CODE_ORDER
          );
        });
        setPricePaid(paid.amount);
        setContentPaid(paid.description);
      })
      .catch((error) => {
        console.error("API call error:", error);
      });
  };
  useEffect(() => {
    // checkPaid();
    let intervalId: any;
    intervalId = setInterval(() => {
      checkPaid();
    }, 2000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  let listSplitString = contentPaid?.split(":");

  function extractDTBVId(input: any) {
    if (!input) {
      return null; // Nếu input là null hoặc undefined, trả về null
    }

    const regex = /DTBV\w+/g;
    const matches = input.match(regex);
    return matches ? matches[0] : null;
  }
  console.log(extractDTBVId(contentPaid));
  console.log("contentPaid: ", contentPaid);

  const expectedString = `DTBVx${CODE_ORDER}x${phoneNumber}`;

  useEffect(() => {
    if (
      pricePaid === item?.price &&
      extractDTBVId(contentPaid) === expectedString
    ) {
      api.success({
        message: `Notification success`,
        description: "Chuyển khoản thành công!",
        placement: "bottomRight",
      });

      checkSubmitOrder();
      if (!userID) {
        setCheckUserOrder(true);
      } else {
        setCheckSucces(true);
      }

      // clearInterval(intervalId);
    }
  }, [pricePaid, contentPaid]);
  return (
    <StyleCheckoutQR>
      {contextHolder}
      <h3 className="title-checkqr">Thanh toán</h3>
      <div className="box">
        <ul className=" order_details_mobile">
          <div>
            <li className="woocommerce-order-overview__order order">
              Mã đơn hàng:{" "}
              <strong>
                DTBVx{CODE_ORDER}x{phoneNumber}
              </strong>
            </li>
            <li className="woocommerce-order-overview__date date">
              Ngày: <strong>{today.format("DD-MM-yyyy")}</strong>
            </li>
          </div>
          <div>
            <li className="woocommerce-order-overview__total total">
              Tổng cộng:{" "}
              <strong>
                <span className="woocommerce-Price-amount amount">
                  <bdi>
                    {item
                      ? (item.price * 1).toLocaleString("en-US", {
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        })
                      : "0"}
                    &nbsp;
                    <span className="woocommerce-Price-currencySymbol">₫</span>
                  </bdi>
                </span>
              </strong>
            </li>
            <li className="woocommerce-order-overview__payment-method method">
              Phương thức thanh toán: <strong>Chuyển khoản</strong>
            </li>
          </div>
        </ul>
        <ul className=" order_details">
          <li className="woocommerce-order-overview__order order">
            Mã đơn hàng:{" "}
            <strong>
              DTBVx{CODE_ORDER}x{phoneNumber}
            </strong>
          </li>
          <li className="woocommerce-order-overview__date date">
            Ngày: <strong>{today.format("DD-MM-yyyy")}</strong>
          </li>

          <li className="woocommerce-order-overview__total total">
            Tổng cộng:{" "}
            <strong>
              <span className="woocommerce-Price-amount amount">
                <bdi>
                  {item
                    ? (item.price * 1).toLocaleString("en-US", {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      })
                    : "0"}
                  &nbsp;
                  <span className="woocommerce-Price-currencySymbol">₫</span>
                </bdi>
              </span>
            </strong>
          </li>
          <li className="woocommerce-order-overview__payment-method method">
            Phương thức thanh toán: <strong>Chuyển khoản</strong>
          </li>
        </ul>
        {checkUserOrder ? (
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
              Bạn đã chuyển khoản thành công !<br />{" "}
              <span style={{ fontSize: "23px" }}>
                {" "}
                Vui lòng kiểm tra email để lấy thông tin đăng nhập.
              </span>
            </div>
            <Link style={{ color: "#fff" }} to="/login" className="link-login">
              CLICK VÀO ĐÂY ĐỂ ĐĂNG NHẬP VÀO HỌC
            </Link>
          </div>
        ) : checkSucces ? (
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
              Bạn đã chuyển khoản thành công !<br />{" "}
              <span style={{ fontSize: "23px" }}></span>
            </div>
            <Link style={{ color: "#fff" }} to="/login" className="link-login">
              CLICK VÀO ĐÂY ĐỂ VÀO HỌC
            </Link>
          </div>
        ) : (
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
            <div className="titleqr">Mã QR chuyển khoản ngân hàng</div>
            <img
              className="img-qr"
              style={{ borderRadius: "16px" }}
              src={QR}
              alt=""
            />
            <table
              className="table table-bordered"
              style={{
                fontSize: "15px",
                maxWidth: "800px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <tbody>
                <tr className="">
                  <td className="text-right " style={{ textAlign: "right" }}>
                    <strong style={{ color: "#FFF" }}>Tên tài khoản:</strong>
                  </td>
                  <td
                    className="text-left payment-instruction "
                    style={{ textAlign: "left" }}
                  >
                    <div>
                      <span style={{ color: "#FFF" }}>
                        {MY_BANK.ACCOUNT_NAME}
                      </span>
                    </div>
                  </td>
                </tr>
                <tr className="">
                  <td className="text-right " style={{ textAlign: "right" }}>
                    <strong style={{ color: "#FFF" }}>Số tài khoản:</strong>
                  </td>
                  <td
                    className="text-left payment-instruction "
                    style={{ textAlign: "left" }}
                  >
                    <span style={{ color: "#FFF" }}>{MY_BANK.ACCOUNT_NO}</span>
                  </td>
                </tr>
                <tr>
                  <td className="text-right " style={{ textAlign: "right" }}>
                    <strong style={{ color: "#FFF" }}>Ngân hàng:</strong>
                  </td>
                  <td
                    className="text-left payment-instruction "
                    style={{ textAlign: "left" }}
                  >
                    <div>
                      <span style={{ color: "#FFF" }}>ViettinBank</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="text-right " style={{ textAlign: "right" }}>
                    <strong style={{ color: "#FFF" }}>Số tiền:</strong>
                  </td>
                  <td
                    className="text-left payment-instruction "
                    style={{ textAlign: "left" }}
                  >
                    <div ng-switch-when="vcb" className="ng-scope">
                      <span style={{ color: "#FFF" }}>
                        {item
                          ? (item.price * 1).toLocaleString("en-US", {
                              minimumFractionDigits: 0,
                              maximumFractionDigits: 0,
                            })
                          : "0"}
                        <sup>vnđ</sup>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr className="">
                  <td className="text-right " style={{ textAlign: "right" }}>
                    <strong style={{ color: "#FFF" }}>Nội dung*:</strong>
                  </td>
                  <td
                    className="text-left payment-instruction "
                    style={{ textAlign: "left" }}
                  >
                    <strong style={{ fontSize: "16px" }}>
                      DTBVx{CODE_ORDER}x{phoneNumber}
                    </strong>
                  </td>
                </tr>
              </tbody>
            </table>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
                color: "#fff",
                marginBottom: "50px",
                fontSize: "14px",
                fontWeight: 700,
              }}
            >
              Sau khi thanh toán hệ thống sẽ tự động kích hoạt chương trình khoá
              học của bạn
            </div>
          </div>
        )}
      </div>
    </StyleCheckoutQR>
  );
};
