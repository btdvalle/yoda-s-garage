import image from "../images/starship.png";

const getDataFromApi = () => {
  return fetch("https://swapi.co/api/starships/")
    .then(response => response.json())
    .then(data => formatData(data));
};

const formatData = data => {
  const result = data.results.map((starship, index) => {
    return {
      id: index,
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      pilots: starship.pilots,
      films: starship.films,
      image: image,
      checked: false
    };
  });
  return result;
};

export default getDataFromApi;
