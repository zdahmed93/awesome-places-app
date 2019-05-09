import React, {Component} from 'react';
import {Button, TextInput, View, StyleSheet} from "react-native";

class UserInput extends Component {
  state = {
    input: ''
  }

  handlePlaceNameInputChange = (text) => {
    this.setState({input: text})
  }

  render(){
    return(
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.placeInput}
          placeholder="An awesome place"
          value={this.state.input}
          onChangeText={(text) => this.handlePlaceNameInputChange(text)}
        />
        <Button
          title="Add"
          style={styles.placeButton}
          onPress={() => {
            if ( ! this.state.input ) return;
            return this.props.handleAddButtonPress(this.state.input)
          }
          }
        />
      </View>
    )
  }

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

