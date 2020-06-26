import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  FlatList,
}from 'react-native'
import DropdownMenu from 'react-native-dropdown-menu';
class List extends Component{
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      data: [
        {id:1,key: 'Tai nghe iphone 5', image:"https://cdn.didongthongminh.vn/upload_images/2018/03/tai-nghe-iphone-5-5s-zin-chinh-hang-1447123929.png"},
        {id:2,key: 'Tai nghe iphone 5', image:"https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/1/_/1_9_3_1_1.jpg"} ,
        {id:3,key: 'Tai nghe Bluetooth kiêm loa SODO MH1', image:"https://gomhang.vn/images/stories/virtuemart/product/tai-ngh-bluetoooth-mh1-136.jpg"}, 
        {id:4,key: 'SVHouse Tai nghe Bluetooth Sennheiser CX7.00 BT', image:"https://www.sony.com.vn/image/dc3886d465d5cd0c4bc44e44132ffb73?fmt=pjpeg&wid=165&bgcolor=FFFFFF&bgc=FFFFFF"}, 
        {id:5,key: 'Tai Nghe Bluetooth Apple Airpods 2019', image:"https://salt.tikicdn.com/cache/280x280/ts/product/8a/a0/bc/1745123d06efa4ba5e0a43d1b890bb94.jpg"}, 
        {id:6,key: 'Tai nghe AKG Chính Hãng Galaxy S8, S8 Plus, Giá Rẻ', image:"https://www.xtmobile.vn/vnt_upload/product/Phu_kien/thumbs/600_tai-nghe-nhet-tai-samsung-galaxy-s8-akg-phukienshop-500x500.jpg"}, 
      ]
    };
  }
  
  detail = () => {
    Alert.alert('Thành công', 'Sản phẩm đã được thêm vào giỏ hàng')
  }

  render() {
    var data = [["Tai nghe","Loa"],["Dưới 200.000đ","từ 200.000đ - 500.000đ","trên 500.000đ"]];
    return (
      <View style={{flex: 1}}>
        <View style={{height: 60}} />
        <DropdownMenu
          style={{flex: 1}}
          bgColor={'white'}
          tintColor={'#666666'}
          activityTintColor={'green'}
          handler={(selection, row) => this.setState({text: data[selection][row]})}
          data={data}
        >
            <View style={{flex: 1}}>
              <Text style={{height: 120}}>
              </Text>
              <View style={styles.container}>
              <FlatList style={styles.list}
                contentContainerStyle={styles.listContainer}
                data={this.state.data}
                horizontal={false}
                numColumns={2}
                keyExtractor= {(item) => {
                  return item.id;
                }}
                ItemSeparatorComponent={() => {
                  return (
                    <View style={styles.separator}/>
                  )
                }}
                renderItem={(post) => {
                  const item = post.item;
                  return (
                    <View style={styles.card}>
                      <Image style={styles.cardImage} source={{uri:item.image}}/>
                      <View style={styles.cardFooter}>
                        <View style={styles.socialBarContainer}>
                          <View style={styles.socialBarSection}>
                            <TouchableOpacity style={styles.socialBarButton}>
                              <Text style={styles.socialBarLabel}>{item.key}</Text>
                            </TouchableOpacity>
                          </View>
                          <View style={styles.socialBarSection}>  
                            <TouchableOpacity style={styles.socialBarButton} onPress={() => this.detail()}>
                              <Text style={[styles.socialBarLabel, styles.share]}>Chi tiết</Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    </View>
                  )
                }}/>
              </View> 
            </View>
          </DropdownMenu>    
      </View>
    );
  }
}
export default List;
const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:0,
    backgroundColor:"#eee"
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor:"#E6E6E6",
  },
  listContainer:{
    alignItems:'center'
  },
  separator: {
    marginTop: 0,
  },
  /******** card **************/
  card:{
    marginVertical: 8,
    flexBasis: '47%',
    marginHorizontal: 5,
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage:{
    flex: 1,
    height: 200,
    width: null,
  },
  /******** card components **************/
  share:{
    color: "#25b7d3",
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  socialBarSection: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  socialBarButton:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});  