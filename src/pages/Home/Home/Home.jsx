import Banner from "../Banner/Banner";
import BestSellers from "../BestSellers/BestSellers";
import Category from "../Category/Category";
import OfferBanner from "../OfferBanner/OfferBanner";
import ShopByBrands from "../ShopByBrands/ShopByBrands";
import SpecialOffers from "../SpecialOffers/SpecialOffers";
import UpSection from "../UpSection/UpSection";
import YearProduct from "../YearProduct/YearProduct";

const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="flex gap-4 mb-12 py-20">
        <div className="basis-3/4">
          <Banner />
        </div>
        <div className="basis-1/4 bg-gray-50 rounded shadow-sm">
          <ShopByBrands />
        </div>
      </div>
      <div className="max-[860px]:hidden">
        <UpSection />
      </div>
      <Category />
      <BestSellers />
      <OfferBanner />
      <SpecialOffers />
      <YearProduct />
    </div>
  );
};

export default Home;
