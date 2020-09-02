const createTemplateObjectWithWeather = (data) => {
  const dataNew = data.data[0];
  const currentDate =  new Date();
  const { description } = dataNew.weather;
  const dataAboutWeather = {
      temperature: `${dataNew.temp.toFixed()}°C`,
      description: description,
      feelsLike: `${dataNew.app_temp.toFixed()}°C`,
      humidity: `${dataNew.rh}%`,
      wind: `${dataNew.wind_spd} m/s`,
      date: JSON.stringify(currentDate),
  };
  return dataAboutWeather;
}

const getherDataFromStoreAndLocaleStorage = (store) => {
  const result = JSON.parse(localStorage.getItem('state')) || [];
  const arrayWithAllData = [...result, store];
  if(arrayWithAllData.length > 20) {
    arrayWithAllData.shift();
  }
  localStorage.setItem('state', JSON.stringify(arrayWithAllData));
}

export { createTemplateObjectWithWeather, getherDataFromStoreAndLocaleStorage };