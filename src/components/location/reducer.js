import {
  LOCATION_REQUEST,
  LOCATION_SUCCESS,
  LOCATION_FAIL,
} from './constants';

const initialState = {
    coordinates: {
      latitude: 0,
      longitude: 0,
    },
    adress: {
      Country: 'Unknown',
      City: 'Unknown',
    },
};

function locationReducer(state = initialState, action) {
  switch (action.type) {
    case LOCATION_REQUEST:
      return {
        ...state,
        ...action.payload,
      };

    case LOCATION_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };

    case LOCATION_FAIL:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}

export default locationReducer;