import React from 'react';
import {FlatList, StyleSheet} from 'react-native'
import ListItem from "../ListItem/ListItem";


const PlacesListing = (props) => {
  return (
    <FlatList
      style={styles.listItemsContainer}
      data={props.places}
      renderItem={(info) => (<ListItem
        key={info.item.key}
        placeName={info.item.name}
        placeImage={info.item.image}
        onItemPress={() => props.onPlacePress(info.item.key)}
      />)}
    />

)
}

const styles = StyleSheet.create({
  listItemsContainer: {
    width: '100%',
    padding: 10
  }
});


export default PlacesListing;