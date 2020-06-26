import React from 'react';
import {
   View,
   Text,
   Image,
   Dimensions
} from 'react-native';
import { styles } from './styles';
const News1 =() => {
    const screenHeight = Dimensions.get('window').height;
    const screenWidth = Dimensions.get('window').width;
    return(
       
        <View style={styles.quang_cao}>
                <View style={styles.img}>
                    <Image style={{width: '80%' , height : '80%'}} source={require('../../assets/images/loa-jbl-charge-4-black.jpg')}></Image>
                </View>
                <View style={styles.textcontent}>
                    <Text style={styles.title}>
                        Loa bluetooth JBL Charge 4 chính hãng giá tốt nhất 2019
                    </Text>
                    <Text style={styles.title}>
                        Thiết kế nhỏ gọn, thuận tiện khi đi du lịch, dã ngoại
                    </Text>

                </View>
        </View> 
    ); 
}; 
export default News1;