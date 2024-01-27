// ApiService.js
import axios from 'axios';

class ApiService {
  constructor() {
    this.API_URL = 'http://localhost:3003';
  }

  async fetchData() {
    try {
      const response = await axios.get(`${this.API_URL}/datai`);
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching data: ${error.message}`);
    }
  }

  async postUpdateScore(postData) {
    try {
      const response = await axios.post(`${this.API_URL}/updateScore`, postData);
      return response.data;
    } catch (error) {
      throw new Error(`Error posting data: ${error.message}`);
    }
  }

  async postUpdateUpgrades(postData) {
    try {
      const response = await axios.post(`${this.API_URL}/updateUpgrade`, postData);
      return response.data;
    } catch (error) {
      throw new Error(`Error posting data: ${error.message}`);
    }
  }

  async postAddUpgrades(postData) {
    try {
      const response = await axios.post(`${this.API_URL}/addUpgrade`, postData);
      return response.data;
    } catch (error) {
      throw new Error(`Error posting data: ${error.message}`);
    }
  }
}

export default ApiService;
