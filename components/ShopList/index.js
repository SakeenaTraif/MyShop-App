import React from "react";
import { useSelector } from "react-redux";
import ShopItem from "./ShopItem";
import { View } from "react-native";
import { List } from "native-base";
import {Title} from "./style";

const ShopList = ({ navigation }) => {
  const shops = useSelector((state) => state.shopReducer.shops);

  const shopList = shops
    .map((shop) => <ShopItem navigation={navigation} key={shop.id} shop={shop}/>);
    return (
      <View>
        <Title>Choose your Shop!</Title>
        <List>{shopList}</List>
      </View>
    );
  };

export default ShopList;