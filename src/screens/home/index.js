import React from 'react';
import { ScrollView } from 'react-native';

import News from '../../components/news';
import AppCarousel from '../../components/carousel';

const HomeScreen = () => {
   let data = [1, 2, 3, 4, 5, 6, 7];
   return (
      <ScrollView>
         <News />
         <AppCarousel
            data={data}
         />
      </ScrollView>
   );
}

export default HomeScreen;
