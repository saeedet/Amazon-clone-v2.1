import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-fe.ssl-images-amazon.com/images/G/35/digital/video/Magellan_MLP/BRND_MTH21_GWBleedingHero_1500x600_Final_en-AU_FT_PVD7128._CB665233080_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="4903850"
            title="Apple Watch SE (GPS, 40mm) - Space Grey Aluminium Case with Black Sport Band"
            price={419.99}
            image="https://m.media-amazon.com/images/I/716AMwZRWcL._AC_UL320_.jpg"
            rating={3}
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            rating={5}
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            rating={4}
          />
          <Product
            id="3254354345"
            title="Razer Basilisk X Hyperspeed Wireless Ergonomic Gaming Mouse, Black, RZ01-03150100-R3A1"
            price={65.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41K5ms2-H5L.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="4903852310"
            title="Razer AU Kraken X Multi-Platform Wired Gaming Headset, Black, RZ04-02890100-R3M1"
            price={59.99}
            image="https://images-na.ssl-images-amazon.com/images/I/31pP5s+iorL.jpg"
            rating={3}
          />
          <Product
            id="23445933330"
            title="Logitech 920-007558 Multi-Device Bluetooth Keyboard K380, Dark Grey"
            price={52.0}
            image="https://images-na.ssl-images-amazon.com/images/I/411UgYd5OTL.jpg"
            rating={5}
          />
          <Product
            id="32543253554345"
            title="Logitech G 981-000636 Wireless Gaming Headset G533"
            price={169.99}
            image="https://images-fe.ssl-images-amazon.com/images/I/61SJhKe-LsL._AC_UL160_SR160,160_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="1232343421341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successfu Businesses Paperback"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400.jpg"
            rating={3}
          />
          <Product
            id="49538555094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Liter Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="908293217532"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
