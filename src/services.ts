import axios from 'axios';

const baseUrl = 'http://localhost:3000/';

class ApiService {
  async fetchUsers() {
    try {
      const response = await axios.get(baseUrl + 'users');
      return response.data;
    } catch (err) {
      throw err;
    }
  }

  async createUser(user: any) {
    try {
      const response = await axios.post(baseUrl + 'users', user);
      return response.data;
    } catch (err) {
      throw err;
    }
  }


}

export const apiService = new ApiService();