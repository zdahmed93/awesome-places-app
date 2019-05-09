import React from 'react';
import {Modal, View, Text, Image, Button, StyleSheet} from 'react-native';

const PlaceDetails = (props) => {
  return(
    <Modal animationType="slide" onRequestClose={props.onCloseButtonPress}>
      <View style={styles.modalContainer}>
        <Image source={props.selectedPlace.image} style={styles.image}/>
        <Text style={styles.text}>{props.selectedPlace.name}</Text>
        <View>
          <Button title={"Delete"} color="red" onPress={props.onDeleteButtonPress}/>
          <Button title={"Close"} onPress={props.onCloseButtonPress}/>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    padding: 8,
    alignItems: 'center'

  },
  image: {
    width: "100%",
    height: "50%",
    margin: 10
  },

  text: {
    fontWeight: 'bold',
    fontSize: 40,
    marginBottom: 20
  }
})

export default PlaceDetails;