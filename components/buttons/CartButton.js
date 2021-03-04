import React from 'react'
import {CartButtonStyled, CartTextStyled} from "./style";
import { useNavigation } from "@react-navigation/native";
import { Button } from 'native-base';
import { useSelector } from "react-redux";

const CartButton = () => {
    const navigation = useNavigation();

     const items = useSelector(state => state.cartReducer.items);

     let total = 0;
     items.forEach((item) => (total += item.quantity));
         

    return (
        <Button transparent>
         <CartTextStyled>{total}</CartTextStyled>
        <CartButtonStyled
        type="FontAwesome"
        name="cart-arrow-down"
        onPress={() => navigation.navigate("CartList")}
        />  
        </Button>
    );
};

export default CartButton;