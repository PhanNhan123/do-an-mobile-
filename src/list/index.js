import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Button } from 'react-native'


class List extends Component {
    state = {
       names: [
          {
             id: 0,
             name: 'Tai Nghe',
          },
          {
             id: 1,
             name: 'Cáp sạc',
          },
          {
            id: 2,
            name: 'Bao da, ốp',
         },
       ]
    }
    alertItemName = (item) => {
       alert(item.name)
    }
    render() {
       return (
          <View>
             {
                this.state.names.map((item, index) => (
                   <TouchableOpacity
                      key = {item.id}
                      style = {styles.container}
                      onPress = {() => this.alertItemName(item)}>
                      <Text style = {styles.text}>
                         {item.name}
                      </Text>
                   </TouchableOpacity>
                ))
             }
          </View>
       )
    }
 }
 export default List
 const styles = StyleSheet.create ({
    container: {
       padding: 10,
       marginTop: 3,
       backgroundColor: '#d9f9b1',
       alignItems: 'center',
    },
    text: {
       color: '#4f603c'
    }
 })