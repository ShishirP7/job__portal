import React from "react";
import "../../Style/Pricing.css"
import Nav from "../../Components/Navbar";
import Price from "../../Datas/Pricingdata"
import { Routes, Route, Link } from "react-router-dom";
import Footer from "../../Components/Footer";
import { BiChevronRight } from "react-icons/bi";
export default function Pricing() {
  return (
    <div>
      <Nav />
      <div>
        <div className="CreateContainer">
          <div className="titleArea">
            <h1>Pricing </h1>
            <ul>
              <li>Home</li>
              <li>
                <BiChevronRight id="righticon" />
              </li>
              <li>Pricing </li>
            </ul>
          </div>
        </div>
      </div>
     
    
       <div className="priceCard">
        
          {Price.map((cost) =>{
            return(
              <div className="pricingCardDetails">
                
                <div className="pricedetails">
                <h4>{cost.Heading}</h4>
                <h2>{cost.Price}</h2>
                <p>{cost.Always}</p>
                  </div>
                  <div className="listing"> 
                      <li id="priceList">{cost.Posting}</li>
                      <li id="priceList1">{cost.Renew}</li>
                      <li id="priceList2">{cost.Feature}</li>
                      <li id="priceList3">{cost.Duration}</li>
                  </div>
                 </div>

              
                 
            )
          })
        }
      </div>

      <Footer />
    </div>
  );
}