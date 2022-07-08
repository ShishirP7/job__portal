import React from "react";
import Navbar from "../Components/Navbar";
import { BiChevronRight } from "react-icons/bi";
import Categorical from "../Components/Category";
import Counter from "../Components/Counter";
import PopularArea from "../Components/PopularArea";
import Blog from "../Components/Blog";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";
export default function About() {
  return (
    <div>
      <Navbar />
      <Banner name={"About"} />
      <Categorical />
      <Counter />
      <PopularArea />
      <Blog />
      <Footer />
    </div>
  );
}
