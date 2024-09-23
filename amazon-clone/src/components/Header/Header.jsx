import React, { Component, useContext } from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import LowerHeader from "./LowerHeader";
import { BiCart } from "react-icons/bi";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../Utility/Firebase";

const Header = () => {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  return (
    <>
      <section className={classes.fixed}>
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
                <Link to={!user && "/auth"}>
                  <div>
                    {user ? (
                      <>
                        <p>
                          Hello
                          {user?.email?.split("@")[0]}
                        </p>
                        <span onClick={() => auth.signOut()}>Sign Out</span>
                      </>
                    ) : (
                      <>
                        <p> Hello sign In</p>
                        <span>Account & Lists</span>
                      </>
                    )}
                  </div>
                </Link>
                {/* orders */}

                <Link to="/orders">
                  <div>
                    <p>returns</p>
                    <span>& Orders</span>
                  </div>
                </Link>
                {/* cart */}

                <Link to="/Cart" className={classes.cart}>
                  <BiCart size={35} />
                  <span>{totalItem}</span>
                  <p></p>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <LowerHeader />
      </section>
    </>
  );
};

export default Header;
