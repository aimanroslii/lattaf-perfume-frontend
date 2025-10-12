import { CategoriesSelection } from "../components/storefront/CategorySelection";
import { FeaturedProducts } from "../components/storefront/FeaturedProducts";
import { Hero } from "../components/storefront/Hero";
import { Navbar } from "../components/storefront/Navbar";
import { VideoPlayer } from "../components/storefront/VideoPlayer";

export default function IndexPage() {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      {/* <CategoriesSelection /> */}
      <VideoPlayer/>
      {/* <FeaturedProducts /> */}
    </div>
  );
}
