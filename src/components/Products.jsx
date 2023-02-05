import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { useContext } from "react";
import Slider from "react-slick";
import { TrendyolContext } from "../trendyol-context/TrendyolContext";
import Highlights from "./products/Highlights";
export default function Products() {
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
  const mostSeller = useContext(TrendyolContext).mostSeller;
  console.log(mostSeller);
  return (
    <>
      <Highlights />
      <div className="mostsells_main mt-5  !bg-highlights_bg px-5">
        <div className="mostsells_main_top flex flex-row justify-between px-1 py-2">
          <span className="text-header_menu_item text-[22px] font-semibold font-general_font_family ">
            Çok Satanlar
          </span>
          <span className=" text-sm font-semibold underline text-header_menu_item cursor-pointer">
            Tüm Ürünler!
          </span>
        </div>
        <div className="mostsells_main_content  items-center pb-5">
          <Slider className="mostsells_slider" {...settings}>
            {mostSeller.map((mostsell, index) => {
              return (
                <div
                  key={index}
                  className="mostsells border group bg-white cursor-pointer min-w-[17%] min-h-[270px] rounded-md !bg "
                >
                  <div className="mostsells_specials absolute z-10 p-3 flex flex-col justify-center gap-y-2">
                    {mostsell.freeCargo && (
                      <span className="font-general_font_family text-[10px] bg-highlights_free_cargo_bg text-white py-1 text-center rounded-md w-14 block">
                        KARGO BEDAVA
                      </span>
                    )}
                    {mostsell.special && mostsell.special == "bestseller" ? (
                      <img
                        className="w-[47px] h-[47px]"
                        src="https://cdn.dsmcdn.com/mnresize/250/250/marketing/datascience/automation/2020/12/9/EnCokSatan_202012091129.png"
                      ></img>
                    ) : null}
                  </div>
                  <img
                    className="w-[60%] pt-5 h-[150px] pl-5 mx-auto transition-all duration-[.6s] group-hover:scale-[1.03] z-0"
                    src={mostsell.img}
                  ></img>
                  <div className="mostsells_description">
                    <div className="mostsells_description_titles px-3">
                      <span className="text-sm font-semibold font-general_font_family text-header_menu_item ">
                        {mostsell.title}
                      </span>
                      {` `}
                      <span className="text-highlight_description_bg font-general_font_family text-sm ">
                        {`${mostsell.description.slice(0, 25)}...`}
                      </span>
                    </div>
                    <div className="mostsells_description_prices px-3">
                      {mostsell.oldPrice && (
                        <span className="font-general_font_family pr-1 text-base line-through text-highlight_description_old_price">
                          {mostsell.oldPrice}
                        </span>
                      )}
                      <span className="font-general_font_family text-brand_color_1  text-base font-semibold">
                        {`${mostsell.price} TL`}
                      </span>
                    </div>
                    <div className="mostsells_description_note px-2">
                      {mostsell.note && (
                        <span className="text-white bg-brand_color_1 px-1 text-[11px] font-general_font_family">
                          {mostsell.note}
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
    </>
  );
}
