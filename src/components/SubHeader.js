import React from "react";
import "./SubHeader.css";
import MenuIcon from "@material-ui/icons/Menu";

function SubHeader() {
  return (
    <div className="subHeader">
      <div className="subHeader__sectionA">
        <div>
          <MenuIcon className="subHeader__menuItem" />
          <span className="subHeader_menuText">All</span>
        </div>
        <div>
          <span>Best Sellers</span>
        </div>
        <div>
          <span>New Releases</span>
        </div>
        <div>
          <span>Prime</span>
        </div>
        <div>
          <span>Fashion</span>
        </div>
        <div>
          <span>Electromics</span>
        </div>
        <div>
          <span>Books</span>
        </div>
        <div>
          <span>Home</span>
        </div>
        <div>
          <span>Pet Supplies</span>
        </div>
      </div>
      <div className="subHeader__sectionB">
        <div>
          <img
            src="https://images-fe.ssl-images-amazon.com/images/G/35/Kindle/merch/AU/gateway/KCP-graphics-swms-c-au-400x39_01._CB485946680_.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default SubHeader;
