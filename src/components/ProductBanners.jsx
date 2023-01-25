import { SlArrowRight } from "react-icons/sl";
import { useContext } from "react";
import { TrendyolContext } from "../trendyol-context/TrendyolContext";

export default function ProductBanners() {
  const productBanners = useContext(TrendyolContext).productBanners;
  return (
    <>
      <div className="product_banners_main mt-3  flex justify-center items-center flex-row flex-wrap gap-x-3">
        {productBanners.map((productBanner, index) => {
          return (
            <div
              key={index}
              className="product_banner w-[31%] my-5 group overflow-hidden cursor-pointer rounded-b-lg flex flex-col items-center justify-center"
            >
              <div className="product_banner_top ">
                <img
                  className="transition-all duration-500  rounded-t-lg group-hover:scale-[1.03]"
                  src={productBanner.img}
                ></img>
              </div>
              <div className="product_banner_bottom  rounded-b-lg  p-3 px-4  w-full !bg-banner_bottom_bg flex transition-all duration-200 group-hover:!bg-brand_color_1 flex-row justify-between items-center text-white font-general_font_family text-sm font-semibold">
                <span className="whitespace-nowrap">{productBanner.title}</span>
                <span className="flex flex-row items-center justify-center text-white gap-x-2 invisible opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  Alışverişe Başla <SlArrowRight />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
