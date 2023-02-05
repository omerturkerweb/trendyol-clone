import Header from "./components/Header";
import Options from "./components/Options";
import ProductBanners from "./components/ProductBanners";
import Products from "./components/Products";
import Titles from "./components/Titles";
import Footer from "./components/Footer";
import TrendyolProvider from "./trendyol-context/TrendyolContext";
function App() {
  return (
    <>
      <TrendyolProvider>
        <div className="app_main w-4/5  mx-auto">
          <Header />
          <Options />
          <Titles />
          <ProductBanners />
          <Products />
          <ProductBanners />
          {/*   <Footer />
           */}
        </div>
      </TrendyolProvider>
    </>
  );
}

export default App;
