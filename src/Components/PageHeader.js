import React from 'react'
import { BiChevronRight } from "react-icons/bi";
export default function PageHeader(headline,active) {
  return (
    <div>
         <div>
        <div className="CreateContainer">
          <div className="titleArea">
            <h1></h1>
            <ul>
              <li>Home</li>
              <li>
                <BiChevronRight id="righticon" />
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
