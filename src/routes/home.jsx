import { useState } from "react";
import Banner from "../components/banner";
import Footer from "../components/footer";
import MostWantedProducts from "../components/most-wanted";
import NewArrivalProducts from "../components/new-arrival";
import RecommendedCategory from "../components/rec-category";
import SubBanner from "../components/sub-banner";
import { Popup } from "../components/popup";

export default function Home() {
  const [showPopup, setShowPopup] = useState(true);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <Popup
        show={showPopup}
        onClose={closePopup}
      />
      <Banner />
      <RecommendedCategory />
      <MostWantedProducts />
      <NewArrivalProducts />
      <SubBanner />
      <Footer />
    </>
  );
}
