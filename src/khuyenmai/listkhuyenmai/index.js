import  React from 'react';
import {styles}  from '../styles'
import {
  Image, 
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from 'react-native'; 
const Listkhuyenmai = () => 
{
  const screenHeight = Dimensions.get('window').height;
   const screenWidth = Dimensions.get('window').width;
  return(
    <ScrollView>
    <View>
      <View style={{flex:1, flexDirection: 'row',marginTop:20}}>
        <View style={{width:'45%',height:screenHeight/3,left:10,borderRadius: 10,
    shadowColor:'black',shadowOpacity:10,elevation: 3}}>
          <View style={{width:'97%',height:'70%',left:2}} >
            <Image style={{width:'100%',height:'100%',borderRadius: 10,position:'relative' } }source={require('../../assets/images/tai-nghe-jbl-t500btblk.jpg')}></Image>
            <Text style={{position:'absolute',color:'red',fontSize:30,right:10,top:100,fontFamily:'Open Sans'}}>SALE!</Text>    
          </View>
          <View style={{width:'95%',left:20}}>
            <TouchableOpacity style={{marginTop:10,height:45}}>
              <Text style={{color: "black",fontSize:20,}}>Tai nghe jbl </Text>  
            </TouchableOpacity>
          </View>
        </View>
        <View style={{width:'45%',height:screenHeight/3,left:20,borderRadius: 10,
    shadowColor:'black',shadowOpacity:10,elevation: 3}}>
          <View style={{width:'97%',height:'70%',left:2}}>
            <Image style={{width:'100%',height:'100%',borderRadius: 10,position:'relative' } }source={require('../../assets/images/Loa-bose-Soundlink-mini.jpg')}></Image>
            <Text style={{position:'absolute',color:'white',transform:[{rotate:"-20deg"}],fontSize:22,bottom:90,fontFamily:'Open Sans'}}>SALE UP TO 50%</Text>
          </View>
          <View style={{width:'95%',left:20}}>
            <TouchableOpacity style={{marginTop:10,height:45}}>
              <Text style={{color: "black",fontSize:20,}}>Loa bose Soundlink mini </Text>  
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{flex:1,flexDirection: 'row',marginTop:20}}>
        <View style={{width:'45%',height:screenHeight/3,left:10,borderRadius: 10,
    shadowColor:'black',shadowOpacity:10,elevation: 3}}>
          <View style={{width:'97%',height:'70%',left:2}}>
            <Image style={{width:'100%',height:'100%',borderRadius: 10,position:'relative' } }source={require('../../assets/images/airpods.jpg')}></Image>
            <Text style={{position:'absolute',color:'red',top:50,fontSize:34}}>Big sale</Text>
          </View>
          <View style={{width:'95%',left:20}}>
            <TouchableOpacity style={{marginTop:10,height:45}}>
              <Text style={{color: "black",fontSize:20,}}>Tai nghe airpods </Text>  
            </TouchableOpacity>
          </View>
        </View>
        <View style={{width:'45%',height:screenHeight/3,left:20,borderRadius: 10,
    shadowColor:'black',shadowOpacity:10,elevation: 3}}>
          <View style={{width:'97%',height:'70%',left:2}}>
            <Image style={{width:'100%',height:'100%',borderRadius: 10,position:'relative' } }source={require('../../assets/images/tai-nghe-iphone-5.jpg')}></Image>
            <Text style={{position:'absolute',color:'red',top:50,fontSize:24}}>Sale 20%</Text>
          </View>
          <View style={{width:'95%',left:20}}>
            <TouchableOpacity style={{marginTop:10,height:45}}>
              <Text style={{color: "black",fontSize:20,}}>Tai nghe jbl </Text>  
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
    </ScrollView>
  );
};

export default Listkhuyenmai;