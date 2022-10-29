import React from "react";
import { MDBBtn} from "mdb-react-ui-kit";
import image from "../image/home.jpg";

export default function HomePage() {
  return (
    <div className="bg-image" >
      <img src={image} className="img-fluid" alt="houseImage" />
      <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
        <div className="d-flex justify-content-center align-items-center h-75" style={{flexDirection:'column'}}>
          <p className="text-white  mb-0" style={{fontSize:'2vw'}}>INDOOR & OUTDOOR</p>
          <p className="text-white text-wrap  utility  mb-0"  style={{fontSize:'4.0vw',fontWeight:'bold'}}>ENJOY A LUXURY EXPERIENCE</p>
         <MDBBtn color="primary"  className="home-btn" >ROOMS & SUITES</MDBBtn>
        </div>
      </div>
    </div>
  );
}
