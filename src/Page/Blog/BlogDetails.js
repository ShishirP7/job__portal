import React from "react";
import Nav from "../../Components/Navbar";
import { BiChevronRight } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

import Footer from "../../Components/Footer"
import BlogBanner from "../../Images/Profile/4.jpg"

export default function BlogDetails() {
  return (
    <div>
      <Nav />

      <Nav />
      <div>
        <div className="CreateContainer">
          <div className="titleArea">
            <h1>Blog Details</h1>
            <ul>
              <li>Home</li>
              <li>
                <BiChevronRight id="righticon" />
              </li>
              <li>Blog Details</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="BlogDContainer">
        <div className="Blog-left">
          <div className="Blogbanner">
          <img src={BlogBanner} />
          </div>
          <p>When you create your resume, you may wonder if it’s acceptable to change the job <br />
            title of a position that you held, or maybe you’re thinking about expanding <br />
            the amount of time you held the job.
          </p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            <br />
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to <br />

            make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
            <br /> remaining essentially unchanged.
            <br />
            <br />
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            <br />and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

          </p>
          <hr />

          <div className="blogListing">
          <div className="share"><h4>Share:</h4></div>
           
            <div className="facebook"><FaFacebookF /></div>

            <div className="twit"><AiOutlineTwitter /></div> 

            <div className="link"><AiFillLinkedin /></div> 

             <div className="inst"><AiFillInstagram /></div>
           
          </div>
          <br />
          <br />
          <div className="btnnn">

            <button >Previous</button>
            <button >Next</button>

          </div>
        <br/>
        <br/>
        <div className="comment">
        <h2>Drop Your Comment</h2></div>
        <div className="form">
         
        <input type="text" name="name" id="txtname" class="form-control" required="" data-error="Please enter your name" placeholder="Your Name"/>
        <br/>
        <br/>
        <br/>

        <input type="email" name="name" id="formEmail" class="form-control" required="" data-error="Please enter your name" placeholder="Your Email"/>
        <br/>
        <br/>
        <br/>

        <input type="number" name="name" id="formPhone" class="form-control" required="" data-error="Please enter your name" placeholder="Your Phone"/>
        <br/>
        <br/>
        <br/>

      
      <input type="text" id="textMessage" placeholder="Your Message"/>
  
      <br/>
      <br/>
        </div>

        <div className="btnComment">
        <button className="postComment">Post Your Comment</button>

        </div>
        </div>
        
        <div className="rightDiv">
          <div>
            <div className="jobCat">
            <h2>Job Categories</h2>
            <hr />
              <p><button></button>Web Developer <span>(5)</span></p>
              <p><button></button>Web Designer <span>(2)</span></p>
              <p><button></button>UX/UI Designer <span>(7)</span></p>
              <p><button></button>Marketing <span>(0)</span></p>
              <p><button></button>SEO <span>(1)</span></p>
              <p><button></button>Networking <span>(0)</span></p>
            </div>
            <div className="jobLocations">
            <h2>Job Locations</h2>
            <hr />
          
              <p><button></button>New York <span>(4)</span></p>
              <p><button></button>Washington <span>(5)</span></p>
              <p><button></button>Chicago <span>(3)</span></p>
              <p><button></button>Houston <span>(1)</span></p>
              <p><button></button>Los Angeles <span>(0)</span></p>
            </div>
            <div className="jobTypes">
            <h2>Job Types</h2>
            <hr />
            
              <p><button></button>Free Lancing <span>(11)</span></p>
              <p><button></button>Part Time <span>(9)</span></p>
              <p><button></button>Full Time <span>(7)</span></p>
              <p><button></button>Internship <span>(13)</span></p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
    
  
  );

  }