import React from "react";
import { ListItem } from "native-base";
import { ShopItemStyled } from "../ShopList/style";

const ProductItem = ({ product }) => {
  return (
    <ListItem>
      <ShopItemStyled>{product.name}</ShopItemStyled>
    </ListItem>
  );
};

export default ProductItem;