import React from 'react'
// import image2 from "../../Assets/images/pic5.jpg";
// import pic27 from "../../Assets/images/pic27..jpg";
import childhoodamma from "../../Assets/images/childhoodamma.jpg"
// import pic29 from"../../Assets/images/pic29.jpg";
import bluehood from "../../Assets/images/bluehood.jpg"
import thatha from "../../Assets/images/thatha.jpg";
import Amma from "../../Assets/images/Amma.jpg";
import pic2 from "../../Assets/images/pic2.png.jpg"
import pic3 from "../../Assets/images/pic3.png.jpg";
import pic4 from "../../Assets/images/pic4.png.jpg";
import family from "../../Assets/images/familypic5.png";
import pic6 from "../../Assets/images/pic6.png.jpg";
import pic19 from "../../Assets/images/pic19.jpg";
import pic16 from "../../Assets/images/pic16.jpg";
import pic20 from "../../Assets/images/pic20jpg.jpg"
import pic15 from "../../Assets/images/pic15.jpg";
import thathajpg from "../../Assets/images/thathajpg.jpg";
import thathasnap from "../../Assets/images/thathasnap.jpg"
import "./style.css"


function SilderCard() {
  return (
    <>
    <div className='childhood'>
        <p>Your Golden Days🤩</p>
    </div>
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Amma} class=" w-100 h-25" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={thatha} class="w-100 h-25" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={childhoodamma} class="w-100 h-25" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={pic2} class=" w-100 h-25" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={pic3} class="w-100 h-25" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={pic4} class="w-100 h-25" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={family} class="w-100 h-25" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={pic6} class="w-100 h-25" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={bluehood} class="w-100 h-25" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={pic19} class="w-100 h-25" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={pic16} class="w-100 h-25" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={pic15} class="w-100 h-25" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={pic20} class="w-100 h-25" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={thathajpg} class="w-100 h-25" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={thathasnap} class="w-100 h-25" alt="..."/>
    </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</>
  )
}

export default SilderCard
