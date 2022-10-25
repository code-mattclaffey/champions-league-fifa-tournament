const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

export const resolvers = {
  Query: {
    books: () => books,
  },
};


// export const resolvers = {
//   Query: {
//     teams: async () => {
//       const axios = require("axios");

//       const options = {
//         method: 'GET',
//         url: 'https://api-football-v1.p.rapidapi.com/v3/teams',
//         params: { id: '33' },
//         headers: {
//           'X-RapidAPI-Key': 'd92fa517dfmshd0e3061da7f89bbp18a86djsnff9b321fd112',
//           'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
//         }
//       };

//       try {
//         const response = await axios.request(options);

//         console.log(response.data);

//         return [response.data];
//       } catch(error) {
//         throw new Error(error);
//       }
//     },
//   },
// };
