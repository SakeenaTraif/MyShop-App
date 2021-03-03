//React
import React from 'react';
import RootNavigator from './components/Navigation';
import { Provider } from "react-redux"; 
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
       <RootNavigator/>
    </Provider>
  );
}