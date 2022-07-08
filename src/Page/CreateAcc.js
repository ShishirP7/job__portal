import React, { useState, useRef } from "react";
import Navbar from "../Components/Navbar";
import { BiChevronRight } from "react-icons/bi";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Form from "../Components/form";

export default function CreateAcc() {
  return (
    <div>
      <Navbar />
      <Banner name={"Create Account"}/>
      <Form />

      <Footer />
    </div>
  );
}
