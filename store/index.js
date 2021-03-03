import {fetchProducts} from "./actions/productActions";
import {fetchShops} from "./actions/shopActions";
// import { checkForToken } from "./actions/authActions";
import {applyMiddleware,compose, createStore} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";


const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(fetchProducts());
store.dispatch(fetchShops());
// store.dispatch(checkForToken());

export default store;