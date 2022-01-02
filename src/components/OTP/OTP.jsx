import React from "react";
import "./OTP.css";
import HeroImage from "../../assets/undraw_goal_0v5v (1).png";

function OTP() {

  return (
    <div id="container">
      <div id="heroCont" class="animate__animated animate__fadeInLeft animate__delay-1s">
        <img src={HeroImage} />
      </div>
      <div id="contentContainer" class="animate__animated animate__fadeInUp animate__delay-1s" >
        <h4>Insert Code</h4>
        <form>
          <input
            type="number"
            id="number"
            name="number"
            pattern="[0-9]{5}"
            required
          />

        </form>
          <button style={{marginTop:'13px'}} type="submit">Subscribe</button>
        <p>
          Clicking the button means you are okay with{" "}
          <span>Terms & Conditions</span>
        </p>
        <p id="info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore atque
          illum quidem dolor ipsa deserunt veritatis sunt itaque culpa qui nobis
          corrupti eaque rem nulla officia, id voluptate perspiciatis maiores.
        </p>
      </div>
    </div>
  );
}

export default OTP;
