// @ts-ignore
import React, { useEffect, useState } from "react";
import { StyledBookDetail } from "./styled";
import { MdAddShoppingCart } from "react-icons/md";
import { useParams } from "react-router-dom";
import axios from "axios";
import { selectAppSelector } from "../../redux/app/selector";
import { shallowEqual, useSelector } from "react-redux";
import { getItem } from "localforage";
import { notification } from "antd";
import debounce from "lodash/debounce";
export const BookDetail = () => {
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
          <div className="text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut{" "}
          </div>
          <div className="price">
            {book?.price
              .toLocaleString("en-US", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })
              .replace(/,/g, ".")}{" "}
            VND
          </div>
          <div className="row-info">
            <div className="left">Thời lượng</div>
            <div className="right">22 bài giảng</div>
          </div>
          <button onClick={handleBookCart} className="btn-add-shopping-cart">
            <MdAddShoppingCart />{" "}
            <span style={{ marginTop: "3px" }}>THÊM VÀO GIỎ HÀNG</span>
          </button>
        </div>
      </div>
      <div className="describe">
        <div className="describe-first">
          <img src="" alt="" />
          <div className="wp-caption-text">
            <div className="title-product">MÔ TẢ</div>
          </div>
          <div className="text-des">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis dolore te feugait
            nulla facilisi.
          </div>
        </div>
        <div className="describe-second">
          <div className="box1">
            <div className="title-des">Bạn sẽ học được gì từ khoá học này:</div>
            <blockquote
              dangerouslySetInnerHTML={{
                __html: book?.description.replace(/\n/g, "<br/>"),
              }}
            />
          </div>
          <div className="box2">
            Đặc biệt: bạn sẽ được tham gia cộng đồng đầu tư, thảo luận về phương
            pháp đầu tư, pháp lý trong quá trình đầu tư bất động sản
          </div>
        </div>
        <div className="describe-third"></div>
      </div>
    </StyledBookDetail>
  );
};
