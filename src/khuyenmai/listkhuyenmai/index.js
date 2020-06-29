import React, { Component } from 'react';
import {
  Image,
  Text,
  View,
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Systrace
} from 'react-native';
import { withNavigation } from 'react-navigation';
import ProductDetail from '../../product';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const productWidth = (screenWidth - 50) / 2;
const productImageHeight = (productWidth / 380) * 450;
class Listkhuyenmai extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Sản phẩm khuyến mãi</Text>
        </View>
        <View style={styles.body}>
          <TouchableOpacity>
            <View style={styles.productContainer} >
              <Image style={styles.productImage} source={require("../../assets/images/tai-nghe.jpg")} />
              <Text style={styles.productName} >Thị Hân </Text>
              <Text style={styles.productPrice}>Giá</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.productContainer} >
              <Image style={styles.productImage} source={require("../../assets/images/tai-nghe.jpg")} />
              <Text style={styles.productName} >Thị Hân</Text>
              <Text style={styles.productPrice}>Giá</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.productContainer} >
              <Image style={styles.productImage} source={require("../../assets/images/tai-nghe.jpg")} />
              <Text style={styles.productName} >Thị Hân</Text>
              <Text style={styles.productPrice}>Giá</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.productContainer} >
              <Image style={styles.productImage} source={require("../../assets/images/tai-nghe.jpg")} />
              <Text style={styles.productName} >Thị Hân</Text>
              <Text style={styles.productPrice}>Giá</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.productContainer} >
              <Image style={styles.productImage} source={require("../../assets/images/tai-nghe.jpg")} />
              <Text style={styles.productName} >Thị Hân rất vui nè hi hi</Text>
              <Text style={styles.productPrice}>Giá</Text>
            </View>
          </TouchableOpacity>


        </View>
      </View>
    );
  }
};

export default Listkhuyenmai;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 10,
    shadowColor: '#2E272B',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
  },
  titleContainer: {
    height: 50,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  tagContainer: {
    flexWrap: 'wrap',
  },
  title: {
    color: '#D3D3CF',
    fontSize: 20,
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: "wrap"
  },
  productContainer:
  {
    marginTop: 20,
    width: productWidth,
    borderRadius: 20,
    elevation: 5,
  },
  productImage: {
    marginTop: 1,
    marginLeft: 4,
    width: productWidth - 8,
    height: productImageHeight - 10,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  productName: {
    marginLeft: 10,
    fontSize: 18,
    flexDirection: 'column',
  },
  productPrice: {
    marginLeft: 10,
    fontSize: 18,
    marginBottom: 5
  }
});