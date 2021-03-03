import { FETCH_PRODUCT } from "../actions/types";

const initialState = {
  products:[],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT:
      return{
      ...state,
      products: action.payload.products,
      };

    default:
      return state;
  }
};

export default reducer;