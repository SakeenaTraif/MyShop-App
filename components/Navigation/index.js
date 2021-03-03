import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//React-Native
import { NavigationContainer, DefaultTheme} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import Home from "../Home";
import ShopList from "../ShopList";
import ShopDetail from "../ShopDetail";
import ProductDetail from "../ProductDetail";

const navTheme = DefaultTheme;
navTheme.colors.background = '#f7e9eb';

const RootNavigator = () =>{
    const { Navigator, Screen } = createStackNavigator();
        return (
            <NavigationContainer  theme={navTheme}>
                <Navigator  initialRouteName="Home">
                <Screen name="Home" component={Home} 
                   options={{headerShown: false}} />

                <Screen name="ShopList" component={ShopList} 
                options={{headerStyle: {backgroundColor: "#ffc6d0"}}} />
                <Screen name="ShopDetail" component={ShopDetail}
                options = {({route}) => { 
                    return { title: route.params.shop.name,
                    };
                    }} />
                <Screen name="ProductDetail" component={ProductDetail}
                options = {({route}) => { 
                    return { title: route.params.product.name,
                    };
                    }} />
                </Navigator>
            </NavigationContainer>
        );
        }

export default RootNavigator;