import React from 'react';
import {ScrollView, StyleSheet} from 'react-native'
import ListItem from "../ListItem/ListItem";


const PlacesListing = (props) => {
  return (
    <ScrollView style={styles.listItemsContainer}>
      {props.places.map((item,index) => (
        <ListItem key={index} placeName={item} onItemPress={() => props.onPlacePress(index)}/>
      )
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  listItemsContainer: {
    width: '100%',
    padding: 10
  }
});


export default PlacesListing;