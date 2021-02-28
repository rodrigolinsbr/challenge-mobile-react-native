import axios from "axios";

const api = axios.create({
  baseURL: "http://gateway.marvel.com/v1/public",
  // params: {
  //   apikey: '6929bbd137d95f6c0e9515db4f9c07c9',
  //   ts: '1611016199022',
  //   hash: '03db90f0c9df8dc271483b56392a43be',
  // },
});

class Service {
  static getHeroes = async (limit, offset) => {
    let res = await axios.get(
      "http://gateway.marvel.com/v1/public/characters?ts=1611016199022&apikey=6929bbd137d95f6c0e9515db4f9c07c9&hash=03db90f0c9df8dc271483b56392a43be&limit=" +
        limit +
        "&offset=" +
        offset
    );

    return res.data.data.results;
  };
}

// const getHeroes = async ({ limit, offset }) => {

export default Service;
