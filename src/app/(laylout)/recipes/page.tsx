import Recipes from "@/components/Recipes";
import React from "react";

const ProductsPage = async () => {
  const data = await fetch("https://dummyjson.com/recipes", {cache: "force-cache"});
  const recipes = await data.json();

  return <div><Recipes data={recipes}/></div>;
};

export default ProductsPage;