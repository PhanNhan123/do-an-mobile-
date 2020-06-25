
import  React,{Component} from 'react';
import {
  Image, 
  Text,
  View,SafeAreaView,StyleSheet
} from 'react-native'; 
 class CartScreen extends Component {
    render() {
      return (
        <SafeAreaView style={styles.container}>
        <Text>Chi tiết giỏ hàng</Text>
      </SafeAreaView>

      );
    }
  }

  export default CartScreen;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });