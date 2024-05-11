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
            <img
              style={{ width: "100px", height: "100px" }}
              src={book?.image}
              alt=""
            />
          </div>
        </div>
        <div className="technical-information">
          <h1 className="title-product">{book?.title}</h1>
          <div className="price">{book?.price}₫</div>
          <div className="row-info">
            <div className="left">Thời lượng</div>
            <div className="right">22 bài giảng</div>
          </div>
          <button onClick={handleBookCart} className="btn-add-shopping-cart">
            <MdAddShoppingCart /> Thêm vào giỏ
          </button>
        </div>
      </div>
      {/* <button className="btn-membership">Đăng ký Membership để học free</button> */}
      {/* <div className="buttons">
        <button>
          <MdAddShoppingCart /> Thanh toán ngay
        </button>
      </div> */}
      <div className="describe">
        <div className="describe-first">
          <div className="title">Mô tả</div>
          <div className="title-product">Khoá học tiền tỷ</div>
          <div className="warning">Lưu ý: Khoá học này không bán</div>
          <img src="" alt="" />
          <div className="wp-caption-text">
            Share Khóa Học Kiếm Tiền Thần Tốc Trong Ngành Mỹ Phẩm Với Quảng Cáo
            Và Khuyến Mãi Trên Social Media Cùng Marsal Academy
          </div>
        </div>
        <div className="describe-second">
          <div className="title-product">
            Bạn sẽ học được gì từ khoá học này
          </div>
          <blockquote>
            <p>
              ✅ Nắm được những con số đắt giá về tiềm năng và xu hướng phát
              triển của thị trường ngành mỹ phẩm.
            </p>
            <p>
              ✅ Hiểu rõ ràng nhu cầu, hành vi mua hàng của khách hàng → tiền đề
              giúp bạn có những bài viết quảng cáo bán hàng, khuyến mãi hấp dẫn
              có thể chốt được ngay đơn hàng ngay lập tức.
            </p>
            <p>
              ✅ Sử dụng thông minh 2 công cụ quảng cáo, khuyến mãi để bán hàng
              trên các kênh Facebook, Google, Instagram hiệu quả mà không tốn
              kém.
            </p>
            <p>
              ✅ Sở hữu 3 concept truyền thông sáng tạo để bạn ứng dụng dễ dàng
              với quảng cáo &amp; khuyến mãi.
            </p>
            <p>
              ✅ Công thức bài viết và video quảng cáo bán hàng lôi kéo sự quan
              tâm và kích thích khách hàng chi tiền
            </p>
          </blockquote>
        </div>
        <div className="describe-third"></div>
      </div>
    </StyledBookDetail>
  );
};
