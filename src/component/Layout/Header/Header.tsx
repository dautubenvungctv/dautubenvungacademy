import React, { useEffect, useState } from "react";
import { StyledHeader } from "./styled";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdBook } from "react-icons/io";
import logo from "../../../assets/logodautuden.png";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setNumberCart } from "../../../redux/app";
import { selectNumberCart } from "../../../redux/app/selector";
import { AiFillHome } from "react-icons/ai";
export const Header = () => {
  const dispatch = useDispatch();
  const [listCourseCart, setListCourseCart] = useState<any>([]);
  const [listBookCart, setListBookCart] = useState<any>([]);
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
  }, []);
  let listCart = [...listCourseCart, ...listBookCart];
  const totalCart = listCart.reduce((total, item) => total + item.quantity, 0);

  dispatch(setNumberCart(totalCart));
  const numberCart = useSelector(selectNumberCart);

  return (
    <StyledHeader>
      <div className="header-main">
        <div className="flex-row">
          <Link to="/" className="icon">
            <img
              style={{ width: "180px", height: "56px", marginBottom: "7px" }}
              src={logo}
              alt=""
            />
          </Link>
          <div className="second-header">
            <div className="tab">TRANG CHỦ</div>
            <div className="tab">KHOÁ HỌC</div>
            <div className="tab">SÁCH</div>
          </div>
          <div style={{ display: "flex", gap: "16px" }}>
            {/* <Link to="/list-course">
              <IoMdBook />
            </Link> */}
            <Link
              style={{ position: "relative" }}
              to="/shopping-cart"
              className="icon-user"
            >
              <div
                style={{
                  position: "absolute",
                  color: "red",
                  background: "#c5c5c5",
                  borderRadius: "99999px",
                  fontWeight: 700,
                  fontSize: "12px",
                  right: -5,
                  height: "15px",
                  width: "15px",
                  textAlign: "center",
                  top: -5,
                }}
              >
                {numberCart}
              </div>
              <MdOutlineShoppingCart style={{ color: "#fff" }} />
            </Link>
            <Link to="/login" className="icon-user">
              <FaRegUser style={{ color: "#fff" }} />
            </Link>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};
