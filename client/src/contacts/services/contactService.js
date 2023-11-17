import axios from 'axios';

/**
 * .
 */
export async function getAllContacts() {
  const res = await axios.get('contacts');
  return res.data;
}
