const axios = require('axios');
async function fetchUserData() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
    console.log('User Data:', response.data);
  } catch (error) {
    console.error('API Error:', error);
  }
}
fetchUserData();
