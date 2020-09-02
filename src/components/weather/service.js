import { 
  weatherRequest, 
  weatherSuccess, 
  weatherFail } from './actions';
import { WEATHER_KEY } from './constants';
import { createTemplateObjectWithWeather, getherDataFromStoreAndLocaleStorage } from './helpers'

const getDataAboutWeather = () => async (dispatch, getState) => {
  const store = getState();
  const { latitude } = store.location.coordinates
  const { longitude } = store.location.coordinates
  try {
    dispatch(weatherRequest());
    const urlweather = `https://api.weatherbit.io/v2.0/current?lat=${latitude}&lon=${longitude}&key=${WEATHER_KEY}`;
    const response = await fetch(urlweather);
    const data = await response.json();
    const weatherObject = createTemplateObjectWithWeather(data);
    dispatch(weatherSuccess(weatherObject));
    const newStore = getState();
    dispatch(getherDataFromStoreAndLocaleStorage(newStore));
  } catch (error) {
    dispatch(weatherFail(error));
  }
};



export { getDataAboutWeather };
