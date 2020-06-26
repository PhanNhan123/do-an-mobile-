import  React from 'react';
import {styles}  from '../styles'
import {
  Image, 
  Text,
  View,
  Dimensions
} from 'react-native'; 
const Listkhuyenmai = () => 
{
  const screenHeight = Dimensions.get('window').height;
   const screenWidth = Dimensions.get('window').width;
  return(
    <>
    <View>
      <View style={{width:'100%',height:screenHeight/3}} >
          <Image style={{width:'100%',height:'100%',position:'relative' } }source={require('../../assets/images/tai-nghe-jbl-t500btblk.jpg')}>
          </Image>
          <Text style={{position:'absolute',color:'red',fontSize:30,right:10,top:100,fontFamily:'Open Sans'}}>SALE!</Text>
          <View style={{width:'100%',height:screenHeight/20}}>
            <Text style={styles.title}>
              Khuyến mãi hơn cả khuyến mãi 
            </Text>
          </View>
      </View>
      <View>

      </View>
    
    </View>
    </>
  );
};
export default Listkhuyenmai;