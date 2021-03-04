import * as types from "../actions/types";

const initialState = {
    items: [],
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case types.CHECKOUT:
        alert("Thank you for choosing us!");
        return {
          ...state,
          items: [],
        };

      case types.DELETE_ITEM:
        return{
          ...state,
          items: state.items.filter((item) => item.productId !== action.payload),
        };

      case types.ADD_ITEM:
        const newItem = action.payload;
        const foundItemIndex = state.items.findIndex(
          (item) => item.productId === newItem.productId);

          if (foundItemIndex >= 0){
            state.items[foundItemIndex] ={
              productId: newItem.productId,
              quantity: newItem.quantity + state.items[foundItemIndex].quantity,
            };
          }
        return {
          ...state,
          items:[...state.items, newItem],
        };


      default:
        return state;
    }
  };
  
  export default reducer;