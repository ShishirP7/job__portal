import React from "react";
import Navbar from "../Components/Navbar";
import { BiChevronRight } from "react-icons/bi";
import Form from "../Components/form";

import Footer from "../Components/Footer";
import Banner from "../Components/Banner";
export default function Signup() {
  return (
    <div>
      <Navbar />
      <Banner name={"Sign Up"} />
      <Form />
      <Footer />
    </div>
  );
}
