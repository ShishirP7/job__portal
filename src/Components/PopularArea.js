import React from "react";
import Img1 from "../Images/col5img1.jpg";
import Img2 from "../Images/col5img2.jpg";
import Img3 from "../Images/col5img3.jpg";
import Logo1 from "../Images/no-money.png";
import Logo2 from "../Images/enterprise.png";
import Logo3 from "../Images/approval.png";
import Logo4 from "../Images/employee.png";

export default function PopularArea() {
  return (
  <div className="popularContainer">

    <div className="popularArea">
      
      <div className="col-6-left">
        <div>
          <img id="img1" src={Img1} alt="img1" />
        </div>
        <div id="image2n3">
          <div>
            <img src={Img2} alt="img2" />
          </div>
          <br></br>
          <div className="img3">
            <img src={Img3} alt="img3" />
          </div>
        </div>
      </div>
      <div className="col-6-right">
        <h1>Why We are Most Popular</h1>
        <p>
          Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
          maecenas accumsan lacus vel facilisis. Quis ipsum suspendisse ultrices
          gravida
        </p>
        <div className="col-6-items">
          <div id="a">
            <div id="a-item1">
              <img src={Logo1} alt="pic4" className="imgcol6" />
              <div>No Extra Charge </div>
            </div>

            <div>
              <img src={Logo2} alt="pic4" className="imgcol6" />
              <div>International Job</div>
            </div>
          </div>
          <div id="b">
            <div id="a-item1">
              <img src={Logo3} alt="pic4" className="imgcol6" />
              <div>Trusted Quality & Control</div>
            </div>

            <div>
              <img src={Logo4} alt="pic4" className="imgcol6" />
              <div> Top Companies</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
