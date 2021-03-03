import React from "react";
import { View, Image  } from "react-native";
import { Card, CardItem, Text, Left, Body } from "native-base";
import { useSelector } from "react-redux";

const ProductDetail = ({ route }) => {
    const {product} = route.params;
  
  return (
   <View>
      <Card>
        <CardItem>
          <Left>
            <Body>
              <Text>{product.name}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={{ uri: product.image }}
            style={{ height: 200, width: 200, flex: 1 }}
          />
        </CardItem>
        <CardItem>
          <Left>
            <Body>
              <Text>{product.description}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
          <Left>
            <Body>
              <Text>{product.price} BHD</Text>
            </Body>
          </Left>
        </CardItem>
      </Card>
    </View>
  );
};

export default ProductDetail;