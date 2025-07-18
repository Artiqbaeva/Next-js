import Products from "@/components/Products";
import React from "react";

const ProductsPage = async () => {
  const data = await fetch("https://dummyjson.com/products", {cache: "force-cache"});
  const products = await data.json();

  return <div><Products data={products}/></div>;
};

export default ProductsPage;