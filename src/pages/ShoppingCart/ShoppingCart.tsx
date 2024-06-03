import React, { useEffect, useState } from "react";
import { StyledShoppingCart } from "./styled";
import { IoIosCloseCircleOutline, IoMdCloseCircle } from "react-icons/io";
import type { InputNumberProps } from "antd";
import { InputNumber, Tooltip } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { selectAppSelector } from "../../redux/app/selector";
import { setNumberCart } from "../../redux/app/index";

export const ShoppingCart = () => {
  const [listCourseCart, setListCourseCart] = useState<any>([]);
  const [listBookCart, setListBookCart] = useState<any>([]);
  const dispatch = useDispatch();
  const [number, setNumber] = useState(null);

  const onChange = (item: any) => (value: any) => {
    // Gửi id và quantity mới lên server
    setNumber(value);
    axios
      .put(`http://185.250.36.147:3000/book-cart/${useID}/${item.book_id}`, {
        quantity: value,
      })
      .then((res) => {
        getCourseCart();
        getBookCart();
      });
  };
  const useID = localStorage.getItem("userID");

  const getCourseCart = () => {
    axios
      .get(`http://185.250.36.147:3000/course-cart/${useID}`)
      .then((res) => setListCourseCart(res.data));
  };
  const getBookCart = () => {
    axios
      .get(`http://185.250.36.147:3000/book-cart/${useID}`)
      .then((res) => setListBookCart(res.data));
  };
  useEffect(() => {
    getCourseCart();
    getBookCart();
  }, [number]);
  let listCart = [...listCourseCart, ...listBookCart];

  const handleRemove = (item: any) => {
    if (item.hasOwnProperty("course_id")) {
      axios
        .delete(
          `http://185.250.36.147:3000/course-cart/${item.user_id}/${item?.course_id}`
        )
        .then((res) => getCourseCart());
    } else if (item.hasOwnProperty("book_id")) {
      axios
        .delete(
          `http://185.250.36.147:3000/book-cart/${item.user_id}/${item?.book_id}`
        )
        .then((res) => getBookCart());
    }
  };
  const totalPrice = listCart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  useEffect(() => {
    const totalCart = listCart.reduce(
      (total, item) => total + item.quantity,
      0
    );
    console.log("totalCart: ", totalCart);

    dispatch(setNumberCart(totalCart));
  }, [totalPrice, number]);

  return (
    <StyledShoppingCart>
      <h4 className="title-shopping-cart">Giỏ hàng của bạn</h4>
      <div className="box-shoppingcart">
        <div className="box-product">
          <div
            style={{
              fontSize: "1.2em",
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            Sản phẩm
          </div>
          {listCart.length > 0 ? (
            listCart.map((item: any, index: any) => (
              <>
                <div onClick={() => handleRemove(item)} className="close">
                  <IoMdCloseCircle />
                </div>
                <div className="form-cart">
                  <div>
                    <img
                      style={{ width: "50px", height: "50px" }}
                      src={item?.image}
                      alt=""
                    />
                  </div>
                  <div className="cart-left">
                    {" "}
                    <Tooltip title={item?.title}>
                      <div style={{ color: "black", height: "34px" }}>
                        {item?.title?.length > 65
                          ? `${item?.title?.slice(0, 65)}...`
                          : item?.title}
                      </div>
                    </Tooltip>
                  </div>
                  <div className="cart-right">
                    {(item?.price * item.quantity).toLocaleString("en-US", {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                    ₫
                  </div>
                </div>

                {item.hasOwnProperty("course_id") ? (
                  <></>
                ) : (
                  <div className="form-cart">
                    <div className="cart-left">Số lượng:</div>
                    <div className="cart-right">
                      <InputNumber
                        // min={1}
                        // max={10}
                        value={item.quantity}
                        defaultValue={1}
                        onChange={onChange(item)}
                      />
                    </div>
                  </div>
                )}

                {listCart.length > 0 && (
                  <div
                    style={{ borderTop: "1px solid rgba(0, 0, 0, .09)" }}
                  ></div>
                )}
              </>
            ))
          ) : (
            <>Chưa có sản phẩm nào trong giỏ hàng!</>
          )}
        </div>

        <div className="box-total">
          {/* <div className="title">Tổng giá trị đơn hàng</div> */}

          <div className="form-cart">
            <div className="cart-left">Tổng thanh toán:</div>
            <div className="cart-right">
              {totalPrice.toLocaleString("en-US", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
              ₫
            </div>
          </div>
          <div className="to-checkout">
            <Link
              className="btn-checkout"
              to={listCart.length > 0 ? "/check-out" : ""}
            >
              Thanh toán
            </Link>
          </div>
        </div>
      </div>
    </StyledShoppingCart>
  );
};
