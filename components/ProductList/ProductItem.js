import React, { useState } from "react";
import { ListItem, Right, Left, Button, Text, Icon, Body } from "native-base";
import { ShopItemStyled } from "../ShopList/style";
import NumericInput from "react-native-numeric-input";
import { CartButtonStyled } from "../buttons/style";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/actions/cartActions";


const ProductItem = ({ navigation, product }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);

  const handleAdd = () => {
    const newItem = { 
      quantity, 
      productId: product.id };
      
      dispatch(addItem(newItem));
    };

  return (
    <ListItem >
      <Left>
      <ShopItemStyled onPress={() => navigation.navigate(("ProductDetail"), {product}) }>
        {product.name}
      </ShopItemStyled>
      </Left>
     
      <Body>
      <Right>
      <NumericInput 
         rounded
         totalHeight={30}
         totalWidth={60}
         rightButtonBackgroundColor='#997379' 
         leftButtonBackgroundColor='#739993'
         onChange={setQuantity}
         />
      </Right>
      </Body> 
      <CartButtonStyled type="FontAwesome" name="cart-plus" onPress={handleAdd}/> 

    </ListItem>
  );
};

export default ProductItem;