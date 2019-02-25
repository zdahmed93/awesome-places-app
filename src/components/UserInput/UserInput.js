import React, {Component} from 'react';
import {Button, TextInput, View, StyleSheet} from "react-native";

const UserInput = (props) => {
  return(
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.placeInput}
        placeholder="An awesome place"
        value={props.placeName}
        onChangeText={props.handlePlaceNameInputChange}
      />
      <Button
        title="Add"
        style={styles.placeButton}
        onPress={props.handleAddButtonPress}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 5
  },
  placeInput: {
    width: "70%",
    color: 'blue',
    fontSize: 25
  },
  placeButton: {
    width: '30%'
  },
});

export default UserInput;

