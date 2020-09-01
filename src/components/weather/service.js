import { 
  weatherRequest, 
  weatherSuccess, 
  weatherFail } from './actions';
import { WEATHER_KEY } from './constants';
import { createTemplateObjectWithWeather } from './helpers'


const getDataAboutWeather = () => async (dispatch, getStore) => {
  const store = getStore();
  const { latitude } = store.location.coordinates
  const { longitude } = store.location.coordinates
  try {
    dispatch(weatherRequest());
    const urlweather = `https://api.weatherbit.io/v2.0/current?lat=${latitude}&lon=${longitude}&key=${WEATHER_KEY}`;
    const response = await fetch(urlweather);
    const data = await response.json();
    const weatherObject = createTemplateObjectWithWeather(data);
    dispatch(weatherSuccess(weatherObject));
  } catch (error) {
    dispatch(weatherFail(error));
  }
};



export { getDataAboutWeather };
