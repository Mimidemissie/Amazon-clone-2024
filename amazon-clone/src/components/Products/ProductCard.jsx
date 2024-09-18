import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";

function ProductCard({ product, flex, renderDesc }) {
  const { image, title, id, rating, price, description } = product;
  console.log(product);

  return (
    <div
      className={`${classes.card__container} ${
        flex ? classes.product__flexed : ""
      }`}
    >
      <Link to={`/Products/${id}`}>
        <img src={image} alt={title} className={classes.img__container} />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}
        <div className={classes.rating}>
          {/* rating */}
          <Rating value={rating.rate} precision={0.1} readOnly />
          {/* count */}
          <small>{rating.count}</small>
        </div>
        <button className={classes.button}>Add to cart</button>
        <div>
          {/* price */}
          <CurrencyFormat amount={price} />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
