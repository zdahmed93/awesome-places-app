import React, {Component} from 'react';
import {TextInput, Platform, StyleSheet, Text, View, Button} from 'react-native';
import UserInput from './src/components/UserInput/UserInput'
import PlacesListing from './src/components/PlacesListing/PlacesListing'
import placeImage from './assets/nature-image.jpg'
import PlaceDetails from './src/components/PlaceDetails/PlaceDetails'
import {connect} from 'react-redux'
import {addPlace, deletePlace, selectPlace, deselectPlace} from './src/store/actions/index'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// type Props = {};

// class App extends Component<Props> {

  class App extends Component{

  handleAddButtonPress = (placeName) => {
    this.props.onAddPlace(placeName)
  }

  selectPlace = (key) => {
   this.props.onSelectPlace(key)
  }

  deletePlace = () => {
  this.props.onDeletePlace();
  console.log('deleted')
  }

  closeModal = () => {
    this.props.onDeselectPlace()
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.selectedPlace &&
        <PlaceDetails
          selectedPlace={this.props.selectedPlace}
          onDeleteButtonPress={this.deletePlace}
          onCloseButtonPress={this.closeModal}
        />
        }
        <UserInput
          // handlePlaceNameInputChange={(text) => this.handlePlaceNameInputChange(text)}
          handleAddButtonPress={this.handleAddButtonPress}
        />
        <PlacesListing
          places={this.props.places}
          onPlacePress={this.selectPlace}
        />
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

const mapStateToProps = (state) => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);