import React from "react";
import Form from "../Components/form";
import { BiChevronRight } from "react-icons/bi";
import Nav from "../Components/Navbar";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";
export default function Uploadcv() {
  return (
    <div>
      <Nav />
      <Banner name={"Upload CV"} />
      <Form />
      <Footer />
    </div>
  );
}
