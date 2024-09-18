import React from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import LowerHeader from "./LowerHeader";
import { BiCart } from "react-icons/bi";
//import Landing from "./Pages/Landing/Landing";
//import SignIn from "./Pages/Auth/SignUp";
//import Payment from "./Pages/Payment/Payment";
//import Orders from "./Pages/Orders/Orders";
//import Cart from "./Pages/Cart/Cart";

const Header = () => {
  // Moved console.log outside the return
  // console.log("Header component loaded");

  return (
    <>
      <section>
        <div className={classes.header__container}>
          {/* logo */}
          <div className={classes.logo__container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </Link>
            <div className={classes.delivery}>
              {/* delivery */}
              <span>
                {/* icon */}
                <SlLocationPin />
              </span>
              <div>
                <p>Delivered to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>

          {/* search */}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" name="" id="" placeholder="search product" />
            <BsSearch size={25} />
          </div>
          {/* right side link */}
          <div>
            <div className={classes.order__container}>
              <Link to="" className={classes.language}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                  alt="US flag"
                />

                <select name="" id="">
                  <option value="">EN</option>
                </select>
              </Link>

              {/* three component */}
              <Link to="">
                <div>
                  <p>sign in</p>
                  <span>Account & Lists</span>
                </div>
              </Link>
              {/* orders */}
              <Link to="/Orders">
                <p>returns</p>
                <span>& Orders</span>
              </Link>
              {/* cart */}

              <Link to="/Cart" className={classes.cart}>
                <BiCart size={35} />
                <span>0</span>
                <p></p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
};

export default Header;
