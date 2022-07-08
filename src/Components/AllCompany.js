import React from "react";
import CompaniesData from "../../src/Datas/CompaniesData"
export default function CompanyList() {
  return (
  <div className="AllcompanyList">
    {CompaniesData.map((el)=>{
        return(
            <div className="companyCardd">
                <img src={el.img}/>
                <h2>{el.name}</h2>
                <p>{el.address}</p>
                <button>Hiring</button>

            </div>
        )
    })}


  </div>)
}
