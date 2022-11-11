import axios from 'axios';
axios.defaults.baseURL = 'https://6368c6be15219b8496067dd6.mockapi.io/contacts ';

// const controller = new AbortController();

export const getContacts = async () => {
  const response = await axios.get('/');
  return response;
};

export const getContactById = async contact_id => {
  const response = await axios.get(`/${contact_id}`);
  return response;
};


// export const getReviewsById = async movie_id => {
//   const options = {
//     params: {
//       api_key: API_KEY,
//       language: 'en-US',
//       signal: controller.signal,
//     },
//   };
//   const response = await axios.get(`/movie/${movie_id}/reviews`, options);
//   return response.data.results;
// };