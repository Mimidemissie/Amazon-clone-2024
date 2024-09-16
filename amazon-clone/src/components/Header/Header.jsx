import React from "react";
import classes from "./Header.module.css";

import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import LowerHeader from "./LowerHeader";
import { BiCart } from "react-icons/bi";

const Header = () => {
  // Moved console.log outside the return
  // console.log("Header component loaded");

  return (
    <>
      <section>
        <div className={classes.header__container}>
          {/* logo */}
          <div className={classes.logo__container}>
            <a href="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </a>
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
            <input type="text" name=""  id="" placeholder="search product" />
            <BsSearch size={25} />
          </div>
          {/* right side link */}
          <div>
            <div className={classes.order__container}>
              <a href="" className={classes.language}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                  alt="US flag"
                />

                <select name="" id="">
                  <option value="">EN</option>
                </select>
              </a>

              {/* three component */}
              <a href="">
                <div>
                  <p>sign in</p>
                  <span>Account & Lists</span>
                </div>
              </a>
              {/* orders */}
              <a href="">
                <p>returns</p>
                <span>& Orders</span>
              </a>
              {/* cart */}

              <a href="" className={classes.cart}>
                <BiCart size={35} />
                <span>0</span>
                <p></p>
              </a>
            </div>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
};

export default Header;
