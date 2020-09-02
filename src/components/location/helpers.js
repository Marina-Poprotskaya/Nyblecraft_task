const createTemplateObjectWithLocation = (data) => {
  const { loc } = data;
  const currentDate = new Date();
  const dataAboutLocation = {
    coordinates: {
      latitude: loc.split(',')[0],
      longitude: loc.split(',')[1],
    },
    adress: {
      country: data.country,
      city: data.city,
    },
    date: {
      day: currentDate.toLocaleDateString(),
      time: currentDate.toLocaleTimeString().slice(0,-3),
    },
    idDate: JSON.stringify(currentDate),
  };
  return dataAboutLocation;
}

export { createTemplateObjectWithLocation };