import React from "react";
import { ListItem } from "native-base";
import { ShopItemStyled } from "./style";

const ShopItem = ({  navigation, shop }) => {
  return (
    <ListItem onPress={() => navigation.navigate(("ShopDetail"), {shop}) }>
    <ShopItemStyled>{shop.name}</ShopItemStyled>
    </ListItem>
    
  );
};

export default ShopItem;