import React from "react";
import image1 from '../../Assets/images/pic5.jpg';
import "./Mainsection1.css"


function MainSection1() {
  return (
    <div className="mainsection1">
      <div className="topic1">
        <div className='content'>
        <p>Happy Birthday</p>
      <p >Preethi Varsha❤️👸💍🌏</p>
        </div>
       <img src={image1} alt="image1" className="image1"/>
      </div>
    </div>
  );
}

export default MainSection1;
