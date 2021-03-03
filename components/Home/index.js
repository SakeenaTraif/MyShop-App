import React from "react";
import {Title, HomeBackground, TopStyling,  BottomStyling, ButtonStyled, OverLayContainer} from "./style";

const Home = ({navigation}) => {
  return (
  <HomeBackground
    source={{
      uri:"https://eskipaper.com/images/dessert-background-1.jpg",}}>
 
 <OverLayContainer>
 <TopStyling>
  <Title>My Shop</Title>
 </TopStyling>

  <BottomStyling>
    <ButtonStyled onPress={() => navigation.navigate("ShopList")}>
     Go to Shops
    </ButtonStyled>
  </BottomStyling>
  </OverLayContainer>

</HomeBackground>
)};

export default Home;