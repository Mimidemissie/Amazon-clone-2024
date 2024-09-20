// import React from "react";
// import classes from "./Results.module.css";
// import LayOut from "../../components/LayOut/LayOut";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { productUrl } from "../../Api/EndPoints";
// // Category from "../../components/Category/Category";

// function Results() {
//   const { CategoryName } = useParams();
//   useEffect(() => {
//     axios
//       .get(`${productUrl}/products/Category/${CategoryName}`)
//       .then((res) => {
//         setResults(res.data);
//         console.log(res, data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   return (
//     <LayOut>
//       <section>
//         <h1 style={{ padding: "30px" }}>Results</h1>
//         <p style={{ padding: "30px" }}>Category/{CategoryName}</p>
//         <hr />
//         <div className={classes.products_container}>
//           {results?.map((product) => (
//             <ProductCard
//             key={product}
//             product={product}
//             renderDesc={false}
//             renderAdd={true}
//             />
//           ))}
//         </div>
//       </section>
//     </LayOut>
//   );
// }

// export default Results;

import React, { useEffect, useState } from "react";
import classes from "./Results.module.css";
import LayOut from "../../components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/EndPoints";
import ProductCard from "../../components/Products/ProductCard"; // Ensure you import ProductCard

function Results() {
  const { CategoryName } = useParams();
  const [results, setResults] = useState([]); // Added useState to manage fetched data

  useEffect(() => {
    // Fetch products based on the category from API
    axios
      .get(`${productUrl}/products/Category/${CategoryName}`)
      .then((res) => {
        setResults(res.data); // Update the state with fetched products
        console.log(res.data); // Log the actual data being fetched
      })
      .catch((err) => {
        console.log(err); // Log any error during the API request
      });
  }, [CategoryName]); // Re-run the effect when the CategoryName changes

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category/{CategoryName}</p>
        <hr />
        <div className={classes.products_container}>
          {/* Map over the results to display ProductCards */}
          {results?.map((product) => (
            <ProductCard
              key={product.id} // Use product.id or a unique identifier
              product={product}
              renderDesc={false}
              renderAdd={true}
            />
          ))}
        </div>
      </section>
    </LayOut>
  );
}

export default Results;
