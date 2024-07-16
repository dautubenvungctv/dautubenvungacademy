// @ts-ignore
import React, { useEffect, useState } from "react";
import { StyledBookDetail } from "./styled";
import { MdAddShoppingCart } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { selectAppSelector } from "../../redux/app/selector";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getItem } from "localforage";
import { notification } from "antd";
import debounce from "lodash/debounce";
import { setProduct } from "../../redux/app";
import { Element } from "react-scroll";

export const BookDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [api, contextHolder] = notification.useNotification();
  const { id } = useParams();
  const user = useSelector(selectAppSelector, shallowEqual);
  const userID = localStorage.getItem("userID");

  const [book, setBook] = useState<any>(null);

  const getDetailBook = () => {
    axios
      .get(`http://185.250.36.147:3000/books/${id}`)
      .then((res) => setBook(res.data[0]));
  };
  useEffect(() => {
    getDetailBook();
  }, []);

  const handleBookCart = debounce(
    () => {
      if (userID) {
        axios
          .post(`http://185.250.36.147:3000/book-cart`, {
            user_id: userID,
            book_id: id,
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
  if (!book) {
    return <div>Loading...</div>;
  }
  const handleBuy = (item: any) => {
    navigate("/check-out", { state: { item } });
  };
  return (
    <StyledBookDetail>
      {contextHolder}

      <div className="box-first">
        <div className="info-product">
          <div className="img">
            <img className="img-detail" src={book?.image} alt="" />
          </div>
        </div>
        <div className="technical-information">
          <h1 className="title-product">{book?.title}</h1>
          <div className="text">{book?.demo}</div>
          <div className="price">
            {book?.price
              .toLocaleString("en-US", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })
              .replace(/,/g, ".")}{" "}
            VND
          </div>

          <button
            onClick={() => handleBuy(book)}
            className="btn-add-shopping-cart"
          >
            <span style={{ marginTop: "3px" }}>ĐĂNG KÝ KHOÁ HỌC</span>
          </button>
        </div>
      </div>

      <div className="describe">
        <div className="describe-first">
          <img src="" alt="" />
        </div>
        <div className="describe-second">
          <div className="box1">
            <div className="title-des">Bạn sẽ học được gì từ khoá học này:</div>
            <div className="des">
              <blockquote
                dangerouslySetInnerHTML={{
                  __html: book?.description.replace(/\n/g, "<br/>"),
                }}
              />
              <div className="box-submit">
                <button
                  onClick={() => handleBuy(book)}
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
    </StyledBookDetail>
  );
};
