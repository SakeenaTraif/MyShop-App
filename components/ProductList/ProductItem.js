import React from "react";
import { ListItem } from "native-base";
import { ShopItemStyled } from "../ShopList/style";

const ProductItem = ({ navigation, product }) => {
  return (
    <ListItem onPress={() => navigation.navigate(("ProductDetail"), {product}) }>
      <ShopItemStyled>{product.name}</ShopItemStyled>
    </ListItem>
  );
};

export default ProductItem;