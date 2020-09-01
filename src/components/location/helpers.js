const createTemplateObjectWithLocation = (data) => {
  const { loc } = data;
  const dataAboutLocation = {
    coordinates: {
      latitude: `${loc.split(',')[0]}°`,
      longitude: `${loc.split(',')[1]}°`,
    },
    adress: {
      country: data.country,
      city: data.city,
    },
  };
  return dataAboutLocation;
}

export { createTemplateObjectWithLocation };