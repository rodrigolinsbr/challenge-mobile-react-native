import axios from 'axios';

const api = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public',
  // params: {
  //   apikey: '6929bbd137d95f6c0e9515db4f9c07c9',
  //   ts: '1611016199022',
  //   hash: '03db90f0c9df8dc271483b56392a43be',
  // },
});

class Service {
  static getCaracters = async (limit, offset ) => {
    //  try {
       let res = await axios.get('http://gateway.marvel.com/v1/public/characters?ts=1611016199022&apikey=6929bbd137d95f6c0e9515db4f9c07c9&hash=03db90f0c9df8dc271483b56392a43be').
       then(response => (alert(response)))
      //  return res.data.results
   
    // let res = await api.get('/characters?ts=1611016199022&apikey=6929bbd137d95f6c0e9515db4f9c07c9&hash=03db90f0c9df8dc271483b56392a43be', {      
    //   params: { limit:limit, offset: offset }
    // });
    // alert(res)
  //   return res
  // } catch (erro) {
  //   alert(erro)
  //   return erro;
  }

  static  getHeroes = async() => {

    let res = await axios.get('http://gateway.marvel.com/v1/public/characters?ts=1611016199022&apikey=6929bbd137d95f6c0e9515db4f9c07c9&hash=03db90f0c9df8dc271483b56392a43be&limit=100&offset=1');
    
    return res.data.data.results
    
  }

}

// const getHeroes = async ({ limit, offset }) => {
  



export default Service;

