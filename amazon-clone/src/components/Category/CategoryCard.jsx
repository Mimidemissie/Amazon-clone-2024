import React from "react";
import classes from "./Category.module.css";
import { Link } from "react-router-dom";

function CategoryCard({ data }) {
  console.log(data); // Properly formatted console log
  return (
    <div className={classes.category}>
      <Link to={`/Category/${data.name}`}>
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imageLink} alt={data.title} /> {/* Added alt text */}
        <p>Shop Now</p>
      </Link>{" "}
      {/* Properly closed Link tag */}
    </div>
  );
}

export default CategoryCard;
