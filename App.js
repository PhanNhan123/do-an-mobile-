
import HomeScreen from './src/screens/home';
import KhuyenMaiScreen from './src/screens/khuyenmai';
import Product from './src/screens/product';
import ScreensList from './src/screens/list';
import CartScreen from './src/cart';
import ChiTietSanPham from './src/screens/chitietsanpham';

// const App = () => {
//   return (
//     <HomeScreen />
//   );
// };

// export default App;
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity
} from "react-native"
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs"
import Icon from 'react-native-vector-icons/Ionicons'
import Icon1 from 'react-native-vector-icons/MaterialIcons'
import { Row } from 'react-native-table-component';
import {createStackNavigator} from 'react-navigation-stack'
export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{
        flex: 1, backgroundColor: '#f2f2f2'
      }}>
        <View style = {styles.navBar}>
          <Image source={ require('./src/assets/images/JBL-Logo.png')}  style={{ width:90,height:35} } ></Image>
          <View style={styles.rightNav} >
            <TouchableOpacity>
              <Icon1 style={styles.navItem} name="search" size={25} ></Icon1>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon1 style={styles.navItem} name="account-circle" size={25} ></Icon1>
            </TouchableOpacity>
          </View>
        </View>

        <AppTabNavigator />
      
      </SafeAreaView>
         
    )
  }
}
const AppTabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-home" color={tintColor} size={24} />
        )
      }
    },
    KhuyenMai: {
      screen: KhuyenMaiScreen,
      navigationOptions: {
        tabBarLabel: 'Khuyến mãi',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-star" color={tintColor} size={24} />
        )
      }
    },

    
    List: {
      screen: ScreensList,
      navigationOptions: {
        tabBarLabel: 'Danh sách',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-list" color={tintColor} size={24} />
        )
      }
    },

    Cart: {
      screen: CartScreen,
      navigationOptions: {
        tabBarLabel: 'Giỏ Hàng',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-cart" color={tintColor} size={24} />
        )
      }
    },
    ChiTietSanPham:{
      screen: ChiTietSanPham,
      navigationOptions:{
       
        tabBarButtonComponent: ()=><View/>
      }
    },
  }, {
  initialRouteName: 'Home',
  // order:['Settings','Home'],
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  animationEnabled: false,
  tabBarOptions: {
    activeTintColor: 'orange',
    inactiveTintColor: 'grey',
    style: {
      backgroundColor: '#f2f2f2'
    },
    indicatorStyle: {
      height: 0
    },
    showIcon: true
  }
},

)
const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    navBar:{
      height: 55,
      backgroundColor:'white',
      elevation : 3,
      paddingHorizontal: 15, 
      flexDirection: 'row',
      alignItems:'center',
      justifyContent:'space-between'
    } ,
    rightNav: {
      flexDirection: 'row'
    },
    navItem:{
      marginLeft:25
    } 
  }
) 
