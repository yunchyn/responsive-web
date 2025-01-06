import Banner from "../components/banner";
import MostWantedProducts from "../components/most-wanted";
import NewArrivalProducts from "../components/new-arrival";
import RecommendedCategory from "../components/rec-category";
import SubBanner from "../components/sub-banner";

export default function Home() {
  return (
    <>
      <Banner />
      <RecommendedCategory />
      <MostWantedProducts />
      <NewArrivalProducts />
      <SubBanner />
    </>
  );
}
