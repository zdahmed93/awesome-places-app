import {ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE} from './actionsTypes';

export const addPlace = (placeName) => {
  return {
    type: ADD_PLACE,
    placeName
  }
};

export const deletePlace = () => {
  return {
    type: DELETE_PLACE
  }
};

export const selectPlace = (key) => {
  return {
    type: SELECT_PLACE,
    placeKey: key
  }
};

export const deselectPlace = () => {
  return {
    type: DESELECT_PLACE
  }
};
