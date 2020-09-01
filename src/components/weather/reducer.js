import {
  WEATHER_REQUEST,
  WEATHER_SUCCESS,
  WEATHER_FAIL,
} from './constants';

const initialState = {
      temperature: 0,
      description: 'Unknown',
      feelsLike: 0,
      humidity: 0,
      wind: 0,
};

function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case WEATHER_REQUEST:
      return {
        ...state,
        ...action.payload,
      };

    case WEATHER_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };

    case WEATHER_FAIL:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}

export default weatherReducer;
