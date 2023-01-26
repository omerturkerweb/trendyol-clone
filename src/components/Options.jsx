import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { useContext } from "react";
import Slider from "react-slick";
import { TrendyolContext } from "../trendyol-context/TrendyolContext";
export default function Options() {
  const { options } = useContext(TrendyolContext);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 2,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 10000,
  };
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <MdArrowForwardIos
        style={{ ...style, fontSize: "2em !important" }}
        className={`!bg-transparent !text-gray-400 transition-all duration-200  hover:!text-black  !text-2xl absolute -right-5 top-7 cursor-pointer`}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <MdArrowBackIos
        style={{ ...style, fontSize: "2em !important" }}
        className={`!bg-transparent !text-gray-400 transition-all duration-200  hover:!text-black !text-2xl absolute -left-5 top-7 cursor-pointer`}
        onClick={onClick}
      />
    );
  }
  return (
    <>
      <div className="slider_container  !shadow-slider_right_left_shadow">
        <Slider {...settings}>
          {options.map((option, index) => {
            return (
              <div
                key={index}
                className="option !flex flex-col !items-center !justify-center group cursor-pointer"
              >
                <img
                  className="w-[68px] h-[68px]  !max-w-none rounded-options_img_radius transition-all duration-200 border border-gray-300 group-hover:border group-hover:border-brand_color_1"
                  src={option.img}
                ></img>
                <span className="text-sm font-semibold font-general_font_family transition-all duration-200 group-hover:text-brand_color_1 whitespace-nowrap">
                  {option.title}
                </span>
              </div>
            );
          })}
        </Slider>
      </div>

      <div className="options_main">
        <div className="options flex flex-row gap-x-12"></div>
      </div>
    </>
  );
}
