import React, { useState } from "react";
import { StyleDocument } from "./styles";
import { Element, Link as Scroll, scroller } from "react-scroll";
import axios from "axios";
import { notification } from "antd";
export const Document = () => {
  const [name, setName] = useState("");
  const [api, contextHolder] = notification.useNotification();
  const [email, setEmail] = useState("");
  const handleScrollTo = (target: any) => {
    setTimeout(() => {
      scroller.scrollTo(target, {
        smooth: true,
        duration: 500,
      });
    }, 100); // Adjust the delay as needed to ensure routing is complete before scrolling
  };
  const sendEmail = () => {
    axios
      .post("http://185.250.36.147:3000/send-document", {
        email: email,
      })
      .then((res) => {
        if (res.status === 200) {
          api.success({
            message: `Thành công`,
            description: "Bạn đã đăng ký nhận ebook miễn phí thành công!",
            placement: "topRight",
          });
        }
      });
  };
  return (
    <StyleDocument>
      {contextHolder}
      <div className="box-first-document">
        <div className="info-ebook">
          <div className="title-ebook">
            BỘ TÀI LIỆU ĐẦU TƯ
            <p className="des">
              Chỉ trong 6 tháng, mình đã thành công có được thu nhập $2499/tháng{" "}
              từ ngành copywriting - Đều là vì mình đã may mắn hiểu được 3 bí
              mật của những người trong ngành này.
            </p>
          </div>

          <div className="box-btn-first">
            <button
              onClick={() => handleScrollTo("form")}
              className="btn-click"
            >
              Tải eBook này ngay tại ĐÂY ...
              <br />
              <span>
                Không cần thẻ tín dụng, không cần điền thông tin <br /> lằng
                nhằng. Hoàn toàn miễn phí!
              </span>
            </button>
          </div>
        </div>
        <img
          style={{ width: 300 }}
          src="https://w.ladicdn.com/s550x700/5e874668e0f4570769c1795e/bia-ebook-20220909102934.png"
          alt=""
        />
      </div>
      <div className="content-ebook">
        <p className="ladi-headline ladi-transition">
          Hi bạn,
          <br />
          <br />
          Đọc được trang này nghĩa là bạn đã biết đến kỹ năng Copywriting trước
          đây rồi.
          <br />
          <br />
          Và mình thật sự chúc mừng bạn ️Vì không phải ai cũng có may mắn được
          biết đến ngành này sớm như vậy.
          <br />
          <br />
          Đây là ngành vô cùng tiềm năng…
          <br />
        </p>
        <div className="ladi-paragraph ladi-transition">
          Nhưng mình đã không còn nhận khách hàng nữa. Vì hiện tại mình chỉ làm
          cho chính mình thôi là đã không còn thời gian.
          <br />
          <br />
          Tất cả những điều đó mình đạt được trong vòng chỉ khoảng hơn 1 năm.
          <br />
          <br />
          Chính vì vậy, không phải là nói quá khi mà mình luôn nói với những bạn
          theo dõi mình trên Youtube và TikTok là:
          <br />
          <br />
          <span style={{ fontWeight: "bold" }}>
            “Copywriting chính là ngành tiềm năng số #1 tại Việt Nam ở thời điểm
            hiện tại”.
          </span>
          <br />
          <br />
          Ok…
          <br />
          <br />
          Tóm lại thì…
          <br />
          <br />
          Sau khi tải xuống cuốn sách này, bạn sẽ tìm thấy trong cuốn sách những
          nội dung sau:
          <br />
        </div>
        <div className="ladi-paragraph ladi-transition">
          Lúc mình mới bắt đầu làm copywriting, mình đã có thể tính phí khách
          hàng <span style={{ fontWeight: "bold" }}>$40-$70/email</span> - Mà
          mỗi email mình chỉ mất tối đa 1-2 tiếng để viết.
          <br />
          <br />
          Tức là bạn có thể kiếm được từ{" "}
          <span style={{ fontWeight: "bold" }}>
            900k-1800k cho mỗi 2 tiếng đồng hồ làm việc.
          </span>
          <br />
          <br />
          Một mức thu nhập khá tốt phải không nhỉ?
          <br />
          <br />
          Còn ở thời điểm hiện tại…
          <br />
          <br />
          Mình có thể dễ dàng tính phí $100-$200/email.
          <br />
          <br />
          Hoặc $2000-$3000/sales page.
          <br />
        </div>
      </div>

      <div className="my-info">
        <div className="title">
          NẾU BẠN ĐANG THẮC MẮC MÌNH LÀ AI MÀ DÁM NÓI RA NHỮNG ĐIỀU NÀY...
        </div>
        <div className="me">
          <img
            style={{
              borderRadius: "999999999px",
              width: "250px",
              height: "250px",
              // marginLeft: "80px",
            }}
            className="img-avt"
            src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-1/283664379_552346723019673_5624950971899530111_n.jpg?stp=dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=50d2ac&_nc_ohc=hiWoh7TJVA8Q7kNvgE652VU&_nc_ht=scontent.fhan14-1.fna&oh=00_AYB5wmiD0R6HAt6CReHbP2POin3kJvRF52ggbf_Fb9r-3w&oe=669417D4"
            alt=""
          />
          <div className="box-mxh">
            <a
              target="_plank"
              href="https://www.youtube.com/@hoangvinhdautubenvung"
              id="GROUP102"
              className="ladi-element"
            >
              <div className="ladi-group">
                <div id="SHAPE82" className="ladi-element">
                  <div className="ladi-shape ladi-transition">
                    <div className="icon-mobile">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        preserveAspectRatio="none"
                        viewBox="0 0 32 32"
                        className=""
                        fill="#000"
                      >
                        <image
                          href="https://w.ladicdn.com/ladiui/icons/social/youtube.svg"
                          height="32"
                          width="32"
                        ></image>
                      </svg>
                    </div>
                    <div className="icon-desktop">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="70"
                        height="70"
                        preserveAspectRatio="none"
                        viewBox="0 0 32 32"
                        className=""
                        fill="#000"
                      >
                        <image
                          href="https://w.ladicdn.com/ladiui/icons/social/youtube.svg"
                          height="32"
                          width="32"
                        ></image>
                      </svg>
                    </div>
                  </div>
                </div>
                <div id="HEADLINE87" className="ladi-element">
                  <h2 className="ladi-headline ladi-transition">85.000+</h2>
                </div>
                <div id="PARAGRAPH88" className="ladi-element">
                  <div className="ladi-paragraph ladi-transition">
                    Người theo dõi
                    <br />
                  </div>
                </div>
              </div>
            </a>
            <a
              target="_plank"
              href="https://www.facebook.com/hoangvinhdautu"
              id="GROUP103"
              className="ladi-element"
            >
              <div className="ladi-group">
                <div id="SHAPE80" className="ladi-element">
                  <div className="ladi-shape ladi-transition">
                    <div className="icon-mobile">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        preserveAspectRatio="none"
                        viewBox="0 0 32 32"
                        className=""
                        fill="#000"
                      >
                        <image
                          href="https://w.ladicdn.com/ladiui/icons/social/facebook.svg"
                          height="32"
                          width="32"
                        ></image>
                      </svg>
                    </div>
                    <div className="icon-desktop">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="70"
                        height="70"
                        preserveAspectRatio="none"
                        viewBox="0 0 32 32"
                        className=""
                        fill="#000"
                      >
                        <image
                          href="https://w.ladicdn.com/ladiui/icons/social/facebook.svg"
                          height="32"
                          width="32"
                        ></image>
                      </svg>
                    </div>
                  </div>
                </div>
                <div id="HEADLINE91" className="ladi-element">
                  <h2 className="ladi-headline ladi-transition">68.000+</h2>
                </div>
                <div id="PARAGRAPH100" className="ladi-element">
                  <div className="ladi-paragraph ladi-transition">
                    Người theo dõi
                    <br />
                  </div>
                </div>
              </div>
            </a>
            <a
              target="_plank"
              href="https://www.tiktok.com/@hoangvinhdautu"
              id="GROUP101"
              className="ladi-element"
            >
              <div className="ladi-group">
                <div id="SHAPE83" className="ladi-element">
                  <div className="ladi-shape ladi-transition">
                    <div className="icon-mobile">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        preserveAspectRatio="none"
                        viewBox="0 0 32 32"
                        className=""
                        fill="#000"
                      >
                        <image
                          href="https://w.ladicdn.com/ladiui/icons/social/tiktok.svg"
                          height="32"
                          width="32"
                        ></image>
                      </svg>
                    </div>
                    <div className="icon-desktop">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="70"
                        height="70"
                        preserveAspectRatio="none"
                        viewBox="0 0 32 32"
                        className=""
                        fill="#000"
                      >
                        <image
                          href="https://w.ladicdn.com/ladiui/icons/social/tiktok.svg"
                          height="32"
                          width="32"
                        ></image>
                      </svg>
                    </div>
                  </div>
                </div>
                <div id="HEADLINE84" className="ladi-element">
                  <h2 className="ladi-headline ladi-transition">70.000+</h2>
                </div>
                <div id="PARAGRAPH85" className="ladi-element">
                  <div className="ladi-paragraph ladi-transition">
                    Người theo dõi
                    <br />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div id="PARAGRAPH108" className="ladi-element">
          <div className="ladi-paragraph ladi-transition">
            Năm 2020, mình từng là đứa thất nghiệp và không kiếm nổi 2
            triệu/tháng. Mình làm ăn thua lỗ, không kinh nghiệm, không việc
            làm,...
            <br />
            <br />
            Nhưng rồi, sau những thất bại đó mình đã quyết tâm vực dậy và quyết
            định theo đuổi ngành Copywriting
            <br />
            <br />
            Chỉ sau 6 tháng, mình đã cạn mốc thu nhập $2499/tháng từ kỹ năng
            này, và sau đó khi mình áp dụng kỹ năng Copywriting này cho chính
            doanh nghiệp của mình thì mình chính thức hoàn thành mục tiêu kiếm
            $10.000/tháng chỉ sau 9 tháng.
            <br />
            <br />
            Mình hoàn thành mục tiêu này sớm hơn 1 năm là vì mình may mắn tận
            dụng sức mạnh của Copywriting.
            <br />
            <br />
            Nhờ vậy, mình cũng may mắn được mọi người biết đến với tư cách là
            người dẫn đầu cho xu hướng Copywriting tại Việt Nam.
            <br />
            <br />
            Đó là một số thông tin cơ bản về mình, bạn có thể tìm hiểu thêm qua
            kênh Youtube “Minh Xin Chào” với rất nhiều những video liên quan đến
            Copywriting.
            <br />
            <br />
            Còn ngay bây giờ bạn có thể tải xuống ebook này tại đây:
            <br />
          </div>
        </div>
      </div>
      <div className="box-btn-second">
        <button onClick={() => handleScrollTo("form")} className="btn-click">
          Tải eBook này ngay tại ĐÂY ...
          <br />
          <span>
            Không cần thẻ tín dụng, không cần điền thông tin <br /> lằng nhằng.
            Hoàn toàn miễn phí!
          </span>
        </button>
      </div>
      <Element name="form">
        <div className="box-input">
          <div className="form-checkout">
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
              <div className="top">Địa chỉ email*</div>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bottom"
                type="text"
              />
            </div>
            <div className="box-btn-mail">
              <button onClick={sendEmail} className="btn-order">
                GỬI ĐỂ NHẬN TÀI LIỆU ĐẦU TƯ
              </button>
            </div>
          </div>
        </div>
      </Element>
    </StyleDocument>
  );
};
