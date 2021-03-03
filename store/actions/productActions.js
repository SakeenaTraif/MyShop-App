
import instance from "./instance";

// TYPES
import  {FETCH_PRODUCT} from  "./types";

// ACTIONS
export const fetchProducts = () =>{
  return async (dispatch) =>{
    try {
      const response = await instance.get("/products");
      dispatch({
        type:FETCH_PRODUCT,
        payload:{products: response.data},
      });
      
    } catch (error) {
      console.log(error);
      
    }
  };
};
