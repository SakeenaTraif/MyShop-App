import React  from "react";
import { Button, Text, List, View } from "native-base";
import { useSelector } from "react-redux";
import CartItem from "./cartItem";
import { useDispatch } from "react-redux" ;
import { checkout } from "../../store/actions/cartActions";

const CartList = () => {
  const {items} = useSelector((state) => state.cartReducer);
  const { products } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  const cartList = items
  .map((item) => ({
    ...products.find((product) => product.id === item.productId),
    quantity: item.quantity,
  }))

  .map((product) => <CartItem  item={product} key={product.id}/>);

  return (
    <View>
      <List>{cartList}</List>
      { items.length !== 0 ? (
         <Button block backgroundcolor="#841584" onPress={()=> dispatch(checkout())}>
         <Text>Checkout</Text>
       </Button>
      ):(
        <Text>Start shoping first to show your cart</Text>
      )}
    </View>
  );
};

export default CartList;