import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'

const ListItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onItemPress}>
      <View style={styles.listItem}>
        <Image
          source={props.placeImage}
          style={styles.itemImage}
          //resizeMode='contain'
        />
        <Text style={{fontSize: 20}}>{props.placeName}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#eee',
    width: '100%',
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8
  },
  itemImage: {
    width: 30,
    height: 30,
    marginRight: 10
  }
})

export default ListItem