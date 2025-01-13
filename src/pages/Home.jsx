import React from 'react';
import HeroSlider from '../components/home/HeroSlider';
import Categories from '../components/home/Categories';
import FeaturedProducts from '../components/home/FeaturedProducts';
import OfferBanners from '../components/home/OfferBanners';
import BestSeller from '../components/home/BestSeller';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full">
        <HeroSlider />
      </div>
      <div className="w-11/12 py-5">
        <h1 className="title_container py-2">
          <h1 className="title font-bold text-center text-3xl">
            Find Your Style: Furniture Categories
          </h1>
        </h1>
        <Categories />
      </div>
      <div className="w-11/12 py-5">
        <h1 className="title_container py-2">
          <h1 className="title font-bold text-xl">
            Discover Our Featured Products
          </h1>
        </h1>
        <FeaturedProducts />
      </div>
      <div className="w-11/12 py-7 font-bold">
        <span className="text-xl">Offer</span>
        <OfferBanners />
      </div>
      <div className="w-11/12 py-5">
        <h1 className="title_container py-2">
          <h1 className="title font-bold text-xl">
            Discover Our Best Seller
          </h1>
        </h1>
        <BestSeller />
      </div>
      <div className="w-11/12 py-5">
        <Newsletter />
      </div>
    </div>
  );
}

export default Home;
