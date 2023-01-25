import Slider from "react-slick";
import { AiOutlineSearch } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { BsBasket, BsFillBasketFill } from "react-icons/bs";
import { IoPerson } from "react-icons/io5";
import { useContext } from "react";
import { TrendyolContext } from "../trendyol-context/TrendyolContext";

export default function Header() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const { headerMenuItems } = useContext(TrendyolContext);
  return (
    <>
      <div className="header_main  flex flex-col">
        <div className="header_top flex flex-row justify-end items-center gap-x-5 p-1">
          <a
            href=""
            className="text-header_top_link text-xs font-general_font_family transition-all duration-150 hover:text-gray-800 tracking-wide relative"
          >
            indirim kuponlarım
          </a>
          <a
            href=""
            className="text-header_top_link text-xs font-general_font_family  transition-all duration-150 hover:text-gray-800 tracking-wide"
          >
            Trendyol'da Satış Yap
          </a>
          <a
            href=""
            className="text-header_top_link text-xs font-general_font_family  transition-all duration-150 hover:text-gray-800 tracking-wide"
          >
            Yardım&Destek
          </a>
        </div>
        <div className="header_sticky flex flex-row justify-between items-center">
          <img
            className="w-36 h-[60px]"
            src="https://cdn.dsmcdn.com/web/logo/ty-web.svg"
          ></img>
          <div className="header_sticky_search">
            <label className="relative">
              <input
                className="w-[600px] h-[42px] rounded-md border-2 border-transparent transition-all duration-300 shadow-transparent focus:shadow-header_search_shadow focus:border-2 focus:border-brand_color_1 bg-header_search py-[10px] pr-10 pl-4 font-general_font_family text-sm outline-none placeholder:font-general_font_family placeholder:text-sm"
                placeholder="Aradığınız Ürün, Kategori veya markayı yazınız"
                type="text"
              ></input>
              <AiOutlineSearch
                size={25}
                className="absolute right-5 top-0  text-brand_color_1"
              />
            </label>
          </div>
          <div className="header_actions flex flex-row gap-x-2 cursor-pointer ">
            <div className="login group flex flex-row items-center justify-center gap-x-1 p-3 relative ">
              <div className="login_icon group relative">
                <IoPersonOutline className="transition-all duration-200 group-hover:invisible group-hover:opacity-0" />
                <IoPerson className="group-hover:opacity-100 group-hover:visible absolute top-0 opacity-0 invisible transition-all duration-200 text-brand_color_1" />
              </div>

              <span className="font-general_font_family font-semibold text-sm transition-all duration-300  group-hover:text-brand_color_1">
                Giriş Yap
              </span>
            </div>
            <div className="favs group flex flex-row items-center justify-center gap-x-1 p-3">
              <div className="favs_icon group relative">
                <MdFavoriteBorder className="transition-all duration-200 group-hover:invisible group-hover:opacity-0" />
                <MdFavorite className="group-hover:opacity-100 group-hover:visible absolute top-0 opacity-0 invisible transition-all duration-200 text-brand_color_1" />
              </div>
              <span className="font-general_font_family font-semibold text-sm transition-all duration-300 group-hover:text-brand_color_1">
                Favorilerim
              </span>
            </div>
            <div className="basket group flex flex-row items-center justify-center gap-x-1 p-3">
              <div className="basket_icon group relative">
                <BsBasket className="transition-all duration-200 group-hover:invisible group-hover:opacity-0" />
                <BsFillBasketFill className="group-hover:opacity-100 group-hover:visible absolute top-0 opacity-0 invisible transition-all duration-200 text-brand_color_1" />
              </div>
              <span className="font-general_font_family font-semibold text-sm transition-all duration-300 group-hover:text-brand_color_1">
                Sepetim
              </span>
            </div>
          </div>
        </div>
        <div className="header_menu_section border-b  border-gray-300 flex flex-row mx-auto p-3 pb-0 mb-4">
          {headerMenuItems.map((menuItem, index) => {
            return (
              <span
                key={index}
                className="text-sm  py-3 px-6 whitespace-nowrap text-header_menu_item font-general_font_family font-semibold not-italic cursor-pointer border-b-2 border-transparent hover:text-brand_color_1 transition-all duration-200 hover:border-b-2 hover:border-brand_color_1"
              >
                {menuItem}
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
}
