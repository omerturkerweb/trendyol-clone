import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import Slider from "react-slick";
import { MdFavoriteBorder } from "react-icons/md";
import { useContext } from "react";
import { TrendyolContext } from "../../trendyol-context/TrendyolContext";

export default function Highlights() {
  const highlights = useContext(TrendyolContext).highlights;

  return (
    <div className="highlights_main !bg-highlights_bg px-5">
      <div className="highlights_main_top flex flex-row justify-between px-1 py-2">
        <span className="text-header_menu_item text-[22px] font-semibold font-general_font_family ">
          Öne Çıkanlar
        </span>
        <span className=" text-sm font-semibold underline text-header_menu_item">
          Tüm Ürünler!
        </span>
      </div>
      <div className="highlights_main_content flex flex-row gap-x-2 items-center">
        {highlights.map((highlight, index) => {
          return (
            <div
              key={index}
              className="highlight w-[16.5%] border bg-white cursor-pointer"
            >
              <div className="hightlight_specials relative">
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
                <div className="add_favorite absolute top-1 right-1">
                  <MdFavoriteBorder />
                </div>
              </div>
              <img className="w-[70%]" src={highlight.img}></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}
