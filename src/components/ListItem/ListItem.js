import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const ListItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onItemPress}>
      <View style={styles.listItem}>
        <Text style={{fontSize: 30}}>{props.placeName}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#eee',
    width: '100%',
    marginBottom: 5
  }
})

export default ListItem