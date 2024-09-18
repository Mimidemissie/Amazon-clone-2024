import React from "react";
import classes from "./Results.module.css";
import LayOut from "../../components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/EndPoints";
// Category from "../../components/Category/Category";

function Results() {
  const { CategoryName } = useParams();
  useEffect(() => {
    axios
      .get(`${productUrl}/products/Category/${CategoryName}`)
      .then((res) => {
        setResults(res.data);
        console.log(res, data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category/{CategoryName}</p>
        <hr />
        <div className={classes.products_container}>
          {results?.map((product) => (
            <ProductCard key={product} />
          ))}
        </div>
      </section>
    </LayOut>
  );
}

export default Results;
