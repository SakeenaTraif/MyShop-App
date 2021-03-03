import React from "react";
import { List } from "native-base";
import ProductItem from "./ProductItem";

const ProductList = ({ products, navigation }) => {
  const productList = products.map((product) => (
    <ProductItem navigation={navigation} product={product} key={product.id} />
  ));
  return (
  <List>{productList}</List>
  )
};

export default ProductList;