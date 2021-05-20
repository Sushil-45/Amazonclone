import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://c1.wallpaperflare.com/preview/452/189/202/technology-computer-laptop-tech.jpg"
          alt=""
        />

        <div className="home__row">
            <Product
            id="12321341"
            title="POCO M2 Pro (Two Shades of Black, 64 GB)  (6 GB RAM)"
            price={13999}
            image="https://rukminim1.flixcart.com/image/150/150/kcauaa80/mobile/2/p/u/poco-m2-pro-mzb9621in-original-imaftg9fkdpgbgxq.jpeg?q=70"
          />
          
          <Product
            id="49538094"
            title="SAMSUNG Galaxy M11 (Black, 32 GB)  (3 GB RAM)
            This smartphone is a great performer and the ideal companion for your entertainment. "
            price={13999.0}
            image="https://rukminim1.flixcart.com/image/416/416/kavefm80/mobile/6/y/t/samsung-galaxy-m11-sm-m115fzkeins-original-imafscjyhxwghgwf.jpeg?q=70"
          />
        </div>
   
        <div className="home__row">
          <Product
            id="4903850"
            title="Czech Sports Stereo Headphones Bluetooth Headset  (Black, True Wireless)"
            price={350}
            image="https://rukminim1.flixcart.com/image/416/416/kmns7m80/headphone/c/3/m/sports-stereo-headphones-czech-original-imagfgezczukxwga.jpeg?q=70"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={15999.99}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={10940.98}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
           <Product
            id="90829333"
            title="ViVO Y12s (Glacier Blue, 32 GB)  (3 GB RAM)
            This smartphone features an AI Dual Camera and a Bokeh Camera to click outstanding photos, a 5000 mAh Battery for non-stop performance."
            price={12999.98}
            image="https://rukminim1.flixcart.com/image/416/416/kjkbv680/mobile/b/z/v/vivo-y12s-v2026-original-imafz3ztzyqqtp6t.jpeg?q=70"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;