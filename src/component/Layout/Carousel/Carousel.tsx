/* eslint-disable @typescript-eslint/no-redeclare */
import React from "react";
import { StyledCarousel } from "./styled";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
interface CarouselInterface {
  listCourse: any;
}
export const CarouselHome = ({ listCourse }: CarouselInterface) => {
  return (
    <StyledCarousel>
      {" "}
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={5000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 3000, min: 1200 },
            items: 3,
          },
          desktop: {
            breakpoint: {
              max: 1200,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 586,
            },
            items: 3,
            partialVisibilityGutter: 30,
          },
          mobile: {
            breakpoint: {
              max: 586,
              min: 0,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={2}
        swipeable
      >
        {listCourse.map((item: any, index: any) => (
          <Link
            to={`/product-detail/${item?.course_id}`}
            className="item-caroulsel"
          >
            <div className="title">
              <img
                style={{ width: "100%", height: "100px", borderRadius: "3px" }}
                src={item?.image}
                alt=""
              />
            </div>
            <div className="body">
              <div className="body-first">
                <div className="item-first">{item?.title}</div>
                <div className="price">{item?.price}₫</div>
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
    </StyledCarousel>
  );
};
