import React, { useEffect, useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useStateValue } from "../data/StateProvider";
import { auth } from "../firebase";
import SubHeader from "./SubHeader";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [itemAdded, setItemAdded] = useState(false);
  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };
  useEffect(() => {
    if (basket.length === 0) {
      return;
    }
    setItemAdded(true);
    const timer = setTimeout(() => {
      setItemAdded(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [basket]);

  return (
    <div className="headerWrapper">
      <div className="header">
        <Link to="/" className="header__link">
          <div className="header__logo__container">
            <img
              className="header__logo"
              src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt=""
            />
            <span className="header__location__text">.com.au</span>
          </div>
        </Link>
        <div className="header__location">
          <LocationOnOutlinedIcon className="header__locationIcon" />
          <div className="header__location__option">
            <span className="header__optionLineOne" style={{ color: "#ccc" }}>
              Hello
            </span>
            <span className="header__optionLineTwo">Select your address</span>
          </div>
        </div>
        <div className="header__search">
          <select className="header__searchOption" defaultValue="all">
            <option value="all">All</option>
            <option value="notAll">Not ALl</option>
            <option value="beauty">Beauty</option>
          </select>
          <input type="text" className="header__searchInput" />
          <SearchIcon className="header__searchIcon" />
        </div>
        <div className="header__nav">
          <Link to={!user && "/login"}>
            <div onClick={handleAuth} className="header__option">
              <span className="header__optionLineOne">
                Hello, {user ? user.displayName : "Sign in"}
              </span>
              <span className="header__optionLineTwo">
                {user ? "Sign out" : "Account & Lists"}
              </span>
            </div>
          </Link>
          <Link to="/orders">
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>
          <Link to="/checkout" className="header__basket">
            <div className="header__optionBasket">
              <ShoppingCartOutlinedIcon fontSize="large" />
              <div className="header__optionBasketInfo">
                <span
                  className={`header__optionLineTwo header__basketCount ${
                    itemAdded && "bump"
                  }`}
                >
                  {basket?.length}
                </span>
                <span className="header__basketCart">Cart</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <SubHeader />
    </div>
  );
}

export default Header;
