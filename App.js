
import React, {Component} from 'react';
import {TextInput, Platform, StyleSheet, Text, View, Button} from 'react-native';
import UserInput from './src/components/UserInput/UserInput'
import PlacesListing from './src/components/PlacesListing/PlacesListing'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  state = {
    placeName: '',
    places: []
  }

  handlePlaceNameInputChange = (text) => {
    this.setState({placeName: text})
  }

  handleAddButtonPress = () => {
    if (this.state.placeName === "") return;
    this.setState(prevState => ({
      places: [...prevState.places, prevState.placeName]
    }))
    //this.setState({placeName: ''})
  }

  deletePlace = (index) => {
    this.setState(prevState => ({
      places: prevState.places.filter((item, i) => (i !== index))
    }))
  }

  render() {
    return (
      <View style={styles.container}>
        <UserInput
          placeName={this.state.placeName}
          handlePlaceNameInputChange={(text) => this.handlePlaceNameInputChange(text)}
          handleAddButtonPress={() => this.handleAddButtonPress()}
        />
        <PlacesListing places={this.state.places} onPlacePress={this.deletePlace}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
  }
});
