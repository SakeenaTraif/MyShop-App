import React from "react";
import {Body,Icon,ListItem,Right,Text} from "native-base";
import {useDispatch} from "react-redux";
import { deleteItem } from "../../store/actions/cartActions";
import { CartButtonStyled } from "../buttons/style";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

    return (
      <ListItem>
        <Body>
            <Text>{item.name}</Text>
            <Text note>{item.price} BHD x {item.quantity}</Text>
        </Body>
        <Right>
          <CartButtonStyled name="trash" type="EvilIcons" onPress = {() => dispatch(deleteItem(item.id))} />
        </Right>
      </ListItem>
    );
  };
  
  export default CartItem;