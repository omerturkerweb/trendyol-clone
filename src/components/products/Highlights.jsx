import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import Slider from "react-slick";
import { MdFavoriteBorder } from "react-icons/md";
import { useContext } from "react";
import { TrendyolContext } from "../../trendyol-context/TrendyolContext";

export default function Highlights() {
  const highlights = useContext(TrendyolContext).highlights;
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToShow: 6,
    slidesToScroll: 2,
  };
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <MdArrowForwardIos
        style={{ ...style, fontSize: "2em !important" }}
        className={`!bg-transparent !text-gray-400 transition-all duration-200  hover:!text-black  !text-2xl absolute -right-5 top-28 cursor-pointer`}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <MdArrowBackIos
        style={{ ...style, fontSize: "2em !important" }}
        className={`!bg-transparent !text-gray-400 transition-all duration-200  hover:!text-black !text-2xl absolute -left-5 top-28 cursor-pointer`}
        onClick={onClick}
      />
    );
  }
  return (
    <div className="highlights_main !bg-highlights_bg px-5">
      <div className="highlights_main_top flex flex-row justify-between px-1 py-2">
        <span className="text-header_menu_item text-[22px] font-semibold font-general_font_family ">
          Öne Çıkanlar
        </span>
        <span className=" text-sm font-semibold underline text-header_menu_item cursor-pointer">
          Tüm Ürünler!
        </span>
      </div>
      <div className="highlights_main_content items-center pb-5">
        <Slider className="highlight_slider" {...settings}>
          {highlights.map((highlight, index) => {
            return (
              <div
                key={index}
                className="highlight border group bg-white cursor-pointer min-w-[17%] min-h-[270px] rounded-md !bg "
              >
                <div className="hightlight_specials absolute z-10 p-3 flex flex-col justify-center gap-y-2">
                  {highlight.freeCargo && (
                    <span className="font-general_font_family text-[10px] bg-highlights_free_cargo_bg text-white py-1 text-center rounded-md w-14 block">
                      KARGO BEDAVA
                    </span>
                  )}
                  {highlight.special && highlight.special == "bestseller" ? (
                    <img
                      className="w-[47px] h-[47px]"
                      src="https://cdn.dsmcdn.com/mnresize/250/250/marketing/datascience/automation/2020/12/9/EnCokSatan_202012091129.png"
                    ></img>
                  ) : null}
                </div>
                <img
                  className="w-[60%] pt-5 h-[150px] pl-5 mx-auto transition-all duration-[.6s] group-hover:scale-[1.03] z-0"
                  src={highlight.img}
                ></img>
                <div className="highlight_description">
                  <div className="highlight_description_titles px-3">
                    <span className="text-sm font-semibold font-general_font_family text-header_menu_item ">
                      {highlight.title}
                    </span>
                    {` `}
                    <span className="text-highlight_description_bg font-general_font_family text-sm ">
                      {`${highlight.description.slice(0, 25)}...`}
                    </span>
                  </div>
                  <div className="highlight_description_prices px-3">
                    {highlight.oldPrice && (
                      <span className="font-general_font_family pr-1 text-base line-through text-highlight_description_old_price">
                        {highlight.oldPrice}
                      </span>
                    )}
                    <span className="font-general_font_family text-brand_color_1  text-base font-semibold">
                      {`${highlight.price} TL`}
                    </span>
                  </div>
                  <div className="highlight_description_note px-2">
                    {highlight.note && (
                      <span className="text-white bg-brand_color_1 px-1 text-[11px] font-general_font_family">
                        {highlight.note}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
