import React from 'react';
import { ScrollView ,View } from 'react-native';
import Listkhuyenmai from'../../khuyenmai/listkhuyenmai'; 
// import { ScrollView } from 'react-native';

const KhuyenMaiScreen = ( {navigation}) => {
      console.log(navigation)
      return (
         <ScrollView>
            <View>
               <Listkhuyenmai navigation={navigation}/>
            </View>
         </ScrollView>
      );
   }

export default KhuyenMaiScreen;
