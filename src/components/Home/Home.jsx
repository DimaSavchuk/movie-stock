import React from "react";
import { useSelector } from "react-redux";

import Hero from "../Hero/Hero";
import TrendingMovies from "../TrendingMovies/TrendingMovies";
import Categories from "../Categories/Categories";

const Home = () => {
  // const { categories } = useSelector((state) => state);

  return (
    <>
      <Hero />
      <TrendingMovies title="Trending NOW" />
      {/* <Categories products={categories.list} amount={5} title="Worth seeing" /> */}
    </>
  );
};

export default Home;
