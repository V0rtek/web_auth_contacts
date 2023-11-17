import axios from 'axios';

/**
 * AJAX: Post login
 * @param {String} login .
 * @param {String} password .
 */
export async function login(login, password) {
  const reponse = await axios.post('login', {login, password});
  console.log(reponse);
  axios.defaults.headers.common['Authorization'] = 'Bearer ' +
    reponse.data.token;

  return true;
}
