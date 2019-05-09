import {ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE} from '../actions/actionsTypes'

const initialState = {
  places: [],
  selectedPlace: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: [
          ...state.places,
          {
            key: Math.random().toString(),
            name: action.placeName,
            image: {
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc7bwNlxy-vY_xceXF-N60x5VSTWrIl5hzROQ2A8j496roYmxbrw"
            }
          }
        ]
      };

    case DELETE_PLACE:
      return {
        ...state,
        places: [...state.places.filter((item) => (item.key !== state.selectedPlace.key))],
        selectedPlace: null
      };

    case SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find(item => (item.key === action.placeKey))
      };

    case DESELECT_PLACE:
      return {
        ...state,
        selectedPlace: null
      };

    default:
      return state
  }
};

export default reducer;