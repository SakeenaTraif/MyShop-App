import instance from "./instance";

// TYPES
import  {FETCH_SHOP} from  "./types";

// ACTIONS
export const fetchShops = () =>{
  return async (dispatch) =>{
    try {
      const response = await instance.get("/shops");
      dispatch({
        type:FETCH_SHOP,
        payload:{shops: response.data},
      });
      
    } catch (error) {
      console.log(error);
      
    }
  };
};
