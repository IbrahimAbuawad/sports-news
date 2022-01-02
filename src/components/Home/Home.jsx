import React, { useState } from "react";
import { useNavigate  } from "react-router-dom";
import "./Home.css";
import HeroImage from "../../assets/undraw_grand_slam_0q5r.png";
import { GoDeviceMobile } from "react-icons/go";

function Home() {
  const [activeBtn, setActiveBtn] = useState("Mobily");
  function changeBtn(e) {
    setActiveBtn(e.target.id);
    console.log(activeBtn);
  }

  let navigate = useNavigate();
  function linkRedirect() {
    navigate("/OTP");
  }
  return (
    <div id="container">
      <div id="heroCont" class="animate__animated animate__fadeInLeft animate__delay-1s">
        <img src={HeroImage} />
      </div>
      <div  class="animate__animated animate__fadeInUp animate__delay-1s" id="contentContainer">
        <h4>Enter Your Mobile Number</h4>
        <form>
          <GoDeviceMobile id="go" />
          <input
            type="tel"
            placeholder="Example: 07xxxxxxxx"
            id="number"
            name="number"
            pattern="[0-9]{10}"
            required
          />
          {activeBtn === "STC" && (
            <div id="choose">
              <p
                id="STC"
                style={{ backgroundColor: "#192449", color: "white" }}
                onClick={(e) => {
                  changeBtn(e);
                }}
              >
                STC
              </p>
              <p
                id="Mobily"
                onClick={(e) => {
                  changeBtn(e);
                }}
              >
                Mobily
              </p>
              <p
                id="Zain"
                onClick={(e) => {
                  changeBtn(e);
                }}
              >
                Zain
              </p>
            </div>
          )}
          {activeBtn === "Mobily" && (
            <div id="choose">
              <p
                id="STC"
                onClick={(e) => {
                  changeBtn(e);
                }}
              >
                STC
              </p>
              <p
                style={{ backgroundColor: "#192449", color: "white" }}
                id="Mobily"
                onClick={(e) => {
                  changeBtn(e);
                }}
              >
                Mobily
              </p>
              <p
                id="Zain"
                onClick={(e) => {
                  changeBtn(e);
                }}
              >
                Zain
              </p>
            </div>
          )}
          {activeBtn === "Zain" && (
            <div id="choose">
              <p
                id="STC"
                onClick={(e) => {
                  changeBtn(e);
                }}
              >
                STC
              </p>
              <p
                id="Mobily"
                onClick={(e) => {
                  changeBtn(e);
                }}
              >
                Mobily
              </p>
              <p
                style={{ backgroundColor: "#192449", color: "white" }}
                id="Zain"
                onClick={(e) => {
                  changeBtn(e);
                }}
              >
                Zain
              </p>
            </div>
          )}

          <button onClick={linkRedirect} type="submit">Continue</button>
        </form>
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

export default Home;
