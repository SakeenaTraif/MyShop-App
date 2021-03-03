import React from "react";
import { View, Image  } from "react-native";
import { Card, CardItem, Text, Left, Body } from "native-base";
import { useSelector } from "react-redux";
import ProductList from "../ProductList";

const ShopDetail = ({ route }) => {
  const allProducts = useSelector((state) => state.productReducer.products);
  // const shop = useSelector((state) => state.shopReducer.shops[0]);
  const {shop} = route.params;
  const products = shop.products.map((product) =>
    allProducts.find((_product) => _product.id === product.id)
  );

  return (
   <View>
      <Card>
        <CardItem>
          <Left>
            <Body>
              <Text>{shop.name}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={{ uri: shop.image }}
            style={{ height: 200, width: 200, flex: 1 }}
          />
        </CardItem>
      </Card>
      <ProductList products={products} />
    </View>
  );
};

export default ShopDetail;