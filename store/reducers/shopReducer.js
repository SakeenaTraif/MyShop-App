import * as types from "../actions/types";

const initialState = {
  shops:[],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_SHOP:
      return{
      ...state,
      shops: action.payload.shops,
      };

    default:
      return state;
  }
};

export default reducer;