import React, { useEffect, useState } from "react";
import Classes from "./ProductDetail.module.css";
import LayOut from "../../components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../../components/Products/ProductCard";
import Loader from "../../components/Loader/Loader";

function ProductDetail() {
  console.log("hi");
  const { ProductId } = useParams(); // Gets ProductId from the URL params
  console.log(ProductId);

  const [product, setProduct] = useState(null); // Initialize product state to null
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    console.log("Fetching product details");

    axios
      .get(`https://fakestoreapi.com/products/${ProductId}`) // Use ProductId dynamically in the API call
      .then((res) => {
        setProduct(res.data);
        console.log(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [ProductId]); // Add ProductId as a dependency so the effect runs when it changes

  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {console.log(product)}
          {product && (
            <ProductCard product={product} flex={true} renderDesc={true} />
          )}
        </>
      )}
    </LayOut>
  );
}

export default ProductDetail;
