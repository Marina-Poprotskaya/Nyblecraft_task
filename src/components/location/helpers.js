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
    }
    
  };
  console.log('dataAboutLocation.date: ', dataAboutLocation.date);
  return dataAboutLocation;
}

export { createTemplateObjectWithLocation };