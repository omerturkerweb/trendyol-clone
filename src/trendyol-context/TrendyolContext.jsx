import { createContext, useState } from "react";

export const TrendyolContext = createContext();

const Provider = ({ children }) => {
  const [headerMenuItems, setHeaderMenuItems] = useState([
    "KADIN",
    "ERKEK",
    "ANNE & ÇOCUK",
    "SÜPERMARKET",
    "KOZMETİK",
    "AYAKKABI & ÇANTA",
    "SAAT & AKSESUAR",
    "ELEKTRONİK",
    "SPOR & OUTDOOR",
  ]);
  const [options, setOptions] = useState([
    {
      id: 1,
      img: "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2022/3/7/Coksatanlar1_202203072239.png",
      title: "Sen De Al!",
    },
    {
      id: 2,
      img: "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2022/3/9/Top_Widget_202203091801.png",
      title: "Sana Özel",
    },
    {
      id: 3,
      img: "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2022/11/29/Screenshot20221128At163430_202211290324.png",
      title: "Kurumsal",
    },
    {
      id: 4,
      img: "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2020/12/30/EglenceWeb_202012301831.png",
      title: "Kodlar & Hizmetler",
    },
    {
      id: 5,
      img: "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15461619354815_Adidas.png",
      title: "Adidas",
    },
    {
      id: 6,
      img: " https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15561619355388_Trendyolmilla.png",
      title: "TrendyolMilla",
    },
    {
      id: 7,
      img: " https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/12/10/Pullbearyeni.png",
      title: "Pull & Bear",
    },
    {
      id: 8,
      img: " https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/2/Apple_202301022041.png",
      title: "Apple",
    },
    {
      id: 9,
      img: " https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2022/1/3/xiaomi13.png",
      title: "Xiaomi",
    },
    {
      id: 10,
      img: "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15491619354982_Dilvin.png",
      title: "Dilvin",
    },
    {
      id: 11,
      img: "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15541619355266_Puma.png",
      title: "Puma",
    },
    {
      id: 12,
      img: "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15541619355251_Philips.png",
      title: "Philips",
    },
    {
      id: 13,
      img: "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2022/1/3/samsung2.png",
      title: "Samsung",
    },
    {
      id: 14,
      img: "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2022/6/30/Yeni200X20001_202206301534.png",
      title: "Karaca",
    },
    {
      id: 15,
      img: "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15531619355211_Nike.png",
      title: "Nike",
    },
    {
      id: 16,
      img: "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2022/2/2/stradivarius.png",
      title: "Stradivarius",
    },
    {
      id: 17,
      img: "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/17/Penti1_202301172103.png",
      title: "Penti",
    },
    {
      id: 18,
      img: "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15521619355120_LaRochePosay.png",
      title: "La Roche Posay",
    },
    {
      id: 19,
      img: "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2021/7/30/Defacto_202107301618.png",
      title: "DeFacto",
    },
    {
      id: 20,
      img: "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15511619355075_Hummel.png",
      title: "HUMMEL",
    },
    {
      id: 21,
      img: "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15561619355397_USPoloAssn.png",
      title: "U.S. Polo Assn.",
    },
    {
      id: 22,
      img: "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15471619354871_Bershka.png",
      title: "Bershkha",
    },
    {
      id: 23,
      img: "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2022/8/23/RsLogo_202208231450.png",
      title: "rise and shine",
    },
    {
      id: 24,
      img: "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15551619355344_Sony.png",
      title: "Sony",
    },
    {
      id: 25,
      img: "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15511619355115_Koton.png",
      title: "Koton",
    },
    {
      id: 26,
      img: "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15471619354839_Arzum.png",
      title: "Arzum",
    },
  ]);
  const [titles, setTitles] = useState([
    "https://cdn.dsmcdn.com/mnresize/500/500/marketing/datascience/automation/2022/6/29/SepeteEnCOkEklenenler_202206291435.png",
    "https://cdn.dsmcdn.com/mnresize/500/500/marketing/datascience/automation/2022/6/29/EnCOkONeCIkanlar_202206291435.png",
    "https://cdn.dsmcdn.com/mnresize/500/500/marketing/datascience/automation/2022/6/29/FlasINdirimler_202206291435.png",
  ]);
  const [productBanners, setProductBanners] = useState([
    {
      id: 1,
      img: "https://cdn.dsmcdn.com/ty669/pimWidgetApi/mobile_20230102111027_2299003ElektronikMobile202301021401.jpg",
      title: "Elektrikli Ev Aletleri",
    },
    {
      id: 2,
      img: "https://cdn.dsmcdn.com/ty699/pimWidgetApi/mobile_20230125120447_AyakkabiCantadaCokSatanlar2300739mobile.jpg",
      title: "Ayakkabı & Çanta'da Çok Satanlar",
    },
    {
      id: 3,
      img: "https://cdn.dsmcdn.com/ty699/pimWidgetApi/mobile_20230125120253_AyakkabiCantadaYilinEnleri2300729mobile.jpg",
      title: "Ayakkabı & Çanta'da Çok Satanlar",
    },
    {
      id: 4,
      img: "https://cdn.dsmcdn.com/ty701/pimWidgetApi/mobile_20230125142830_trmillaelbise251022mobile.jpg",
      title: "Trendyol Milla - Elbise",
    },
    {
      id: 5,
      img: "https://cdn.dsmcdn.com/ty700/pimWidgetApi/mobile_20230125140442_AdlBuyukKisIndirimiModaGunleri2300782mobile.jpg",
      title: "adl & Love my body Büyük Kış İndirimi",
    },
    {
      id: 6,
      img: "https://cdn.dsmcdn.com/ty700/pimWidgetApi/mobile_20230125100107_787878KadinMobile202301241701.jpg",
      title: "Koton - Kadın & Erkek & Çocuk Tekstil",
    },
  ]);
  const value = {
    headerMenuItems,
    setHeaderMenuItems,
    options,
    setOptions,
    titles,
    setTitles,
    productBanners,
    setProductBanners,
  };
  return (
    <TrendyolContext.Provider value={value}>
      {children}
    </TrendyolContext.Provider>
  );
};

export default Provider;
