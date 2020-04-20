import React from 'react';
import {
   View,
   Text,
   Dimensions,
   Image
} from 'react-native';

import Carousel from 'react-native-snap-carousel';

const AppCarousel = (props) => {
   console.disableYellowBox = true;
   const screenWidth = Dimensions.get('window').width;

   const _renderItem = ({ item }) => {
      return (
         <View>
            <Text>{item.title}</Text>
            <Image style={{ width: screenWidth / 2 }} source={require('../../assets/images/banner-noel1-1.jpg')} />
         </View>
      );
   };

   return (
      <>
         <Carousel
            data={props.data}
            renderItem={_renderItem}
            sliderWidth={screenWidth}
            itemWidth={screenWidth / 2}
            loop={true}
         />
      </>
   );
};

export default AppCarousel;
