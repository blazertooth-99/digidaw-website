"use client";

import HeroPage from "./hero";
import PortraitGallery from "./portraitGallery";
import SubscribePage from "./subscribePage";
import VerticalImage from "./verticalImage";

const Home = () => {
  return (
    <main>
      <HeroPage />
      <PortraitGallery />
      <VerticalImage />
      <SubscribePage />
    </main>
  );
};
export default Home;