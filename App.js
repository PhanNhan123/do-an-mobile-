// import React from 'react';
// import {
//   View,
//   Text,
//   StatusBar,
//   ScrollView
// } from 'react-native';
import HomeScreen from './src/screens/home';
import KhuyenMaiScreen from './src/screens/khuyenmai';
import Product from './src/screens/product';
import ScreensList from './src/screens/list';
import CartScreen from './src/cart';

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
  SafeAreaView
} from "react-native"
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs"
import Icon from 'react-native-vector-icons/Ionicons'
export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{
        flex: 1, backgroundColor: '#f2f2f2'
      }}>
        <AppTabNavigator />
      </SafeAreaView>
    )
  }
}
// class  HomeScreen extends Component{
//   render()
//   {
//     return(
//       <View style={styles.container}>
//       <Text>Tab navigation </Text>
//       </View>
//     );
//   }
// }
// class  KhuyenMaiScreen extends Component{
//   render()
//   {
//     return(
//       <View style={styles.container}>
//       <Text>Khuyến mãi</Text>
//       </View>
//     );
//   }
// }
// class  ListScreen extends Component{
//   render()
//   {
//     return(
//       <View style={styles.container}>
//       <Text>List</Text>
//       </View>
//     );
//   }
// }
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
    // Product: {
    //   screen: Product,
    //   navigationOptions: {
    //     tabBarLabel: 'Product',
    //     tabBarIcon: ({ tintColor }) => (
    //       <Icon name="ios-list" color={tintColor} size={24} />
    //     )
    //   }
    // },
    
    
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
    }
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
}
)
const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
  }
)