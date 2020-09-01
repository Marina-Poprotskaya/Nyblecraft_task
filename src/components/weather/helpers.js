const createTemplateObjectWithWeather = (data) => {
  const dataNew = data.data[0];
  const { description } = dataNew.weather;
  const dataAboutWeather = {
      temperature: `${dataNew.temp.toFixed()}°C`,
      description: description,
      feelsLike: `${dataNew.app_temp.toFixed()}°C`,
      humidity: `${dataNew.rh}%`,
      wind: `${dataNew.wind_spd} m/s`,
  };
  return dataAboutWeather;
}

export { createTemplateObjectWithWeather };