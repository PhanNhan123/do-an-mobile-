import  React from 'react';
import {
  Image, 
  Text,
  View,Dimensions
} from 'react-native'; 
const Listkhuyenmai = () => 
{
  const screenHeight = Dimensions.get('window').height;
   const screenWidth = Dimensions.get('window').width;
  return(
    <>
    <View>
      <View style-={{flex:1}} >
        <Image style={{ width: screenWidth / 2 }}source={require('../../assets/images/banner-TET_DMX_banner_260x92.jpg')}></Image>
        <Text> khuyến mãi nhân dịp 20-11</Text>
      </View>
      <View >
        <Image style={{ width: screenWidth / 2 }}source={require('../../assets/images/banner-TET_DMX_banner_260x92.jpg')}></Image>
        <Text> khuyến mãi nhân dịp năm mới</Text>
      </View>
    </View>
    </>
  );
};
export default Listkhuyenmai;