import { useContext } from "react";
import { TrendyolContext } from "../trendyol-context/TrendyolContext";

export default function Titles() {
  const titles = useContext(TrendyolContext).titles;
  return (
    <>
      <div className="titles_main flex flex-row mt-10 gap-x-7">
        {titles.map((title, index) => {
          return (
            <a key={index} href="">
              <img src={title}></img>
            </a>
          );
        })}
      </div>
    </>
  );
}
